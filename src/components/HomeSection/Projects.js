import React, { useState, useEffect } from 'react';
import projects from '../../Data/Projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const Domains = ['All Projects', 'Websites', 'VFX', 'Games', 'ML'];

    const [selectedCategory, setSelectedCategory] = useState('All Projects');
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setFilteredProjects(projects);
    }, []);

    const changeCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All Projects') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter((project) => project.category === category);
            setFilteredProjects(filtered);
        }
    };

    return (
        <section id="projects" className="py-16 flex justify-center bg-[#0f0f11] h-fit">
            <div className="text-white"></div>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold text-white">Projects</h2>
                <div className="flex flex-wrap justify-center mt-8">
                    {Domains.map((item, index) => (
                        <button
                            key={index}
                            className={`${item === selectedCategory ? 'text-white underline' : ' text-gray-600'} px-4 py-2 rounded-md`}
                            onClick={() => changeCategory(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <br />
                <br />
                <div className="grid grid-cols-1 justify-items-center gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
