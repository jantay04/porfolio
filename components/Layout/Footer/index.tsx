import React from 'react'
import { linksSocial } from '../../About/index'
import { ContactsList } from '../../data'
import Link from 'next/link'
type Props = {}

function Footer({ }: Props) {
  return (
    <div className={`bg-black text-white flex flex-col justify-between col-span-12 rounded-4xl cssSelector py-20 text-center`}>
      <h1 className='text-7xl font-semibold pt-10'>
        Let’s drop your ideas here
      </h1>
      {/* <p className='mt-[40px] text-xl font-light'>Let’s drop your ideas here</p> */}
      <div className='mt-[60px]'>
        <Link href="/" className='bg-white text-black text-lg  mt-4 px-6 py-3 rounded-full hover:bg-gray-300'>{ContactsList.email}</Link>
      </div>
      <div className='flex justify-center gap-8 mt-10'>
        {linksSocial.map((link) =>
          <a key={link.id} href={link.url} className={`flex  justify-center items-center py-10 text-xl text-whtie hover:text-gray-300`}>
            {link.title}
          </a>
        )}
      </div>
    </div>
  )
}

export default Footer