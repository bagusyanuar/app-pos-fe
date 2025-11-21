import { LuMail } from 'react-icons/lu'
import { TextField } from '@/components/ui/textfield'
import { PasswordField } from '@/components/ui/passwordfield'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from '@/components/ui/toast'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            toast.success("successfully login", 5000, () => {
                console.log('closed');
                navigate("/dashboard")
            })
        }, 2000);
    }

    return (
        <section className="w-full h-full flex items-center justify-center bg-green-500">
            <div className="bg-white w-80 shadow-2xl h-3/5 rounded-lg py-6 px-10 flex flex-col justify-between items-center">
                <div className='w-full flex flex-col items-center justify-center'>
                    <img src='/static/images/brand-logo.png' className='h-14 w-fit' />
                    <span className='text-md font-bold text-green-700 mb-1'>Point of sales</span>
                    <p className='text-md text-neutral-700 font-bold leading-none'>Log in to your account</p>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <TextField disabled={isLoading} placeholder='Email' type='number' prefixIcon={<LuMail size={14} />} />
                    <PasswordField disabled={isLoading} placeholder='Password' />
                    <Button onProcess={isLoading} onClick={handleSubmit}>
                        <span>Log in</span>
                    </Button>
                </div>

                <span className='text-xs text-neutral-500'>&copy; copyright 2025</span>
            </div>
        </section>
    );
}