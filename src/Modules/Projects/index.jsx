import { useRef } from 'react'
import { useObserver } from '../../hooks/useObserver'

import Integra from '../../assets/images/projects/integra.webp'
import Portfolio from '../../assets/images/projects/portfolio.webp'
import Calc from '../../assets/images/projects/calc.webp'

import { FaGithub } from 'react-icons/fa6'

const Project = ({ img, title, text, url, github }) => {
    return (
        <article className='project'>
            {github !== null && (
                <a className='github' aria-label={`Github Repository - ${title}`} href={github} target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
            )}
            <a className='img-wrapper' target='_blank' rel='noopener noreferrer' href={url}>
                <img className='full-image' src={img} alt={title} />
            </a>
            <div className='text'>
                <a target='_blank' rel='noopener noreferrer' href={url}>
                    <h3>{title}</h3>
                </a>
                <p>{text}</p>
            </div>
        </article>
    )
}

const Projects = () => {
    const headerRef = useRef()
    const isHeaderVisible = useObserver(headerRef)

    const projectsRef = useRef()
    const areProjectsVisible = useObserver(projectsRef, { threshold: 0.3 })

    const projectsInfo = useRef()
    const isProjectsInfoVisible = useObserver(projectsInfo)

    const projects = [
        {
            img: Integra,
            title: 'Integra Nieruchomości',
            text: 'Strona internetowa dla firmy Integra Nieruchomośći zajmującej się skupem nieruchomości',
            url: 'https://integra-nieruchomosci.pl',
            github: null,
        },
        {
            img: Portfolio,
            title: 'Web Dev Portfolio',
            text: 'Strona internetowa wykazująca moje projekty i umiejętności w zakresie programowania',
            url: 'https://rurbanski.pl',
            github: 'https://github.com/r-urbanski/portfolio',
        },
        {
            img: Calc,
            title: 'Simple React Calc',
            text: 'Aplikacja internetowa zawierająca kalkulator prosty do podstawowych obliczeń',
            url: '/projekty/simple-react-calc/',
            github: 'https://github.com/r-urbanski/simple-react-calc',
        },
    ]

    return (
        <section id='projekty' className='module'>
            <aside ref={headerRef} className={`header-section ${isHeaderVisible ? 'text-header-show' : ''}`}>
                <p>Wybrane projekty</p>
                <h2>
                    Zobacz moje <span className='blue-text'>umiejętności</span>!
                </h2>
            </aside>
            <div className='projects-container'>
                <section ref={projectsRef} id='projects-wrapper' className={`${areProjectsVisible ? 'projects-show' : ''}`}>
                    {projects.map(({ img, title, text, url, github }, index) => (
                        <Project key={index} img={img} title={title} text={text} url={url} github={github} />
                    ))}
                </section>
            </div>
            <p ref={projectsInfo} className={`coming-soon ${isProjectsInfoVisible ? 'coming-soon-show' : ''}`}>
                Wktrótce więcej projektów!
            </p>
        </section>
    )
}

export default Projects
