// import React, { useEffect, useState } from 'react';
// import projects from '../Data/Projects';
// import { Link, useParams } from 'react-router-dom';

// const ProjectOverview = () => {
//     const [pd, setPD] = useState();
//     const { id } = useParams();

//     useEffect(() => {
//         // Find the project with the matching id and set it to the state
//         const project = projects.find((p) => p.id === parseInt(id));

//         if (project) {
//             setPD(project);
//         }
//     }, [id]);
//     if (!pd) {
//         return <div>Loading...</div>;
//     }


//     return (
//         <div className="text-white p-10 rounded-md shadow-md ">
//             <Link to="/#projects" className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded-full text-center text-sm font-semibold hover:underline">
//                 Back to Projects
//             </Link>
//             <br />
//             <br />
//             <h2 className="text-2xl font-semibold">{pd.title}</h2>
//             <p className=" text-white-100 mt-2">{pd.description}</p>

//             <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Tech Stack:</h3>
//                 <div className="flex flex-wrap mt-2">
//                     {pd.techStack.map((tech, index) => (
//                         <span
//                             key={index}
//                             className="resumeButton m-4"
//                         >
//                             {tech}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {pd.liveDemo &&
//                 <div className="mt-4">
//                     <h3 className="text-lg font-semibold">Live Demo:</h3>
//                     <a
//                         href={pd.liveDemo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 hover:underline"
//                     >
//                         {pd.liveDemo}
//                     </a>
//                 </div>
//             }


//             <div className="mt-4">
//                 <h3 className="text-lg font-semibold">GitHub Link:</h3>
//                 <a
//                     href={pd.sourceCode}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 hover:underline"
//                 >
//                     {pd.sourceCode}
//                 </a>
//             </div>

//             <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Images:</h3>
//                 <div className="grid grid-cols-3 gap-2 mt-2">
//                     {pd.imageUrl.map((image, imageIndex) => (
//                         <img
//                             key={imageIndex}
//                             src={`${image}`} // Replace with your image path
//                             alt={`${pd.title} - Image ${imageIndex + 1}`}
//                             className="w-full h-auto rounded-md shadow-md"
//                         />
//                     ))}
//                 </div>
//             </div>

//             {
//                 pd.videoLink &&
//                 <iframe
//                     width="560"
//                     height="315"
//                     src= 'https://www.youtube.com/watch?v=ZYef34llO_A'
//                     title="YouTube video player"
//                     frameborder="0"
//                     allowfullscreen
//                 ></iframe>
//             }

//         </div>
//     );
// };

// export default ProjectOverview;
