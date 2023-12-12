import React, { useEffect } from 'react'
import Home from './HomeSection/Home'
import Expertise from './HomeSection/Expertise'
import Projects from './HomeSection/Projects'

const MainContent = () => {
    useEffect(() => {
        if (window.location.hash) {
            const sectionId = window.location.hash.substring(1); // Remove the '#' character
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
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