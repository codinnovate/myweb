'use client';

import Link from 'next/link';
import React from 'react'

type ButtonProps = {
    title: string,
    className?: string,
    href: string,  // Added href prop for the link to navigate to
}
const Button = ({title, className,href }:ButtonProps) => {
  return (
    
    <Link 
    href={href}
    className={`flex items-center justify-center text-black-100 hover:underline  rounded-full 
        min-w-[8em] p-4 
        shadow-[1px_3px_4px_6px_rgba(0, 0, 0, 0.5)] ${className ? className : 'bg-white'}`}>
        {title}
    </Link>
  )
}

export default Button