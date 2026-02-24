import React from 'react'
import PageHero from '../Components/PageHero'
import Story from '../Components/Story'
import Values from '../Components/Values'
import Timeline from '../Components/Timeline'
import SectionReveal from '../Components/SectionReveal'

const About = () => {
  return (
    <div>
      <SectionReveal delay={0.03}> 
      <PageHero
      title={"About"}
      highlight={"DesignHeaven"}
      description={"For nearly two decades, we've been transforming visions into breathtaking realities, creating homes that tell stories and reflect personalities."}
      /> </SectionReveal>

      <SectionReveal delay={0.03}><Story/> </SectionReveal>
      <SectionReveal delay={0.03}><Values/> </SectionReveal>
      <SectionReveal delay={0.03}><Timeline/> </SectionReveal>
    </div>
  )
}

export default About