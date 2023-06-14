import React from 'react'
import ProjectItem from './ProjectItem'
import perlas from '/images/works/imagen_perlas.png'
import tiger from '/images/Projects/simula_1.jpg'
import perlas2 from '/images/works/imágen_índice.png'
import papeleria from '/images/works/FOLDER_gamela-01.png'
import papeleria2 from '/images/works/FOLDER_gamela-02-01.png'



const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
        <h1 className="text-4xl font-bold text-center text-[#8F7860]">Projects</h1>
        <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa quo aspernatur laborum ea, iste consequuntur vitae, ullam quisquam, obcaecati sint corrupti perferendis maxime dolore doloribus tempora nesciunt ipsum tenetur!</p>
        <div className='grid sm:grid-cols-2 gap-12 '>
            <ProjectItem img= {perlas} title='catálogo'/>
            <ProjectItem img= {perlas2} title='catálogo' />
            <ProjectItem img= {tiger} title='animation'/>
            <ProjectItem img= {papeleria} title='Gamela_Fold'/>
            <ProjectItem img= {papeleria2} title='Gamela_Fold'/>
            <ProjectItem />
        </div>
        
    </div>
    
  )
}

export default Projects