import React from 'react'
import Form from './Form'


type Props = {}

function Contacts({ }: Props) {
    return (
        <>
            <div className='col-span-12 flex justify-center pt-8'>
                <h1 className='w-3/4 text-center text-7xl font-black uppercase '><span className=' text-[#787d82]'>Have an idea? </span>Let’s connect.</h1>
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-6 rounded-4xl cssSelector p-6`}>
                <p className=' text-3xl text-[#374151]'>I am eager to hear from you and discuss how my UI design expertise can help you achieve your business goals. Please contact me today to schedule a consultation.</p>
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-6 rounded-4xl cssSelector p-6`}>
                <p className=' text-3xl text-[#374151]'>I am eager to hear from you and discuss how my UI design expertise can help you achieve your business goals. Please contact me today to schedule a consultation.</p>
            </div>
            <div className={`bg-secondary flex flex-col justify-between col-span-12 md:col-span-12 rounded-4xl cssSelector p-28`}>
                <div className='flex justify-center mb-14'>
                    <h2 className='text-center text-4xl font-semibold w-1/2'>Send me message, I’ll reply within 12 hours</h2>
                </div>
                <Form />
            </div>
        </>
    )
}

export default Contacts