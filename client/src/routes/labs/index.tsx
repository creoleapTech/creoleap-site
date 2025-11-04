import Footer from '@/components/Footer'
import LabsShowcase from '@/components/pages/labs/labs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/labs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
  <LabsShowcase/>  
  <Footer />
    </>
  )
}
