import Footer from '@/components/Footer'
import Contact from '@/components/pages/home/contact'
import Programs from '@/components/pages/program/program'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/programs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Programs />
    <Contact />
    <Footer />
    </>
  )
}
