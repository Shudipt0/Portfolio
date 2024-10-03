import React from 'react';
import Image1 from "../assets/P-1.jpg"


function Portfolio() {
    const portfolio =[
        {
            id:1,
            src: Image1
        },
        {
            id:2,
            src: Image1
        },
        {
            id:3,
            src: Image1
        },
        {
            id:4,
            src: Image1
        },
        {
            id:5,
            src: Image1
        },
        {
            id:6,
            src: Image1
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-fit py-8 md:py-0 md:h-screen '>
      <div className='max-w-screen-lg px-4 md:px-10 lg:p-20
      xl:px-10 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 pl-12'>
            <p className='text-4xl font-bold inline border-b-2 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm-px-0'>
        {
            portfolio.map((i) => (
                <div key={i.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={i.src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 hover:scale-105 duration-200'>Demo</button>
                    <button  className='w-1/2 px-6 py-3 hover:scale-105 duration-200'>Code</button>
                </div>
            </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
