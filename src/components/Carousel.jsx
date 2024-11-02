'use client'
import { useState } from "react";

const Carousel = ({children:slides}) => {
  const [current, setCurrent] = useState(0);
  function prevItem (){
    if (current !== 0)
    {
      setCurrent(current - 1);
    }
  }
  function nextItem (){
    if (current !== slides.length - 1){
      setCurrent(current + 1);
    }
    
  }
  
  return(
    <div className="overflow-x-hidden  w-full relative mt-[1em] p-2">
      
      <div className=" flex items-center justify-between">
        <button
         onClick={prevItem}
         className="shadow p-1 bg-blue-900  rounded-3xl text-gray-800 hover:bg-blue-600/70 transition-all ">
         <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width="18" 
         height="18" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="#fff" 
         stroke-width="2" 
         stroke-linecap="round" 
         stroke-linejoin="round" 
         class="lucide lucide-chevron-left">
          <path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
             key={i}
             className={`transition-all w-2 h-2 bg-blue-900 rounded-full  ${current === i ? "p-1": "bg-opacity-50"}`} />
          ))}
        </div>
        <button
         onClick={nextItem}
         className="p-1 rounded-3xl shadow bg-blue-900 text-gray-800 hover:bg-blue-600/70 transition-all ">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#fff" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="lucide lucide-chevron-right">
          <path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
      <div 
      style={{transform: `translateX(-${current * 102}%)`}}
      className="flex gap-5 transition-transform ease-out duration-500"
      >
      {slides}
      </div>
    </div>
  )
}

export default Carousel