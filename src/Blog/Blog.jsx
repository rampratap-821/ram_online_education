// import React, { useState, useRef } from 'react'
// import BlogSlider1 from '../BlogComponent/BlogSlider1'
// import BlogSlider2 from '../BlogComponent/BlogSlider2'
// import BlogSlider3 from '../BlogComponent/BlogSlider3'
// import BlogSlider4 from '../BlogComponent/BlogSlider4'
// import BlogSlider5 from '../BlogComponent/BlogSlider5'
// import BlogSlider6 from '../BlogComponent/BlogSlider6'
// import BlogSlider7 from '../BlogComponent/BlogSlider7'
// import BlogSlider8 from '../BlogComponent/BlogSlider8'
// import PopularCourses from '../BlogComponent/PopularCourses'
// import LatestPostes from '../BlogComponent/LatestPostes'
// import { FaArrowRight } from 'react-icons/fa6'

// const Blogs = () => {

//     const [page, setPage] = useState(1)
//     const blogRef = useRef(null)

//     const handlePageChange = (num) => {
//         setPage(num)

//         blogRef.current?.scrollIntoView({
//             behavior: "smooth"
//         })
//     }

//     return (
//         <>
//             <div className="p-2 bg-gray-100 pl-5">
//                 <span>Home</span>
//                 <span className="text-gray-400">{" > "}</span>
//                 <span className="text-gray-400">blog</span>
//             </div>

//             <div className='container mx-auto' ref={blogRef}>
//                 <h1 className='text-4xl font-semibold pl-10 pt-10'>Blog</h1>

//                 <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10 py-10 gap-10'>

//                     {/* LEFT SIDE */}
//                     <div className='md:col-span-2 space-y-10'>

//                         {page === 1 && (
//                             <>
//                                 <BlogSlider1 />
//                                 <BlogSlider2 />
//                                 <BlogSlider3 />
//                                 <BlogSlider4 />
//                                 <BlogSlider5 />
//                                 <BlogSlider6 />
//                                 <BlogSlider7 />
//                                 <BlogSlider8 />
//                             </>
//                         )}

//                         {page === 2 && (
//                             <>
//                                 <BlogSlider8 />
//                                 <BlogSlider7 />
//                                 <BlogSlider6 />
//                                 <BlogSlider5 />
//                                 <BlogSlider4 />
//                             </>
//                         )}

//                         {/* Pagination */}
//                         <div className="flex items-center gap-3 justify-center">

//                             <div
//                                 onClick={() => handlePageChange(1)}
//                                 className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer
//                                 ${page === 1 ? "bg-yellow-400" : "border border-gray-300 bg-white"}`}
//                             >
//                                 1
//                             </div>

//                             <div
//                                 onClick={() => handlePageChange(2)}
//                                 className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer
//                                 ${page === 2 ? "bg-yellow-400" : "border border-gray-300 bg-white"}`}
//                             >
//                                 2
//                             </div>

//                             <div
//                                 onClick={() => handlePageChange(2)}
//                                 className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white cursor-pointer"
//                             >
//                                 <FaArrowRight />
//                             </div>

//                         </div>

//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className='space-y-10 sticky top-10 h-fit'>
//                         <PopularCourses />
//                         <LatestPostes />
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Blogs


import React, { useState, useRef } from 'react'
import BlogSlider1 from '../BlogComponent/BlogSlider1'
import BlogSlider2 from '../BlogComponent/BlogSlider2'
import BlogSlider3 from '../BlogComponent/BlogSlider3'
import BlogSlider4 from '../BlogComponent/BlogSlider4'
import BlogSlider5 from '../BlogComponent/BlogSlider5'
import BlogSlider6 from '../BlogComponent/BlogSlider6'
import BlogSlider7 from '../BlogComponent/BlogSlider7'
import BlogSlider8 from '../BlogComponent/BlogSlider8'
import PopularCourses from '../BlogComponent/PopularCourses'
import LatestPostes from '../BlogComponent/LatestPostes'
import { FaArrowRight } from 'react-icons/fa6'

const Blogs = () => {

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
                <span className="text-gray-400">Blog</span>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6' ref={blogRef}>
                
                {/* Heading */}
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold pt-8 sm:pt-10'>
                    Blog
                </h1>

                {/* MAIN GRID */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 py-8 sm:py-10'>

                    {/* LEFT SIDE */}
                    <div className='lg:col-span-2 space-y-8 sm:space-y-10'>

                        {page === 1 && (
                            <>
                                <BlogSlider1 />
                                <BlogSlider2 />
                                <BlogSlider3 />
                                <BlogSlider4 />
                                <BlogSlider5 />
                                <BlogSlider6 />
                                <BlogSlider7 />
                                <BlogSlider8 />
                            </>
                        )}

                        {page === 2 && (
                            <>
                                <BlogSlider8 />
                                <BlogSlider7 />
                                <BlogSlider6 />
                                <BlogSlider5 />
                                <BlogSlider4 />
                            </>
                        )}

                        {/* Pagination */}
                        <div className="flex items-center gap-2 sm:gap-3 justify-center pt-4">

                            <div
                                onClick={() => handlePageChange(1)}
                                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md cursor-pointer text-sm sm:text-base
                                ${page === 1 ? "bg-yellow-400" : "border border-gray-300 bg-white"}`}
                            >
                                1
                            </div>

                            <div
                                onClick={() => handlePageChange(2)}
                                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md cursor-pointer text-sm sm:text-base
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
                    <div className=' sm:space-y-10 lg:sticky lg:top-10 h-fit'>
                        <PopularCourses />
                        <LatestPostes />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blogs