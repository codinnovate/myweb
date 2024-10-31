import { colab, nigerialogo } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Services = () => {
  return (
    <section className='flex flex-col'>
      <div className='w-full flex flex-col gap-3 justify-center items-center h-screen bg-[#fafafa] border rounded-t-[7em] md:rounded-t-[10em] mt-[3em]'>
      <div className='rounded-full p-2 border border-primary'>
      <Image
       src={colab}
       alt='colab'
       width={128}
       height={128}
       className=''
       />
       </div>
        <div className='flex flex-col gap-3'>
          <h2 
          className='font-bold text-3xl text-black-500 text-center'>Let`&apos;`s Chat About My Next <br/> Job Offer</h2>
          <div className='flex justify-between'>
            <Button
            className='bg-black-100 text-white' 
            title='Email Me' />
            <Button 
            className='border-2'
            title='Whatsapp' />
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center p-2'>
        <h2 className='font-medium '>Proudly made by Cody From</h2>
          <Image
          width={24}
          src={nigerialogo}
           alt='Nigerian' />
      </div>
    </section>
  )
}

export default Services