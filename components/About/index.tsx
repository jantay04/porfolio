import React from 'react'
import Image from 'next/image'
import { ContactsList } from '../data'
import photoAuthor from './assets/photoAuthor.webp'
import photoAuthor2 from './assets/photoAuthor2.jpg'
import instagramSvg from './assets/instagram.svg'
import githubSvg from './assets/github.svg'
import linkedinSvg from './assets/linkedin.svg'
import twitterSvg from './assets/twitter.svg'
import telegramSvg from './assets/telegram.svg'
import Link from 'next/link'

type Props = {}

export const linksSocial = [
    {
        id: 1,
        title: 'Linkedin',
        url: ContactsList.linkedin,
        icon: linkedinSvg,
        color: '#0A66C2'
    },
    {
        id: 2,
        title: 'Instagram',
        url: ContactsList.instagram,
        icon: instagramSvg,
        color: '#D82D7E #FA8F21',
    },
    {
        id: 3,
        title: 'Github',
        url: ContactsList.github,
        icon: githubSvg,
        color: '#737373',
    },
    {
        id: 4,
        title: 'Twitter',
        url: ContactsList.twitter,
        icon: twitterSvg,
        color: '#1D9BF0',
    },
    {
        id: 5,
        title: 'Telegram',
        url: ContactsList.telegram,
        icon: telegramSvg,
        color: '#2AABEE',
    },
]

function About({ }: Props) {

    const aboutMe = [
        {
            id: 1,
            tittle: 'First name',
            secondTittle: 'Bekbolot'
        },
        {
            id: 2,
            tittle: 'Last name',
            secondTittle: 'Zhantaev'
        },
        {
            id: 3,
            tittle: 'Birthday',
            secondTittle: '8 march 2004'
        },
        {
            id: 4,
            tittle: 'Country',
            secondTittle: 'Kyrgyzstan'
        },
        {
            id: 5,
            tittle: 'Phone Number',
            secondTittle: '+996 (706) 915 494'
        },
        {
            id: 6,
            tittle: 'Email',
            secondTittle: 'bzantaev@gmail.com'
        },
        {
            id: 7,
            tittle: 'Russian',
            secondTittle: 'Native'
        },
        {
            id: 8,
            tittle: 'Kyrgyz',
            secondTittle: 'Native'
        },
        {
            id: 9,
            tittle: 'English',
            secondTittle: 'Intermediate'
        },
    ]

    return (
        <>
            <div className='col-span-12 pt-8' id='about'>
                <h1 className='text-6xl font-black text-center uppercase'>About me</h1>
            </div>
            <div className={` flex flex-col justify-between col-span-12 md:col-span-12 rounded-4xl cssSelector`}>
                <Image
                    alt='Author'
                    src={photoAuthor2}
                    objectFit='contain'
                    className='rounded-4xl'
                />
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-12 rounded-4xl cssSelector p-6`}>
                <p className='text-2xl font-semibold p-10'>
                    A creative and versatile digital designer with over five years of experience in designing and developing engaging digital media for various platforms and audiences. Skilled in using Adobe Creative Suite, HTML, CSS, JavaScript, and WordPress to create responsive websites, social media graphics, animations, e-books, and interactive campaigns.
                    creative and versatile digital designer with over five years of experience in designing and developing engaging digital media for various platforms and audiences. Skilled in using Adobe Creative Suite, HTML, CSS, JavaScript.
                </p>
            </div>
            {/* <div className='col-span-4'>
                <div className='flex items-center max-sm:flex-col gap-2 mt-5'>
                    <a href={`mailto:${ContactsList.email}`} className='py-6 w-[300px] flex justify-center items-center max-sm:w-full rounded-full bg-black text-white uppercase text-xl'>Get in touch</a>
                    <a href={`mailto:${ContactsList.email}`} className='py-6 w-[300px] flex justify-center items-center max-sm:w-full rounded-full border-2 border-black uppercase text-xl'>Download my cv</a>
                </div>
            </div> */}
            <div className='col-span-12'>
                <div className='flex justify-between gap-4 md:gap-5'>
                    {linksSocial.map((link) =>
                        <Link key={link.id} href={link.url} className={`flex justify-center items-center  bg-secondary h-16 w-full rounded-3xl py-10`}>
                            <Image
                                alt='Author'
                                src={link.icon}
                                objectFit='contain'
                                color='red'
                                style={{ filter: 'invert(100%)' }}
                            />
                            <p className='ml-2 text-lg'>{link.title}</p>
                        </Link>
                    )}
                </div>
            </div>
            {/* grid grid-cols-12 gap-4 md:gap-5  */}

            {/* <a key={link.id} href={link.url} className={`flex justify-center items-center  bg-secondary h-16 w-full rounded-4xl py-10`}>
                <Image
                    alt='Author'
                    src={link.icon}
                    objectFit='contain'
                    color='red'
                    style={{ filter: 'invert(100%)' }}
                />
                <p className='ml-2 text-lg'>{link.title}</p>
            </a> */}

            {/* <Link key={link.id} href={link.url} className=" relative inline-flex items-center justify-start inline-block px-10 py-3 overflow-hidden font-bold rounded-full group hover:text-white z-0">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-52 8 h-52 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">{link.title}</span>
                <span className="absolute inset-0 border-2 border-black rounded-full"></span>
            </Link> */}

            {/* <div className='col-span-12 bg-[#313135] rounded-4xl p-8 text-white'>
                <h2 className='font-semibold text-3xl'>About me</h2>
                <div className='grid grid-cols-1 mt-4 gap-2'>
                    {aboutMe.map((item) => (
                        <div className='' key={item.id}>
                            <p className='text-white/80'>{item.tittle}: <span className='font-semibold text-white'>{item.secondTittle}</span></p>
                        </div>
                    ))}

                </div>
            </div> */}
        </>
    )
}

export default About