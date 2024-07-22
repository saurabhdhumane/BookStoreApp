import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/header'
import Course from '../Course/Course'

const Courses = () => {
    return (
        <>
           
            <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
            <Navbar />
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default Courses
