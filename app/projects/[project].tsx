import Link from "next/link";
import MainLayout from "../../components/Layout/MainLayout";
import { useRouter } from 'next/router'
'use client'


export default function Project() {
    const router = useRouter()

    return (
        <MainLayout>
            <>
                {/* My Page {router.query.project} */}
                <div className="col-span-4">
                    <Link href="">erger</Link>
                    <h1 className='text-7xl font-semibold my-10'>Getdesk</h1>
                    <p className=' text-lg text-black/50'>I have had the privilege of working with some of the most well-known companies in the world. Here are some of the works I'm most proud of.</p>
                </div>
            </>
        </MainLayout>
    )
}