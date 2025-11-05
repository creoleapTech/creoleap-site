// import Hero from '@/components/pages/about/hero'
// import LabsShowcase from '@/components/pages/labs/labs'
import Programs from '@/components/pages/about/programs'
// import Values from '@/components/pages/about/values'
import WhoWeAre from '@/components/pages/about/whoweare'
import { createFileRoute } from '@tanstack/react-router'
import Labs from '@/components/pages/about/labs'
import Contact from '@/components/pages/home/contact'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
    {/* <Hero /> */}
    <WhoWeAre />
    <Programs />
    {/* <Values /> */}
<Labs />
<Contact />
<Footer />
    </>
  )
}
