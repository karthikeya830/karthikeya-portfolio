import React from 'react';
import '../../pages/index.css';
// import ProjectDetails from '../ProjectOverview';

const ProjectCard = (props) => {

  return (
    <div>
      <div
        className= ' projectbox flex h-60 w-fit max-w-xs text-white rounded-lg overflow-hidden project-card transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:border-4 border-blue-500 glowing-border'
      >
        <img className='image transition-transform duration-1000 ease-in-out hover:scale-105 ' src= {props.data.imageUrl[0]} alt='tt' />
        <h2 className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
          {props.data.title}
        </h2>
        
      </div>
    </div>
  );
};

export default ProjectCard;
