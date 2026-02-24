import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import SectionReveal from '../Components/SectionReveal'

const Home = () => {
  return (
    <div>
      <SectionReveal delay={0.05}><Hero/> </SectionReveal>
      <SectionReveal direction='left' delay={0.03}><Feature/> </SectionReveal>
      <SectionReveal amount={0.15} delay={0.03}><Testimonial/> </SectionReveal>
      <SectionReveal delay={0.03}><Newsletter/> </SectionReveal>
    </div>
  )
}

export default Home