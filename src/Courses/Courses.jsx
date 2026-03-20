import React, { useState, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Showing from '../CouresComponent/Showing'
import Showing2 from '../CouresComponent/showing2'
import Categories from '../CouresComponent/Category'

const AllCourses = () => {

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
            {/* Breadcrumb */}
            <div className="p-3 bg-gray-100 pl-4 sm:pl-6">
                <span>Home</span>
                <span className="text-gray-400">{" > "}</span>
                <span className="text-gray-400">Course</span>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6' ref={blogRef}>
                
                {/* Heading */}
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold pt-8 sm:pt-10'>
                    Course
                </h1>

                {/* GRID */}
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 py-8 sm:py-10'>

                    {/* LEFT SIDE */}
                    <div className='lg:col-span-3 space-y-8 sm:space-y-10'>

                        {(page === 1 || page === 2) && (
                            <div className="w-full bg-white border-b border-gray-200">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3 gap-3">

                                    {/* LEFT */}
                                    <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 flex-wrap">
                                        <span className="text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <rect x="3" y="3" width="7" height="7" strokeWidth="1.5" />
                                                <rect x="14" y="3" width="7" height="7" strokeWidth="1.5" />
                                                <rect x="3" y="14" width="7" height="7" strokeWidth="1.5" />
                                                <rect x="14" y="14" width="7" height="7" strokeWidth="1.5" />
                                            </svg>
                                        </span>

                                        <span className="text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </span>

                                        <span className="ml-1">
                                            Showing 1-12 of 21 results
                                        </span>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">

                                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-700">
                                            <span>Newly published</span>
                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Searching..."
                                            className="text-xs sm:text-sm outline-none border border-gray-200 rounded px-2 py-1"
                                        />
                                    </div>

                                </div>
                            </div>
                        )}

                        {page === 1 && <Showing />}
                        {page === 2 && <Showing2 />}

                        {/* Pagination */}
                        <div className="flex items-center gap-2 sm:gap-3 justify-center pt-4">

                            <div
                                onClick={() => handlePageChange(1)}
                                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md cursor-pointer text-sm
                                ${page === 1 ? "bg-yellow-400" : "border border-gray-300 bg-white"}`}
                            >
                                1
                            </div>

                            <div
                                onClick={() => handlePageChange(2)}
                                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md cursor-pointer text-sm
                                ${page === 2 ? "bg-yellow-400" : "border border-gray-300 bg-white"}`}
                            >
                                2
                            </div>

                            <div
                                onClick={() => handlePageChange(2)}
                                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white cursor-pointer"
                            >
                                <FaArrowRight />
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className='space-y-8 sm:space-y-10 lg:sticky lg:top-10 h-fit'>
                        <Categories />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AllCourses;