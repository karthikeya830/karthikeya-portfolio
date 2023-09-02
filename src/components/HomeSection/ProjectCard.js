import React from 'react';

const ProjectCard = (props) => {
  console.log(props.data);
  return (
    <div className='h-fit w-full max-w-xs text-white m-2 rounded-lg relative overflow-hidden'>
      <img
        src="/static/nbg.jpg"
        alt='t'
        className='rounded-md transition-transform transform-gpu hover:scale-105'
      />
      <h2 className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
        {props.data.title}
      </h2>
     </div>
    // <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg hover:scale-110 transition-transform duration-300">
    // <img src="/static/nbg.jpg" alt="Image" className="w-full h-auto" />
    // <h2 className="text-center mt-2 text-white">Title Here</h2>
  // </div>
  
  );
};

export default ProjectCard;
