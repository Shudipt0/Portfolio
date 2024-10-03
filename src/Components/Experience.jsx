import React from 'react';
import html from '../assets/html.svg'

function Experience() {
    const techs =[
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: html,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: html,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-600'
        },
        {
            id:4,
            src: html,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id:1,
            src: html,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id:1,
            src: html,
            title: 'NEXT JS',
            style: 'shadow-white'
        },
    ]
  return (
    <div name='experience' className=' bg-gradient-to-b  from-gray-800 to-black w-full text-white h-fit md:h-screen
    py-8 md:py-0'>
      <div className='max-w-screen-lg p-4 md:px-10 lg:p-20
      xl:px-10 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 pl-12'>
            <p className='text-4xl font-bold inline border-b-2 border-gray-500'>Experience</p>
            <p className='py-6'>There are the technologies I've worked with</p>
        </div>
        <div className='w-full  grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm-px-0'>
        {
            techs.map((i)=> (
                <div key={i.id} className={' flex flex-col items-center shadow-md shadow-gray-600 rounded-lg'+" "+ i.style}>
                <img src={i.src} alt="" width={80} className='rounded-md duration-200 hover:scale-105 '/>
                <p className='my-2'>{i.title}</p>
            </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Experience
