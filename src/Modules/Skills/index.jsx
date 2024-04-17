import { useRef } from 'react'
import { useObserver } from '../../hooks/useObserver'

import UxUi from '../../assets/images/skills/uxui.webp'
import Frontend from '../../assets/images/skills/frontend.webp'
import Backend from '../../assets/images/skills/backend.webp'
import Server from '../../assets/images/skills/server.webp'

const Skill = ({ image, header, text }) => {
    return (
        <article className='skill'>
            <div className='skill-inner'>
                <img src={image} alt={header} />
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </article>
    )
}

const Skills = () => {
    const headerRef = useRef()
    const isHeaderVisible = useObserver(headerRef)

    const skillsRef = useRef()
    const areSkillsVisible = useObserver(skillsRef, { threshold: 0.3 })

    const skillsData = [
        { image: UxUi, header: 'Projektowanie UX/UI', text: 'Projektuję estetyczne i nowoczesne interfejsy użytkownika.' },
        { image: Frontend, header: 'Frontend Development', text: 'Odpowiadam za wygląd strony w przeglądarce oraz jej interaktywność.' },
        { image: Backend, header: 'Backend Development', text: 'Zapewniam bezpieczne operacje w tle oraz połączenie z bazą danych.' },
        { image: Server, header: 'Hosting strony oraz domeny', text: 'Wypuszczam stronę na świat i dbam o jej bezpieczeństwo.' },
    ]

    return (
        <section id='o-mnie'>
            <div className='module'>
                <aside ref={headerRef} className={`header-section ${isHeaderVisible ? 'text-header-show' : ''}`}>
                    <p>Moja rola w projektach webowych</p>
                    <h2>
                        Czym się <span className='blue-text'>głównie</span> zajmuję?
                    </h2>
                </aside>
                <section ref={skillsRef} id='skills-wrapper' className={areSkillsVisible ? 'skills-show' : ''}>
                    {skillsData.map(({ image, header, text }, index) => (
                        <Skill key={index} image={image} header={header} text={text} />
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Skills
