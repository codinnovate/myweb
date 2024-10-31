'use client';


import React from "react";
import { github } from "../assets";
import { projects } from "../constants";
import Image from "next/image";
import Carousel from "./Carousel";

type ProjectCardProps = {
  name: string;
  description: string;
  tags:string[];
  image: string;
  source_code_link: string;
  index: number;
}
const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link, index
}:ProjectCardProps) => {

  return (
      <div
        className='p-2 select-none   w-full min-w-full'
      >
        <h3 className="uppercase text-blue-900 my-2">Creative {index + 1} of {projects.length}</h3>
        <div className='relative w-full h-[230px]'>
          <a href={image}>
          <iframe
              src={image}
              allowFullScreen={true}
              className='w-full h-full object-cover border border-white'
          />
          </a>
        </div>
        <div className='mt-5'>
          <h3 className='text-blue-900 uppercase'>{name}</h3>
          <p className='mt-2 text-black-500 text-sm font-thin'>{description}</p>
            <div className="gap-1 flex ml-1 ">
             {tags.map((tag, idx) =>(
              <h2
               key={idx}
               className="text-blue-900/70 text-sm uppercase">#{tag}</h2>
             ))}
            </div>
          <div className='flex justify-between w-full items-center'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=' w-8 h-8 rounded-full bg-blue-900 flex justify-center items-center cursor-pointer'
            >
              <Image
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
             <button 
             onClick={() => window.open(image, "_blank")}
             className='text-white text-center hover:underline bg-black-500 rounded-full min-w-[8em] p-4 shadow-[1px_3px_4px_6px_rgba(0, 0, 0, 0.5)]'>
              See Live
             </button>
            
          </div>
        </div>
        

      </div>

  );
};

const Works = () => {
  return (
    <section className="mt-[2em]">
      <h1 className='text-2xl text-blue-600 text-center mt-[1em] uppercase tracking-widests'>My Creatives</h1>
      <Carousel>
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index} 
          {...project}
            />
        ))}
      </Carousel>
   
    </section>
  );
};

export default Works
