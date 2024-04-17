import { useRef } from 'react'
import { useObserver } from '../../hooks/useObserver'

const Article = ({ index, name, position, time, url }) => {
    return (
        <article id={`position-${index}`} className={`one-position ${parseInt(index) % 2 === 0 ? 'left' : 'right'}`}>
            <div className='content'>
                <p className='date'>{time}</p>
                {!url ? (
                    <h3>{name}</h3>
                ) : (
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <h3>{name}</h3>
                    </a>
                )}
                <p className='position'>{position}</p>
            </div>
        </article>
    )
}

const Experience = () => {
    const headerRef = useRef()
    const isHeaderVisible = useObserver(headerRef)

    const timelineRef = useRef()
    const isTimelineVisible = useObserver(timelineRef, { threshold: 0.3 })

    const xp = [
        { name: 'General Informatics', position: 'Fullstack Web Developer', time: '21.06.2023 - obecnie', url: 'https://generalinformatics.pl' },
        { name: 'General Informatics', position: 'Staż Zawodowy - Programista', time: '19.04.2023 - 21.06.2023', url: 'https://generalinformatics.pl' },
        { name: 'Freelancer', position: 'Fullstack Web Developer', time: '2021 - obecnie', url: null },
        { name: 'Technikum Informatyczne SCI', position: 'Kierunek: technik informatyk', time: '2020 - obecnie', url: 'https://www.sci.edu.pl/' },
    ]

    return (
        <section id='doswiadczenie'>
            <div className='module'>
                <aside ref={headerRef} className={`header-section ${isHeaderVisible ? 'text-header-show' : ''}`}>
                    <p>Ścieżka kariery</p>
                    <h2>
                        Gdzie zdobywałem <span className='blue-text'>doświadczenie</span>?
                    </h2>
                </aside>
                <section ref={timelineRef} id='experience-timeline' className={isTimelineVisible ? 'timeline-show' : ''}>
                    {xp.map(({ name, position, time, url }, index) => (
                        <Article key={index} index={index} name={name} position={position} time={time} url={url} />
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Experience
