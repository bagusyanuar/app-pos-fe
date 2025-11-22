import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/ui/toast'
import { AppSidebar } from '@/components/layout/sidebar'
import { AppNavbar } from '@/components/layout/navbar'

export default function AppLayout() {
    return (
        <main className='w-full h-dvh bg-neutral-100'>
            <AppSidebar />
            <AppNavbar title='Overview' />
            <section className='ps-64 pe-3 pt-[calc(--spacing(14)+(--spacing(6)))]'>
                <Outlet />
            </section>
            <ToastContainer />
        </main>
    )
}