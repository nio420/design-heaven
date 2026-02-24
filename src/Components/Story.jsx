import React from 'react'
import {story} from '../assets/aboutData.js'
import { FaArrowRight } from 'react-icons/fa'

const Story = () => {
  return (
    <div className='py-24 bg-white'>
        <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* left content */}
            <div>
                <span className='px-4 py-2 bg-accent-light text-accent rounded-full font-heading font-bold text-lg'>{story.badge}</span>
                <h2 className='text-gray-800 font-heading font-bold text-4xl md:text-5xl mt-6 mb-4'>Our <span className='text-accent'>{story.title}</span></h2>
                <p className='text-gray-600 max-w-2xl mx-auto text-sm mb-4'>{story.paragraphs[0]}</p>
                <p className='text-gray-600 max-w-2xl mx-auto text-sm mb-4'>{story.paragraphs[1]}</p>
                <p className='text-gray-600 max-w-2xl mx-auto text-sm mb-4'>{story.paragraphs[2]}</p>
                <button className='flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full cursor-pointer hover:text-accent hover:bg-white hover:border-accent border transition-all duration-500 ease-in-out hover:-translate-y-0.5 shadow-lg'>Meet Our Team <FaArrowRight/> </button> 
            </div>
            {/* right content */}
            <div className='p-2 bg-accent-light rounded-3xl overflow-hidden shadow-lg'>
                <img src={story.image} alt="About us" className='w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg' />
            </div>
        </div>
    </div>
  )
}

export default Story