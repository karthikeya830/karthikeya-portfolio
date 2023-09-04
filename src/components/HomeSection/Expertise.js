import React, { useState } from 'react';
import '../../pages/index.css';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs,SiVisualstudiocode, SiReact, SiExpress, SiMysql, SiMongodb, SiUnrealengine, SiBlender, SiPython, SiDocker, SiGit } from 'react-icons/si';
import { FaJava, FaGithub } from 'react-icons/fa';
import { DiJenkins } from "react-icons/di";

const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Java: FaJava,
  NodeJs: SiNodedotjs,
  React: SiReact,
  Express: SiExpress,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Unreal: SiUnrealengine,
  Blender: SiBlender,
  Python : SiPython,
  Docker:SiDocker,
  Jenkins:DiJenkins,
  Git:SiGit,
  Github:FaGithub,
  VSCode:SiVisualstudiocode
};

const expertiseData = [
  {
    category: 'Languages',
    skills: ['CSS', 'JavaScript', 'Java', 'C', 'Python'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Express', 'NodeJs', 'Docker'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    skills: ['Jenkins', 'Git', 'Github', 'VSCode'],
  },
  {
    category: '3D software',
    skills: ['Unreal', 'Blender'],
  },
];

const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState(expertiseData[0]);

  const changeCategory = (category) => {
    const newCategory = expertiseData.find((item) => item.category === category);
    setSelectedCategory(newCategory);
  };

  return (
    <section id="expertise" className="py-16 bg-[#0f0f11] min-h-screen ">
      <div className="text-white"></div>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white">Expertise</h2>
        <div className="flex justify-center flex-wrap mt-8">
          {expertiseData.map((item, index) => (
            <button
              key={index}
              className={`${item === selectedCategory ? 'text-white' : ' text-gray-600'} px-4 py-2 rounded-md hover:text-xl `}
              onClick={() => changeCategory(item.category)}
            >
              {item.category}
            </button>
          ))}
        </div>
        <br />
        <br />
        <div className="flex justify-around flex-wrap gap-10">
          {selectedCategory.skills.map((skill, index) => {
            const Icon = skillIcons[skill] || FaJava;
            return (
              <div key={index} className="flex flex-col justify-center items-center h-1/3 w-1/4">
                <h3 className="absolute text-white text-5xl hover:text-7xl"><Icon /></h3>
                <p className="mt-20 text-white">{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;