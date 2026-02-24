import { Section } from 'lucide-react'
import React from 'react'
import { timeline } from '../assets/aboutData'
import SectionHeader from './SectionHeader'

const Timeline = () => {
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <SectionHeader
            badge={"Our Journey"}
            title={"Milestones "}
            highlight={"Timeline"}
            description={"A glimpse into our journey and the achievements we've accomplished."}
            />

            {/* Timeline */}
            <div className='max-w-4xl mx-auto'>
                <div className='space-y-12'>
                    {timeline.map((item, index) => (
                        <div key={index} className='flex flex-col md:flex-row items-center gap-6'>
                            <div className='w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center'>
                                {item.year}
                            </div>
                            <div className='bg-secondary p-6 rounded-2xl grow'>
                                <h3 className='font-heading font-bold text-xl text-gray-800'>{item.title}</h3>
                                <p className='text-gray-600 text-sm'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline