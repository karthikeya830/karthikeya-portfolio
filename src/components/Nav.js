import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Nav = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="flex justify-between p-5 items-center  text-white fixed top-0 left-0 right-0 z-10 bg-opacity-8">
            <h1 className="text-2xl text-orange-200 cursor-pointer ">&lt;Karthikeya /&gt;</h1>
            <ul className="flex">
                <li className="mr-4"> {/* Add margin-right */}
                    <button onClick={() => scrollToSection("home")}>Home</button>
                </li>
                <li className="mr-4"> {/* Add margin-right */}
                    <button onClick={() => scrollToSection("expertise")}>Expertise</button>
                </li>
                <li className="mr-4"> {/* Add margin-right */}
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection("contact")}>Contact</button>
                </li>
            </ul>
            <div className="social-icons">
                <a className="mr-4" href="https://github.com/karthikeya830" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </nav>
    );
};

export default Nav;
