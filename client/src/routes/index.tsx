import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/pages/home/Hero'
import About from '@/components/pages/home/About'
import Solution from '@/components/pages/home/Solution'
import Future from '@/components/pages/home/Future'
import Contact from '@/components/pages/home/contact'
import Footer from '@/components/Footer'
import Programs from '@/components/pages/home/Programs'
import Testimonials from '@/components/Testimonial'
// import Partners from '@/components/Partners'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <Hero />
<Programs />
  <Future />
<About />
<Solution />
{/* <Partners /> */}
<Testimonials />
    <Contact />
    <Footer/>
    </>
  )
}
