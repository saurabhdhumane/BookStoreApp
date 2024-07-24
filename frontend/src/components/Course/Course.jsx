import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import list from '../../../public/list.json'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Course = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:3000/book')
                // console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log("err", error);
            }
        }
        getBook()
    }, [])
    return (
        <>
            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div className='items-center justify-center text-center dark:bg-slate-900 dark:text-white'>
                    <br /> <br /> <br />
                    <h1 className='text-2xl md:text-4xl'>Lorem ipsum dolor sit, amet consectetur <span className='text-pink-500'>adipisicing elit.</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis aliquid maiores assumenda eum tempore natus, suscipit accusantium ut a totam necessitatibus quam accusamus hic iure illum sed unde iste.</p>
                    <Link to={'/'}>
                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>

                    {
                        book.map((item, index) => (
                            <Cards key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
