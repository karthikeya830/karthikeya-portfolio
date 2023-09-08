import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex justify-between p-5 items-center  text-white fixed top-0 left-0 right-0 z-5  bg-opacity-8">
            <h1 className="text-2xl text-white font-bold cursor-pointer ">&lt;Karthikeya /&gt;</h1>

            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z" />
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div className="fixed left-2/4 top-10 h-fit w-fit bg-black bg-opacity-75 z-10 p-10 transition-opacity duration-500 ease-in-out">
                    <ul className="flex flex-col">
                        <li className="mb-4">
                            <button onClick={() => scrollToSection("home")}>Home</button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => scrollToSection("expertise")}>Expertise</button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => scrollToSection("projects")}>Work</button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => scrollToSection("contact")}>Connect</button>
                        </li>
                    </ul>
                </div>
            )}

            {/* Mobile Menu */}
            <ul className={`flex gap-10 justify-between md:flex hidden }`}>
                <li className="mb-4 md:mb-0">
                    <button onClick={() => scrollToSection("home")}>Home</button>
                </li>
                <li className="mb-4 md:mb-0">
                    <button onClick={() => scrollToSection("expertise")}>Expertise</button>
                </li>
                <li className="mb-4 md:mb-0">
                    <button onClick={() => scrollToSection("projects")}>Work</button>
                </li>
                <li className="mb-4 md:mb-0">
                    <button onClick={() => scrollToSection("contact")}>Experience</button>
                </li>
                <li className="mb-4 md:mb-0">
                    <button onClick={() => scrollToSection("contact")}>Connect</button>
                </li>
            </ul>

            <div className={`social-icons max-sm:hidden`}>
                <a className="mr-4" href="https://github.com/karthikeya830" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </nav>
    );
};

export default Nav;
