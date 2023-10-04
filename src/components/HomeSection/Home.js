import React, { useEffect } from 'react';
import '../../pages/index.css';
import { BsArrowDown } from 'react-icons/bs';

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
        <section id="home" className="flex flex-col justify-around text-white min-h-screen items-center bg-[#0f0f11]">
            <div></div>
            <div className="flex justify-around flex-col text-center md:text-left">
                <div className="text font-bold text-4xl md:text-5xl max-sm:text-3xl">
                    <span className="animatetext m-0 pl-0 md:p-2 max-sm:p-1 text-3xl md:text-8xl">k</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">a</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">r</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">t</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">h</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">i</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">k</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">e</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">y</span>
                    <span className="animatetext md:p-2 max-sm:p-1 text-3xl md:text-8xl">a</span>
                </div>
                <br />
                <div className='ml-3'>
                    <p className="self-center md:self-start w-full sm:text-sm md:text-md lg:text-lg">
                        Hello everyone! I'm currently in my final year of engineering, where I've had the opportunity to explore and refine my skills in various domains. My interests span across the exciting realms of web development, game design, machine learning, and the captivating world of VFX videos. Join me as I showcase my projects and share my passion for crafting digital experiences that push boundaries and make a difference.
                    </p>
                    <br />
                    <a href="https://drive.google.com/file/d/1MVYD6XsIX1DJB38G3YwxywLIXxlG6aYJ/view?usp=sharing" rel="noopener noreferrer" target='_blank' className="resumeButton text-sm self-center md:self-start font-bold text-white">Resume</a>
                </div>
            </div>
            <button className='downButton' onClick={scrollToNextSection} aria-label="Scroll to the next section"><BsArrowDown /></button>
        </section>
    );
}

export default Home;
