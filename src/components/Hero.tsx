import React from 'react'
import Button from './Button'
import Header from './Header'
import About from './About'

const Hero = () => {
  return (
    <section className='h-screen w-full p-4    flex flex-col  justify-evenly gap-[2em] '>
        <Header />
        <div
         className='w-full flex flex-col'>
            <h1 className=' text-[50px] font-semibold text-blue-600'>Frontend Engineer</h1>
            <h2 className='text-black-500 font-normal   md:text-2xl'>
            Hi, I&apos;m Cody, a Frontend Engineer who turns ideas into pixel-perfect experiences.<br /> I&apos;m all about creating mobile &amp; web apps that are not just functional but fun to use!
            </h2>
            <div className='w-full mt-5 flex items-center justify-between'>
                <Button 
                title='See  Cv' />
                {/* <Avatar /> */}
            </div>
        </div>
            <About />
        
    </section>
  )
}

export default Hero