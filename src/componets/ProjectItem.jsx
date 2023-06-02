import React from 'react'


const ProjectItem = ({img ,title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#8F8260] rounded-xl group hover:bg-gradient-to-r from-[#8F8260] to-[#786C56]'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center ">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">ReactJS</p>
          <a href="/"></a>
          <p className="text-center p-3 rounded-lg bg-white text-[#8F8260] font-bold cursor-pointer text-lg ">Más Info</p>
              
          
        
        
      </div>
    </div>
  )
}

export default ProjectItem