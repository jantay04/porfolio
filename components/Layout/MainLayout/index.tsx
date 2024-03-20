import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Head from 'next/head'
import logoSvg from '../../../public/logo.svg'

type Props = {
    children: ReactNode
}

function MainLayout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Portfolio - Jantay</title>
                <link rel="icon" href="../../../public/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='container mx-auto px-4 mb-20 mt-32'>
                <Header />
                <div className='grid grid-cols-12 gap-4 md:gap-8 min-h-screen mt-10 mb-20 '>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout