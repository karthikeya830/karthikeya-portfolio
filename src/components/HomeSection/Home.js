import React from 'react';
import {useEffect} from 'react';
import '../../pages/index.css'
import {BsArrowDown} from 'react-icons/bs'
const Home = () => {
    const scrollToNextSection = () => {
        const currentSection = document.getElementById('home');
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            const targetOffset = nextSection.offsetTop;
            const duration = 1000;
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
        const animateTextElements = document.querySelectorAll('.animatetext');
        animateTextElements.forEach((element, index) => {
          element.style.animationDelay = `${index * 200}ms`;
        });
      }, []);
      

    return (
        <>
            <section id="home" className="flex flex-col justify-around  text-white  h-screen items-center bg-[#0f0f11]">
                <div></div>
                <div className="flex justify-around flex-col items-center">
                    <div class="text font-bold text-9xl md:text-5xl max-sm:text-3xl self-start" >
                        <span class="animatetext m-0 pl-0 md:p-2 max-sm:p-1 text-8xl ">k</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">a</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">r</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">t</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">h</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">i</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">k</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">e</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">y</span>
                        <span class="animatetext md:p-2 max-sm:p-1 text-8xl ">a</span>
                    </div>
                    <br />
                    <p className=" self-start w-1/2 sm: text-sm md:text-md lg:text-lg">
                        Crafting Immersive Web Experiences, Breathing Life into Games, Shaping 3D Environments, and Striving to Excel as a Software Developer. Welcome to My World of Creativity and Innovation.
                    </p>
                    <br/>
                    <a href="https://drive.google.com/file/d/1MVYD6XsIX1DJB38G3YwxywLIXxlG6aYJ/view?usp=sharing" rel="noopener noreferrer" target='_blank' class="downButton text-sm self-start font-bold text-white">Resume</a>
                </div>

                <button className='downButton' onClick={scrollToNextSection} aria-label="Scroll to the next section"><BsArrowDown /></button>
            </section>
        </>
    );
}

export default Home;