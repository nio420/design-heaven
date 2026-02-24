import React from 'react'

const PageHero = ({title, description, highlight}) => {
  return (
    <div className='py-24 pt-32 bg-linear-to-r from-primary to-secondary'>
        <div className='mx-auto px-6 container'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4'>{title} <span className='text-accent'>{highlight}</span></h2>
                <p className='text-gray-600 max-w-2xl mx-auto text-sm'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default PageHero