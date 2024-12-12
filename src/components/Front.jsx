import React from 'react'
import { Link } from "react-router-dom"
const Front = () => {
    return (
        <div>


            <div className="grid md:grid-cols-2 gap-2">

                {/* Your grid items go here */}
                <div className="m-5">
                <img src="https://imgs.search.brave.com/RN8EjA8jslbNL18m3Znfj20W8f3W40XHV4qs_CWZAVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzkzLzc4LzY3/LzM2MF9GXzg5Mzc4/NjcxNF9lT3d2UDNj/d1BDQlhDODFUcFJ4/RUhvUE5CbFZhbDRy/My5qcGc" width={1050}>

                </img>
</div>
                <div className="flex flex-col justify-center gap-5 m-5" >
                    <div class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-green">Start asking your doubts with our chatbot - <span className='text-green-400'>KISAN AAROGYA BOT 🤖</span></div>
                </div>
            </div>
            <div className='flex justify-center '>
                <Link to="/home"class="text-white bg-gradient-to-r w-40 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Get Started
                </Link>
            </div>
            <div className="flex justify-center   gap-5 mt-10 flex-wrap m-4">
                <div className="block font-medium p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-green-100 dark:border-gray-700  h-[8rem]  w-[30rem]">

                    Find Schemes For You
                    1170+
                    Total Schemes
                </div>
                <div className="block font-medium p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-green-100 dark:border-gray-700 h-[8rem]  w-[30rem]">

                    380+
                    Central Schemes
                </div>
                <div className="block font-medium p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-green-100 dark:border-gray-700 h-[8rem]  w-[30rem]">

                    780+
                    States/UTs Schemes
                </div>
            </div>

        </div>
    )
}

export default Front
