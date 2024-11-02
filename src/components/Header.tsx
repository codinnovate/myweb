import React from 'react'
import { socials } from '@/constants'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex  items-center justify-between w-full  text-black '>
            <p className='hover:underline transition-all'>cody@kidscantech.com</p>
            
        <div className='flex gap-5  text-black-500  '>
          {socials.map((socials, i) => (
            <a
             key={i}
             href={socials.link}
             target='_blank'
             rel='noopener noreferrer'
             >
              <Image 
              src={socials.icon} 
              alt={socials.name}
              className='w-5 md:w-7 transition-all duration-500 ease-linear'
               />
            </a>

          ))}
          
        </div>
        
    </header>
  )
}

export default Header