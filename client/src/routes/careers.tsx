import Footer from '@/components/Footer'
import Hero from '@/components/pages/careers/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/careers')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
    <Hero />
    <Footer />
    </>
  )
}
