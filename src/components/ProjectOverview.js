import React, { useState } from 'react';
const ProjectDetails = () => {
    const [pd, setPD] = useState()
    console.log(pd)
    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold">{pd.title}</h2>
            <p className="text-gray-600 mt-2">{pd.description}</p>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Tech Stack:</h3>
                <div className="flex flex-wrap mt-2">
                    {pd.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-500 text-white rounded-full px-3 py-1 mr-2 mb-2 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>


            <div className="mt-4">
                <h3 className="text-lg font-semibold">Live Demo:</h3>
                <a
                    href={pd.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {pd.liveDemo}
                </a>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">GitHub Link:</h3>
                <a
                    href={pd.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {pd.sourceCode}
                </a>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Images:</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    {pd.imageUrl.map((image, imageIndex) => (
                        <img
                            key={imageIndex}
                            src={`/${image}.jpg`} // Replace with your image path
                            alt={`${pd.title} - Image ${imageIndex + 1}`}
                            className="w-full h-auto rounded-md shadow-md"
                        />
                    ))}
                </div>
            </div>

            <h2 className="text-2xl font-semibold">{pd.title}</h2>
            <p className="text-gray-600 mt-2">{pd.description}</p>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Tech Stack:</h3>
                <div className="flex flex-wrap mt-2">
                    {pd.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-500 text-white rounded-full px-3 py-1 mr-2 mb-2 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>


            <div className="mt-4">
                <h3 className="text-lg font-semibold">Live Demo:</h3>
                <a
                    href={pd.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {pd.liveDemo}
                </a>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">GitHub Link:</h3>
                <a
                    href={pd.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {pd.sourceCode}
                </a>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Images:</h3>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    {pd.imageUrl.map((image, imageIndex) => (
                        <img
                            key={imageIndex}
                            src={`/${image}.jpg`} // Replace with your image path
                            alt={`${pd.title} - Image ${imageIndex + 1}`}
                            className="w-full h-auto rounded-md shadow-md"
                        />
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default ProjectDetails;