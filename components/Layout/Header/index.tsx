import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logoSvg from './assets/logo.svg'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
type Props = {}

function Header({ }: Props) {
    const [header, setHeader] = useState(false)

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    })

    const [isDrawerOpened, setIsDrawerOpened] = React.useState(false)

    function closeDrawer() {
        setIsDrawerOpened(false)
    }

    function openDrawer() {
        setIsDrawerOpened(true)
    }

    const linksList = [
        {
            id: 1,
            tittle: 'Home',
            href: '#home'
        },
        {
            id: 2,
            tittle: 'Projects',
            href: '#projects'
        },
        {
            id: 3,
            tittle: 'Contact',
            href: '#contact'
        },
    ]

    return (
        <div className='fixed top-4 left-0 w-full z-50 '>
            <div className='container sm mx-auto px-4'>
                <div className={`${header ? "bg-white drop-shadow" : ""} p-4 flex justify-between items-center rounded-full transition-all duration-1000`}>
                    <div className="h-6 relative flex">
                        <div>
                            <p className='relative uppercase font-bold'>Jantay
                                <span className="absolute top-0 left-full flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                                </span>
                            </p>

                        </div>
                    </div>
                    <div className='flex gap-10 max-sm:hidden'>
                        {linksList && linksList.map((item) =>
                            <a href={item.href} key={item.id}>
                                <Button variant="text" sx={{ textTransform: 'capitalize', fontWeight: 'medium', color: 'black' }}><p className={`text-sm font-medium text-black${item.id !== 1 && '/50'}`}>{item.tittle}</p></Button>
                            </a>
                        )}
                    </div>
                    {/* <IconButton aria-label="delete" size="large">
                        <MenuIcon />
                    </IconButton> */}
                    <div className='min-[640px]:hidden'>
                        <Button variant="text" sx={{ color: 'black' }} size='small' onClick={openDrawer}><MenuIcon fontSize='large' /></Button>
                    </div>
                </div>
            </div>
            <Drawer
                variant="temporary"
                anchor="right"
                open={isDrawerOpened}
                onClose={closeDrawer}
            >
                <div className='w-screen  p-8'>
                    <div className='flex justify-between items-center'>
                        <div className="h-10 relative">
                            <Image
                                src={logoSvg}
                                alt="Logo"
                                height={42}
                            />
                        </div>
                        <CloseIcon sx={{ fontSize: "40px" }} onClick={closeDrawer} />
                    </div>
                    <div className='grid gap-3 mt-10'>
                        {linksList && linksList.map((item) =>
                            <a key={item.id} href={item.href} className={`text-[32px] font-medium text-black${item.id !== 1 && '/50'}`} onClick={closeDrawer}>{item.tittle}</a>
                        )}
                        <a href='https://drive.google.com/file/d/1mwm6ZONoZF00OGutm1tgM8jIhGwVGSQX/view?usp=sharing' target='_self'></a>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Header