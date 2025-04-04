import { Github, Globe, Video } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

  export function SolutionCard({ description,title, videoLink, githubLink, liveLink }) {
   
    useEffect(()=>{
    },[ description,title, videoLink, githubLink, liveLink ])

    return (
        <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h1 className="text-xl text-center md:text-4xl  font-bold mb-6">{title}</h1>
            <p className="text-center text-lg mb-6">{description}</p>
          </div>
          <div className="md:w-1/2 bg-gray-800 p-8 md:p-16 flex flex-col justify-center space-y-8">
            <Link
              to={videoLink}
              className="flex items-center space-x-4 text-blue-400 hover:text-blue-300 transition-colors"
            >
             
             <div className='flex  gap-3 flex-wrap md:flex-row'>
             <Video size={24} />
             <span className="text-xl">Watch Video</span>   <span className='hidden md:block'>{videoLink}</span>  
             </div>
            </Link>
            <Link
              to={githubLink}
              className="flex items-center space-x-4 text-green-400 hover:text-green-300 transition-colors"
            >
             
              <div className=' w-full flex gap-3 flex-wrap md:flex-row'>
               <Github size={24} />
              <span className="text-xl">View on GitHub</span> <span className='hidden md:block'>{githubLink}</span>
              </div>
            </Link>
            <Link
              to={liveLink}
              className="flex items-center space-x-4 text-purple-400 hover:text-purple-300 transition-colors"
            >
            
              <div className='flex  gap-2 flex-wrap md:flex-row'>
              <Globe size={24} />
              <span className="text-xl">Live Project</span> {liveLink ? (<>{liveLink}</>) : (<><span className='hidden d-md-block' >Project Link not provided</span></>)}
              </div>
            </Link>
          </div>
        </div>
    )
  }