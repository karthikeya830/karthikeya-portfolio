import React from 'react';
import '../../pages/index.css'
const ProjectCard = (props) => {
  console.log(props.data);
  return (
    <div className='h-full w-full max-w-xs text-white m-2 rounded-lg  overflow- project-card transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-100 border border-gray-300 p-4'>
      <img
        src="/static/nbg.jpg"
        alt='t'
        className='rounded-md transition-transform transform-gpu hover: '
      />
      <h2 className=" bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
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
