import React, { useState, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Showing from '../CouresComponent/Showing'
import Showing2 from '../CouresComponent/showing2'
import Categories from '../CouresComponent/Category'
import { useParams } from 'react-router-dom'
import { ImageData } from '../DummyData/HomeJson'
import ExploreShowing from './ExploreShowing'

const ExploreCourseDetails = () => {
    const { id } = useParams()
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const blogRef = useRef(null)

    const handlePageChange = (num) => {
        setPage(num)
        blogRef.current?.scrollIntoView({
            behavior: "smooth"
        })
        // Close mobile menu if open
        setIsMobileMenuOpen(false)
    }

    const filterData = ImageData.filter((item) => {
        return item.id === Number(id)
    })

    return (
        <>
            {/* Breadcrumb - Responsive */}
            <div className="p-2 bg-gray-100 px-4 sm:px-6 lg:px-8 text-sm sm:text-base">
                <span className="hover:text-yellow-600 cursor-pointer">Home</span>
                <span className="text-gray-400 mx-1">{" > "}</span>
                <span className="text-gray-400 hover:text-yellow-600 cursor-pointer">  {filterData[0]?.title || 'Course Title'}</span>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8' ref={blogRef}>
                {/* Title - Responsive */}
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold pt-6 sm:pt-8 lg:pt-10'>
                    {filterData[0]?.title || 'Course Title'}
                </h1>

                {/* Main Grid - Responsive */}
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8 lg:py-10'>
                    
                    {/* LEFT SIDE - Main Content */}
                    <div className='lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10'>
                        
                        {/* Filter Bar - Responsive */}
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                            {/* Mobile Filter Button (visible only on mobile) */}
                            <div className="lg:hidden p-4 border-b border-gray-200">
                                <button 
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="w-full flex items-center justify-between text-gray-700 bg-gray-50 px-4 py-2 rounded-lg"
                                >
                                    <span className="font-medium">Filters & Search</span>
                                    <svg 
                                        className={`w-5 h-5 transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Filter Content - Responsive */}
                            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 lg:px-6 lg:py-3 gap-4">
                                    
                                    {/* Left side - Results count with icons */}
                                    <div className="flex items-center gap-3 text-sm text-gray-600 w-full lg:w-auto">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-500">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <rect x="3" y="3" width="7" height="7" strokeWidth="1.5" />
                                                    <rect x="14" y="3" width="7" height="7" strokeWidth="1.5" />
                                                    <rect x="3" y="14" width="7" height="7" strokeWidth="1.5" />
                                                    <rect x="14" y="14" width="7" height="7" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-500">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="ml-1 text-xs sm:text-sm">Showing 1-12 of 21 results</span>
                                    </div>

                                    {/* Right side - Dropdown and Search */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
                                        
                                        {/* Newly published dropdown */}
                                        <div className="flex items-center gap-1 text-sm text-gray-700 w-full sm:w-auto justify-between sm:justify-start border sm:border-0 p-2 sm:p-0 rounded-lg bg-gray-50 sm:bg-transparent">
                                            <span>Newly published</span>
                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Search Input - Responsive */}
                                        <div className="w-full sm:w-auto">
                                            <input 
                                                type='text' 
                                                placeholder='Search courses...' 
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className='w-full sm:w-48 lg:w-64 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content - Responsive */}
                        <div className="transition-all duration-300">
                            {page === 1 && <ExploreShowing />}
                        </div>

                       
                    </div>

                    {/* RIGHT SIDE - Categories (Sticky on desktop, normal on mobile) */}
                    <div className='lg:sticky lg:top-24 h-fit order-first lg:order-last mb-6 lg:mb-0 '>
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 lg:p-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6">Categories</h2>
                            <Categories />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ExploreCourseDetails;