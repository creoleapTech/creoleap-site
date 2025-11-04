import Footer from '@/components/Footer'
import ContactPage from '@/components/pages/contact/hero'
import Contact from '@/components/pages/home/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
    <ContactPage />
    <Contact />
    <Footer />
    </>
  )
}
