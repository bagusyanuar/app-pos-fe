import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/ui/toast'

export default function AppLayout() {
    return (
        <main className='w-full h-dvh'>
            <Outlet />
            <ToastContainer />
        </main>
    );
}