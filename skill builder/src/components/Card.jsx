/* eslint-disable react/prop-types */
// import React from 'react'

function Card({ description }) {
    return (
        <div className=' flex flex-1 justify-around items-center z-10'>

            <div className=' w-3/4 h-48 rounded-3xl bg-transparent border-gray-700 border-2 p-5
             align-middle shadow-lg flex justify-center items-center'>
                {description}
            </div>
        </div>
    )
}

export default Card
