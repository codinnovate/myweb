'use client';


import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import Image from "next/image";


const ServiceCard = ({ index, icon }) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    >
        <Image
          src={icon}
          width={50}
          height={50}
          alt='skills'
        />       
    </motion.div>
);

const About = () => {
  return (
    <>
      <div className='w-full flex flex-wrap gap-[2em]'>
        {technologies.map((service, index) => (
          <ServiceCard
           key={service.name}
            index={index}
             {...service} 
             />
        ))}
      </div>
    </>
  );
};

export default About;
