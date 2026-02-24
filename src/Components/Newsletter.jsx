import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-20 bg-accent-light'>
        <div className='container mx-auto px-6'>
           <div className='text-center mb-16'>
               <h2 className='text-gray-800 font-heading font-bold text-4xl md:text-5xl mb-4'>Subscribe to our Newsletter</h2>
               <p className='text-gray-600 max-w-2xl mx-auto mb-6 text-sm'>Get design tips, project inspiration, and exclusive offers directly to your inbox.</p>
               <form action="" className='max-w-xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center'>
                <input type="email" placeholder='your email address' className='grow px-6 py-3 rounded-full bg-gray-900 border-b-gray-600 text-white focus:outline-none placeholder:text-sm placeholder:text-white'/>
                <button className='px-6 py-3 border border-gray-300 rounded-full text-white font-semibold cursor-pointer bg-accent'>Subscribe</button>
               </form>
           </div>
        </div>
    </div>
  )
}

export default Newsletter