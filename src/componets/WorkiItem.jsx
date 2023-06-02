import React from 'react'

const WorkiItem = ({año, puesto, duración, detalles}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-[#d6d3d1] rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className='inLine-block px-2 py-1 font-semibold text-white bg-[#8F8260] rounded-md'>{año}</span>
                    <span className='text-lg font-semibold text-[#8F8260]'>{puesto}</span>
                    <span className='my-1 text-sm font-normal leading-none text-[#786C56]'>{duración}</span>
                    <p className="my-2 text-bae font-normal text-[#856959] ">
                    <span>{detalles}</span>
                    </p>
                    
                    
                </p>

            
        </li>
    </ol> 
  )  
}

export default WorkiItem