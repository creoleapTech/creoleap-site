import Hero from '@/components/pages/our_works/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ourworks')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Hero />
    </>
  )
}
