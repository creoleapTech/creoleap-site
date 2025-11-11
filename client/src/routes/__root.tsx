import {  createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/Header'
import { Toaster } from 'sonner'


export const Route = createRootRoute({
  component: () => (
    <> <Toaster 
        position="top-right"
        richColors
        expand={false}
        closeButton
      />
          <Header />
        <Outlet />
    </>
  ),
})
