import './styles/main.scss'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './Modules/Hero'
import Skills from './Modules/Skills'
import Technologies from './Modules/Technologies'
import Experience from './Modules/Experience'
import Projects from './Modules/Projects'
import Contact from './Modules/Contact'

const App = () => {
    return (
        <>
            <Header />

            <main id='home-page' className='main-content'>
                <Hero />
                <Skills />
                <Technologies />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default App
