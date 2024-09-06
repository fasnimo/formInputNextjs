import React from 'react'
import Link from 'next/link';
// import Footerp from '../pages/Footerp';
// import Footer from '../components/Footer'

export const Header = () => {
    return (
       <div className='text-center'>
            <h1 className='p-5'>Welcome, please click button to subcribe.</h1>
            <div className='text-center'>
                <Link href="/pageRedirected">
                    <button className='btn btn-primary'>Subscribe</button>
                </Link>
            </div>
       </div> 
    )
}