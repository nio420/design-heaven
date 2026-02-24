import { Section } from 'lucide-react'
import React from 'react'
import SectionHeader from './SectionHeader'
import { values } from '../assets/aboutData'

const Values = () => {
  return (
    <div className='py-24 bg-white'>
        <div className='container mx-auto px-6'>
            <SectionHeader
            badge={"Our Values"}
            title={"What "}
            highlight={"Drive Us"}
            description={"The core principles that guide every project we undertake."}
            />

            {/* Values */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 '>
                {values.map((item, index) => (
                    <div key={index} className='bg-secondary p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer shadow-lg'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex items-center justify-center mb-4 w-12 h-12 bg-accent text-white rounded-full'><item.icon className='text-2xl'/></div>
                            <h4 className='text-gray-700 font-heading mb-4 font-bold text-2xl'>{item.title}</h4>
                            <p className='text-center text-gray-600 text-sm'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Values