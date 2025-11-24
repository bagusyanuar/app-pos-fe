import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/ui/toast'
import { AppSidebar } from '@/components/layout/sidebar'
import { AppNavbar } from '@/components/layout/navbar'
import { AppContent } from '@/components/layout/content'

export default function AppLayout() {
    return (
        <main className='w-full h-dvh bg-neutral-100'>
            <AppSidebar />
            <AppNavbar title='Overview' />
            <AppContent>
                <Outlet />
            </AppContent>
            <ToastContainer />
        </main>
    )
}