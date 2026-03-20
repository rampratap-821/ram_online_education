

import React, { useState, useRef } from 'react'
import BlogSlider1 from '../BlogComponent/BlogSlider1'
import PopularCourses from '../BlogComponent/PopularCourses'
import LatestPostes from '../BlogComponent/LatestPostes'
import { FaArrowRight } from 'react-icons/fa6'
import Latest1 from './Latest1'
import { useParams } from 'react-router-dom'

const LatestNewsDetails = () => {
    const{id} = useParams()
    console.log("mama",id)

    const [page, setPage] = useState(1)
    const blogRef = useRef(null)

    const handlePageChange = (num) => {
        setPage(num)

        blogRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="p-2 bg-gray-100 pl-5">
                <span>Home</span>
                <span className="text-gray-400">{" > "}</span>
                <span className="text-gray-400">blog</span>
            </div>

            <div className='container mx-auto' ref={blogRef}>
                <h1 className='text-2xl font-bold pl-10 pt-10'>Blog</h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10 py-10 gap-10'>

                    {/* LEFT SIDE */}
                    <div className='md:col-span-2 space-y-10'>

                        {page === 1 && (
                            <>
                                <Latest1 id = {id}/>
                              
                            </>
                        )}

                   

                    </div>

                    {/* RIGHT SIDE */}
                    <div className='space-y-10 sticky top-10 h-fit'>
                        <PopularCourses />
                        <LatestPostes />
                    </div>

                </div>
            </div>
        </>
    )
}

export default LatestNewsDetails;