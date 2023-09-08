import React from 'react'
import Home from './HomeSection/Home'
import Expertise from './HomeSection/Expertise'
import Projects from './HomeSection/Projects'
// import Experience from './HomeSection/Experience'
// import Footer from './Footer'

const MainContent = () => {
    return (
        <>
            <main className='font-light'>
                <div id="home">
                    <Home />
                </div>
                <div id="expertise">
                    <Expertise />
                </div>
                <div id="projects">
                    <Projects />
                </div>
            </main>

        </>
    )
}

export default MainContent