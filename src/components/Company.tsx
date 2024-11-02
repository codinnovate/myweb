import React from 'react';

type Experience = {
    title: string;
    company_name: string
    icon: string,
    iconBg: string,
    date:string,
    task:string,
    link:string,
    Outcome:string
}
type CompanyProps = {
    children: React.ReactNode,
    experience: Experience,
}


const Company = ({  experience}:CompanyProps) => {
  return (
    <div className='flex flex-col animate-loop-scroll text-black border border-white p-5 gap-2 mt-[2em] w-[300px] min-w-[300px] border-b-2 pb-2 md:border-b-0 '>
      <div className='flex  items-center justify-between'>
        <h1 className='font-medium uppercase'>{experience.company_name}
        </h1>
          <h2 className='text-blue-900 text-sm '>{experience.title}</h2> 
      </div>
        <div 
        className='flex flex-col gap-4 justify-center '>
                <h1 
                className='text-black font-normal text-[12px]'>
                  {experience.task}
                </h1>
           
            <p className=' font-normal text-[12px]'>{experience.Outcome}</p>
           <h3 className='text-[12px] text-blue-900'>{experience.date}</h3>
        </div>
    </div>
  )
}

export default Company