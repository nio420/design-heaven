import React from 'react'
import PageHero from '../Components/PageHero'
import ServiceCard from '../Components/ServiceCard'
import HowItWork from '../Components/HowItWork'
import SectionReveal from '../Components/SectionReveal'

const Services = () => {
  return (
    <div>
      <SectionReveal delay={0.03}> 
      <PageHero 
       title={"Our"}
       highlight={"Services"}
       description={"Comprehensive home modeling and design solutions tailored to your unique needs and vision."}
      /> </SectionReveal>
       
       <SectionReveal delay={0.3}><ServiceCard/> </SectionReveal>
      <SectionReveal delay={0.3}><HowItWork/> </SectionReveal>
      
    </div>
  )
}

export default Services