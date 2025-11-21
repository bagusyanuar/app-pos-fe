import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/ui/toast'
import { AppSidebar } from '@/components/layout/sidebar'

export default function AppLayout() {
    return (
        <main className='w-full h-dvh bg-neutral-100'>
            <AppSidebar />
            <section className='ps-64'>
                <Outlet />
            </section>
            <ToastContainer />
        </main>
    )
}