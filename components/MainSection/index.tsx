import React from 'react'
import style from './style.module.scss'
import Button from '@mui/material/Button/Button'

import { motion } from "framer-motion";



type Props = {}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

function MainSection({ }: Props) {
    return (
        <div className='col-span-12  h-[calc(100vh-80px)] flex justify-center items-center text-center'>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                transition={{ duration: 100000 }}
            >
                <motion.div className='item' variants={item} key={1}><p className='text-4xl font-medium '>Nice to meet you!</p></motion.div>
                <motion.div className='item' variants={item} key={2}><h1 className=' text-7xl font-black uppercase '>I'm Bekbolot. <br /> A Frontend developer.</h1></motion.div>
                <motion.div className='item' variants={item} key={3}><p>Based in Czechia, Prague</p></motion.div>
                <a href="#about" className="mt-10 relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group hover:text-white z-0">
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-52 8 h-52 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">Get started</span>
                    <span className="absolute inset-0 border-2 border-black rounded-full"></span>
                </a>
            </motion.div>
        </div>
    )
}

export default MainSection