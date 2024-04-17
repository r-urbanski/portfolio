// hooks
import { useRef } from 'react'
import { useObserver } from '../../hooks/useObserver'

// icons
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaSquareJs, FaBootstrap, FaFigma, FaNodeJs, FaUbuntu, FaDebian } from 'react-icons/fa6'
import { SiJquery, SiGimp, SiMongodb, SiPhp, SiApache, SiVisualstudiocode } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

const Tech = ({ icon, tech }) => {
    return (
        <article className='tech'>
            {icon}
            <h3>{tech}</h3>
        </article>
    )
}

const Technologies = () => {
    // animation for header
    const headerRef = useRef()
    const isHeaderVisible = useObserver(headerRef)

    // animation for techs section
    const techsRef = useRef()
    const areTechsVisible = useObserver(techsRef, { threshold: 0.3 })

    const techData = [
        { icon: <FaReact color='#61DAFB' />, tech: 'ReactJS' },
        { icon: <FaHtml5 color='#FF5733' />, tech: 'HTML' },
        { icon: <FaCss3Alt color='#3BB2E0' />, tech: 'CSS' },
        { icon: <FaSass color='#CD6799' />, tech: 'SCSS' },
        { icon: <FaBootstrap color='#840AFA' />, tech: 'Bootstrap 5' },
        { icon: <FaSquareJs color='#F0DC4E' />, tech: 'JavaScript' },
        { icon: <SiJquery color='#0868AC' />, tech: 'jQuery' },
        { icon: <FaFigma color='#A259FF' />, tech: 'Figma' },
        { icon: <SiGimp color='#6F6856' />, tech: 'GIMP' },
        { icon: <GrMysql color='#E48E00' />, tech: 'MySQL' },
        { icon: <SiMongodb color='#00ED64' />, tech: 'MongoDB' },
        { icon: <SiPhp color='#787CB4' />, tech: 'PHP' },
        { icon: <FaNodeJs color='#7BB862' />, tech: 'NodeJS (ExpressJS)' },
        { icon: <FaUbuntu color='#E75320' />, tech: 'Ubuntu' },
        { icon: <FaDebian color='#A80030' />, tech: 'Debian' },
        { icon: <SiApache color='#F29225' />, tech: 'Apache2' },
        { icon: <SiVisualstudiocode color='#3EA6EB' />, tech: 'Visual Studio Code' },
    ]

    return (
        <section id='technologies'>
            <div className='module'>
                <aside ref={headerRef} className={`header-section ${isHeaderVisible ? 'text-header-show' : ''}`}>
                    <p>Technologie i programy</p>
                    <h2>Czego używam do tworzenia stron?</h2>
                </aside>
                <section ref={techsRef} className={`tech-wrapper ${areTechsVisible ? 'techs-show' : ''}`}>
                    {techData.map(({ icon, color, tech }, index) => (
                        <Tech key={index} icon={icon} color={color} tech={tech} />
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Technologies
