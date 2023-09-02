import React, { useState } from 'react';
import '../../pages/index.css';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiExpress, SiMysql, SiMongodb, SiUnrealengine, SiBlender, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

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
  Python : SiPython
};

const expertiseData = [
  {
    category: 'Programming Languages',
    skills: ['CSS', 'JavaScript', 'Java', 'C', 'Python'],
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Express', 'NodeJs'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
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
        <div className="flex justify-center space-x-4 mt-8">
          {expertiseData.map((item, index) => (
            <button
              key={index}
              className={`${item === selectedCategory ? 'text-white underline' : ' text-gray-600'} px-4 py-2 rounded-md`}
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
                <h3 className="text-white text-5xl"><Icon /></h3>
                <p className="mt-2 text-white">{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;