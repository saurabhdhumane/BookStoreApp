import React, { useEffect, useState } from 'react'
import List from '../../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Cards/Cards';
import axios from 'axios';


const FreeBooks = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:3000/book')
                //console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log("err", error);
            }
        }
        getBook()
    }, [])

    const filterData = book.filter((item) => item.category === "Free");


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>
                        Free Offered Books
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa quo quidem eius sequi, nostrum quasi iusto alias dolorem tempore, amet sit rem ex quos soluta. Eligendi voluptatum accusantium iusto.</p>
                </div>
                <Slider {...settings}>
                    {filterData.map(item =>
                        <Cards
                            item={item}
                            key={item.id}
                        />)}
                </Slider>
            </div>
        </>
    )
}

export default FreeBooks
