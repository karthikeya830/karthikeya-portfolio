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
            <section id="home" className=" text-white py-16 h-screen bggg">
                <div className="container mx-auto text-center flex-col items-center mt-32  ">
                    <h1 className="text-8xl font-sans">KARTHIKEYA</h1>
                    <p className="mt-4 text-lg">
                        Crafting Immersive Web Experiences, Breathing Life into Games, Shaping 3D Environments, and Striving to Excel as a Software Developer. Welcome to My World of Creativity and Innovation.
                    </p>

                    <button onClick={scrollToNextSection}>Down</button>
                </div>
            </section>
        </>
    );
}

export default Home;
