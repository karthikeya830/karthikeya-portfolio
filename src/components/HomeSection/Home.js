import React from 'react';
import '../../pages/index.css'
const Home = () => {
    const scrollToNextSection = () => {
        const currentSection = document.getElementById('home');
        const nextSection = currentSection.nextElementSibling;
    
        if (nextSection) {
            const targetOffset = nextSection.offsetTop;
            const duration = 1000; // Adjust the duration as needed (in milliseconds)
            const startTime = performance.now();
            const startOffset = window.pageYOffset;
    
            function scrollStep(timestamp) {
                const currentTime = timestamp - startTime;
                const progress = currentTime / duration;
    
                if (progress < 1) {
                    window.scrollTo(0, startOffset + (targetOffset - startOffset) * progress);
                    requestAnimationFrame(scrollStep);
                } else {
                    window.scrollTo(0, targetOffset);
                }
            }
    
            requestAnimationFrame(scrollStep);
        }
    };
    

    return (
        <>
            <section id="home" className="flex flex-col justify-around  text-white  h-screen bggg">
                <div></div>
                <div className="flex justify-around flex-col items-center  ">
                    <h1 className="self-center md:text-4xl lg:text-8xl font-sans sm: text-3xl">KARTHIKEYA</h1>
                    <br />
                    <p className="w-2/3 sm: text-sm md:text-md lg:text-lg">
                        Crafting Immersive Web Experiences, Breathing Life into Games, Shaping 3D Environments, and Striving to Excel as a Software Developer. Welcome to My World of Creativity and Innovation.
                    </p>

                </div>
                
                <button className='' onClick={scrollToNextSection}>Down</button>
            </section>
        </>
    );
}

export default Home;
