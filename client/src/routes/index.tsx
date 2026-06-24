import { createFileRoute } from '@tanstack/react-router'
import Hero1 from '@/components/pages/home/Hero1'
import About from '@/components/pages/home/About'
import Solution from '@/components/pages/home/Solution'
import Future from '@/components/pages/home/Future'
import Contact from '@/components/pages/home/contact'
import Footer from '@/components/Footer'
// import Programs from '@/components/pages/home/Programs'
import Testimonials from '@/components/Testimonial'
import Partners from '@/components/Partners'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Hero1 />
      {/* <Programs /> */}
          <About />
      <Future />
  
      <Solution />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
