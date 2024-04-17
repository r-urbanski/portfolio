import './footer.scss'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='module'>
                <aside>
                    <p>
                        <span>&copy; 2024</span> Robert Urbański
                    </p>
                </aside>
                <section>
                    <a aria-label='Github' href='https://github.com/r-urbanski' target='_blank' rel='noopener noreferrer'>
                        <FaGithub />
                    </a>
                    <a aria-label='LinkedIn' href='https://linkedin.com/in/r-urbanski' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a aria-label='Adres e-mail' href='mailto:r.urbanski23@gmail.com'>
                        <FaEnvelope />
                    </a>
                </section>
            </div>
        </footer>
    )
}

export default Footer
