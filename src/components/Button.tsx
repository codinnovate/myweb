'use client';

import React from 'react'

type ButtonProps = {
    title: string,
    className?: string,
}
const Button = ({title, className, }:ButtonProps) => {
  return (
    
    <button 
    className={`text-black-100 hover:underline  rounded-full 
        min-w-[8em] p-4 
        shadow-[1px_3px_4px_6px_rgba(0, 0, 0, 0.5)] ${className ? className : 'bg-white'}`}>
        {title}
    </button>
  )
}

export default Button