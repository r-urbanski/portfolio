import { useRef } from 'react'
import { useObserver } from '../../hooks/useObserver'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const Con = ({ icon, id, type, name, href }) => {
    return id !== 'email' ? (
        <a aria-label={type} target='_blank' rel='noopener noreferrer' className={`contact ${id}`} href={href}>
            {icon}
            <article className='contact-text'>
                <p>{type}</p>
                <h3>{name}</h3>
            </article>
        </a>
    ) : (
        <a aria-label={type} className={`contact ${id}`} href={href}>
            {icon}
            <article className='contact-text'>
                <p>{type}</p>
                <h3>{name}</h3>
            </article>
        </a>
    )
}

const Contact = () => {
    const headerRef = useRef()
    const isHeaderVisible = useObserver(headerRef)

    const paraRef = useRef()
    const isParaVisible = useObserver(paraRef)

    const contactsRef = useRef()
    const areContactsVisible = useObserver(contactsRef)

    const contact = [
        {
            icon: <FaGithub />,
            id: 'github',
            type: 'Github',
            name: 'r-urbanski',
            href: 'https://github.com/r-urbanski',
        },
        {
            icon: <FaEnvelope />,
            id: 'email',
            type: 'Adres e-mail',
            name: 'r.urbanski23@gmail.com',
            href: 'mailto:r.urbanski23@gmail.com',
        },
        {
            icon: <FaLinkedin />,
            id: 'linkedin',
            type: 'LinkedIn',
            name: 'r-urbanski',
            href: 'https://linkedin.com/in/r-urbanski',
        },
    ]

    return (
        <section id='kontakt'>
            <div className='module'>
                <aside ref={headerRef} className={`header-section ${isHeaderVisible ? 'text-header-show' : ''}`}>
                    <p>Potrzebujesz informacji?</p>
                    <h2>
                        Skontaktuj się ze <span className='blue-text'>mną</span>!
                    </h2>
                </aside>
                <section id='contact-wrapper'>
                    <aside ref={paraRef} className={isParaVisible ? 'para-show' : ''}>
                        <p>
                            Jeśli cię zainteresowałem, masz jakieś <span className='blue-text'>pytania</span>, myślisz o
                            <span className='blue-text'> współpracy</span> lub masz jakiś pomysł na<span className='blue-text'> projekt</span> -
                            <span className='blue-text'> napisz do mnie</span>! Odezwę się do ciebie<span className='blue-text'> najszybciej</span> jak będę
                            mógł!
                        </p>
                    </aside>
                    <div ref={contactsRef} className={`a-wrapper ${areContactsVisible ? 'contacts-show' : ''}`}>
                        {contact.map(({ icon, id, type, name, href }, index) => (
                            <Con key={index} icon={icon} id={id} type={type} name={name} href={href} />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Contact
