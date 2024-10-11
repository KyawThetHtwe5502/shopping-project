import React from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight} from "react-icons/fa"
const NotFoundPage = () => {
  return (
    <div className='bg-[#E2E7F6] h-screen'>
        <div className='container mx-auto p-10'>
        <div className='flex justify-between items-center gap-x-8 py-7'>
        <img src="/error-page.svg" className='w-1/3' alt="" />
        <div className='flex flex-col gap-5 p-5'>
            <h1 className='text-8xl font-bold'>404</h1>
            <h3 className='text-4xl font-bold'>Something's missing.</h3>
            <p className='text-3xl mb-5'>This page is missing or you assembled the link incorrectly. </p>
            <Link to="/" className='text-2xl font-bold text-blue-500 inline-flex items-center' >Go to website <FaChevronRight/> </Link>
        </div>
    </div>
        </div>
    
    </div>
    
  )
}

export default NotFoundPage