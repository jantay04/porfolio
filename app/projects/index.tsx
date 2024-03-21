import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import ProjectList from '../../components/Projects/ProjectList'

type Props = {}

function Projects({ }: Props) {

  return (
    <MainLayout>
      <div className='col-span-12 flex items-center justify-between'>
        <h1 className='w-3/4 text-7xl font-black uppercase my-10'><span className=' text-[#787d82]'>My </span>Projects.</h1>
        <p className=' max-w-xl text-lg text-black/50'>I have had the privilege of working with some of the most well-known companies in the world. Here are some of the works I'm most proud of.</p>
      </div>
      <ProjectList />
    </MainLayout>
  )
}

export default Projects; 