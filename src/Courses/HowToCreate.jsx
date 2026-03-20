

import React from "react";

const HowToCreate = ({id }) => {
    console.log("pala",id)

    const courses = [
        {
            id: 1,
            title: "How to Teach English Online and Get Paid",
            description: "In this course, We’ll learn how to create websites by structuring and styling your pages with HTML and CSS.",
            Categories: "Online Business",
            avatar: "https://i.pravatar.cc/150?u=keny1"
        },
        {
            id: 2,
            title: "How To Create In-Demand Online Courses",
            description: "In this tutorial we will provide you with detailed instructions on how to use WordPress to create and manage your site. WordPress can be used for both simple and complex websites. In our WordPress tutorial we have tried to cover all the basics and few advanced topics.",
            Categories: "Teacher Training",
            avatar: "https://i.pravatar.cc/150?u=keny2"
        },
        {
            id: 3,
            title: "Instructional Design for Learning and Development",
            description: "This tutorial will introduce you to PHP, a server-side scripting language you can use to make dynamic websites and web applications.",
            Categories: "Coaching",
            avatar: "https://i.pravatar.cc/150?u=keny3"
        },
        {
            id: 4,
            title: "Begin Teaching Online Full Time",
            description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those languages apply to JavaScript as well..",
            Categories: "Passive Income",
            avatar: "https://i.pravatar.cc/150?u=keny4"
        },
        {
            id: 5,
            title: "Advanced React Development",
            description: "HTML is the language of choice for structuring and presenting content for the World Wide Web. In this free online course you will learn about the latest features of HTML 5 including Geolocation, video, Web worker, canvas/SVG, app cache and database.",
            Categories: "Passive Income",
             avatar: "https://i.pravatar.cc/150?u=keny3"
        },
        {
            id: 6,
            title: "UI UX Design Masterclass",
            description: "This tutorial is specially designed to help you learn AngularJS as quickly and efficiently as possible.",
            Categories: "Coaching",
            avatar: "https://i.pravatar.cc/150?u=keny4"
        },
        {
            id: 7,
            title: "Full Stack Web Development",
            description: "Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.",
            Categories: "Passive Income",
            avatar: "https://i.pravatar.cc/150?u=keny3"
        },
        {
            id: 8,
            title: "Digital Marketing Basics",
            description: "Sass is completely compatible with all versions of CSS. We take this compatibility seriously, so that you can seamlessly use any available CSS libraries.",
            Categories: "Arts & Craft",
             avatar: "https://i.pravatar.cc/150?u=keny4"
        },
    ];

    const filterData = courses.filter((item) =>{
        return  item.id === Number(id)
    })



    return (
        <div className="bg-[#2f2f2f] text-white py-12 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {filterData[0].title}
                </h1>

                {/* Description */}
                <p className="text-gray-300 max-w-2xl mb-8">
                   {filterData[0].description}
                </p>

                {/* Info Section */}
                <div className="flex flex-wrap items-center gap-8 border-t border-gray-600 pt-6">

                    {/* Teacher */}
                    <div className="flex items-center gap-3">
                        <img
                            src={filterData[0].avatar}
                            alt="Teacher"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="text-gray-400 text-sm">Teacher</p>
                            <p className="font-semibold">Keny White</p>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <p className="text-gray-400 text-sm">{filterData[0].Categories}</p>
                        <p className="font-semibold">Arts & Crafts</p>
                    </div>

                    {/* Review */}
                    <div>
                        <p className="text-gray-400 text-sm">Review</p>
                        <div className="flex text-yellow-400">
                            {"★★★★★".split("").map((star, index) => (
                                <span key={index}>★</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowToCreate;