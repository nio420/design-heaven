import React from 'react'
import SectionHeader from './SectionHeader'
import { homePageData } from '../assets/homePageData.js'

const Feature = () => {
  const {features} = homePageData
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            {/* section header */}
            <SectionHeader
            badge={"Why Chose Us"}
            title={"Premium "}
            highlight={"Design Solution"}
            description={"We combine creativity with functionality to deliver exceptional home modeling experiences."}
            />
        
        {/* Grid Card */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {features.items.map((item, index) => (
              <div 
              key={index}
              className='bg-secondary p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 ea] cursor-pointer'
              >
                <div className='flex items-center justify-center w-13 mb-4 h-13 rounded-full bg-accent text-white'><item.icon className='text-2xl'/></div>
                <h3 className='text-gray-800 font-heading font-bold mb-4 text-2xl'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Feature