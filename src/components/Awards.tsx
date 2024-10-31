import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { awards } from '@/constants'
import Carousel from './Carousel'




type AwardProps = {
  images: StaticImageData[],
  awardTitle: string,
}

const AwardCard = ({images, awardTitle}:AwardProps) => {
  return (
    <div className='w-full min-w-full h-full my-5'>
      <div className='flex flex-row gap-3 w-full h-full '>
      {images.map((image, i) => (
        <Image 
          key={i}
          src={image} 
          className='w-1/2 h-[300px] object-cover'
          alt='Samuel Adeyemi'/>
      ))}
      </div>
      <h1 className='text-xl my-3 text-blue-900 p-2 uppercase'>{awardTitle}</h1>
    </div>
  )
}
const Awards = () => {
  return (
    <section
     className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-blue-600 text-center mt-[1em] uppercase'>Awards, Recognitions &amp; Achievements</h1>
      <Carousel>
      {awards.map((award, item) => (
        <AwardCard 
        awardTitle={award.title}
        key={item}
        {...award}
        />
      ))}
      </Carousel>
    </section>
  )
}

export default Awards