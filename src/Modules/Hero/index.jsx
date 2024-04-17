import { useRef } from 'react'
import { useObserver } from '../../hooks/useObserver'

import RobertImg from '../../assets/images/robert.webp'

const Hero = () => {
    const sectionRef = useRef()
    const isVisible = useObserver(sectionRef, { threshold: 0.4 })

    return (
        <section ref={sectionRef} id='hero-section' className={isVisible ? 'section-show' : ''}>
            <div className='bg-opacity'>
                <div className='module'>
                    <aside>
                        <h1>
                            Cześć, jestem <span className='blue-text'>Robert Urbański</span>.
                        </h1>
                        <p>
                            Jak już mogłeś zauważyć, jestem <span className='blue-text'>Fullstack Web Developerem</span> - tworzę strony internetowe od początku
                            do końca! Jeśli chciałbyś dowiedzieć się więcej o tym co robię - kliknij przycisk poniżej!
                        </p>
                        <a className='primary-button' href='/#o-mnie'>
                            Dowiedz się więcej
                        </a>
                    </aside>
                    <figure>
                        <img className='full-image' src={RobertImg} alt='Robert Urbański - WebDeveloper' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero
