import React from 'react'
import PageHero from '../Components/PageHero'
import ContactInfo from '../Components/ContactInfo'
import ContactForm from '../Components/ContactForm'
import SectionReveal from '../Components/SectionReveal'

const Contact = () => {
  return (
    <div>
      <SectionReveal delay={0.03}> 
      <PageHero
      title={"Get In"}
      highlight={"Touch"}
      description={"Ready to start your home modeling project? Contact us today."}
      /> </SectionReveal>

      {/* contact form */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <SectionReveal delay={0.3}> 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
              <ContactInfo/>
              <ContactForm/>
          </div> 
          </SectionReveal>
          </div>
       </div>
    </div>
  )
}

export default Contact