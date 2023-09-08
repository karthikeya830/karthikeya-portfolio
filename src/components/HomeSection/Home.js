import React, { useEffect } from 'react';
import '../../pages/index.css'
import {BsArrowDown} from 'react-icons/bs'
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
    useEffect(() => {
        const animateTextElements = document.querySelectorAll('.animate-text');
        animateTextElements.forEach((element, index) => {
          element.style.animationDelay = `${index * 200}ms`;
        });
      }, []);

    return (
        <>
            <section id="home" className="flex flex-col justify-around  text-white  h-screen items-center bggg">
                <div></div>


                <div className="flex justify-around flex-col items-center">
                    <div class="text text-7xl md:text-5xl max-sm:text-3xl">
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">k</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">a</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">r</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">t</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">h</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">i</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">k</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">e</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">y</span>
                        <span class="animate-text xl:p-4 md:p-2 max-sm:p-1">a</span>
                    </div>
                    <br />
                    <p className="w-2/3 sm: text-sm md:text-md lg:text-lg">
                        Crafting Immersive Web Experiences, Breathing Life into Games, Shaping 3D Environments, and Striving to Excel as a Software Developer. Welcome to My World of Creativity and Innovation.
                    </p>

                </div>

                <button className='downButton' onClick={scrollToNextSection}><BsArrowDown /></button>
            </section>
        </>
    );
}

export default Home;
