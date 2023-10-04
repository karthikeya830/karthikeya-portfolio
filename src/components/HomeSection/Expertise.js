import React, { useState } from 'react';
import '../../pages/index.css';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiVisualstudiocode, SiReact, SiExpress, SiMysql, SiMongodb, SiUnrealengine, SiBlender, SiPython, SiDocker, SiGit, SiTensorflow } from 'react-icons/si';
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
  Python: SiPython,
  Docker: SiDocker,
  Jenkins: DiJenkins,
  Git: SiGit,
  Github: FaGithub,
  VSCode: SiVisualstudiocode,
  TensorFlow:SiTensorflow
};

const expertiseData = [
  {
    category: 'Languages',
    skills: ['CSS', 'JavaScript', 'Java', 'C', 'Python'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Express', 'NodeJs', 'Docker', 'TensorFlow'],
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
        <h2 className="text-4xl font-semibold text-white max-sm:text-xl">What I Know . . . </h2>
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
              <div key={index} className=" flex flex-col justify-center items-center h-40 w-1/4">
                <p className="m-5 text-white">{skill}</p>
                <div className="iconButton hover:text-7xl transition-transform duration-500 ease-in-out"><Icon /></div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        {/* <div className='flex justify-around items-center gap-10' >
          <h2 className='text-white text-3xl'>Check out my Resume</h2>
          <a href="https://drive.google.com/file/d/1MVYD6XsIX1DJB38G3YwxywLIXxlG6aYJ/view?usp=sharing" rel="noopener noreferrer" target='_blank' class="downButton text-sm">Here</a>
        </div> */}
      </div>

    </section>
  );
};

export default Expertise;