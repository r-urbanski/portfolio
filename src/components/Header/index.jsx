import { useEffect, useState } from 'react'

import './header.scss'

import BrandIcon from '../../assets/images/brand-icon.webp'

import { CgMenuGridO, CgClose } from 'react-icons/cg'

const Header = () => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                const pageRoot = document.body
                pageRoot.removeAttribute('style')

                setMenuShow(false)
                setMenuIconShow(false)
                setIsVisible(true)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [menuShow, setMenuShow] = useState(false)
    const [menuIconShow, setMenuIconShow] = useState(false)
    const [isVisible, setIsVisible] = useState(true)

    const links = [
        { name: 'O mnie', href: '/#o-mnie' },
        { name: 'Projekty', href: '/#projekty' },
        { name: 'Doświadczenie', href: '/#doswiadczenie' },
        { name: 'Kontakt', href: '/#kontakt' },
    ]

    const menuCheck = () => (menuShow ? 'show' : '')

    const handleMenuAnimation = () => {
        const pageRoot = document.body
        if (!menuShow) pageRoot.style.overflowY = 'hidden'
        else pageRoot.removeAttribute('style')

        setMenuShow(prev => !prev)
        setIsVisible(false)

        setTimeout(() => {
            setMenuIconShow(!menuShow)
            setIsVisible(true)
        }, 200)
    }

    return (
        <header id='header'>
            <div className='module'>
                <a className='brand' href='/'>
                    <img src={BrandIcon} alt='Robert Urbański - nagłówek strony' />
                </a>

                <span id='menuButton' onClick={handleMenuAnimation}>
                    {!menuIconShow ? (
                        <CgMenuGridO className={`icon ${!isVisible ? 'hidden' : ''}`} />
                    ) : (
                        <CgClose className={`icon ${!isVisible ? 'hidden' : ''}`} />
                    )}
                </span>

                <div className={`bg-opacity ${menuCheck()}`}></div>

                <nav id='navigation' className={menuCheck()}>
                    <ul>
                        {links.map(({ name, href }, index) => (
                            <li key={index}>
                                <a className='link' href={href}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
