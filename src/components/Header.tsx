import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex  items-center justify-between w-full  text-black '>
        <div className='flex items-center gap-5 text-sm '>
            <p className='hover:underline transition-all'>cody@kidscantech.com</p>
            <Button
             title='CV'
            />
        </div>
        <div className='flex gap-2 text-sm '>
            <Link className='hover:underline transition-all'  href='/'>LinkedIn</Link>
            <Link className='hover:underline transition-all'  href='/'>Github</Link>
            <Link className='hover:underline transition-all' href='/'>Twitter</Link>
            <Link className='hover:underline transition-all' href='/'>Whatsapp</Link>
        </div>

        
    </header>
  )
}

export default Header