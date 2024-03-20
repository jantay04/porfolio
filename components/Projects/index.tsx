import React from 'react'

import Link from 'next/link';
import ProjectList from './ProjectList';

type Props = {}

function Projects({ }: Props) {
    return (
        <>
            <div className='col-span-12 pt-8' id='about'>
                <h1 className='text-6xl font-black text-center uppercase'>My projects</h1>
            </div>
            <ProjectList/>
            <div className='col-span-12 mt-4 mb-20 flex'>
                <Link href="/projects" className='w-full text-center bg-white text-black text-lg font-medium py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-700'>All my projects</Link>
            </div>
        </>
    )
}

export default Projects