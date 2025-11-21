import React from 'react'
import { LuBell, LuMessageCircleQuestion } from 'react-icons/lu'

interface IProps {
    title?: string
}

const AppNavbar: React.FC<IProps> = ({
    title = 'Title'
}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-3 ps-64 pe-3'>
            <nav className='w-full h-14 bg-white rounded-xl shadow-xl flex items-center justify-between px-3'>
                <div className='text-neutral-700 text-md font-semibold'>{title}</div>
                <div className='flex items-center gap-1.5'>
                    <div className='w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer hover:text-neutral-700 flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-in-out'>
                        <LuMessageCircleQuestion size={16} />
                    </div>
                    <div className='w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer hover:text-neutral-700 flex items-center justify-center text-neutral-500 transition-colors duration-300 ease-in-out'>
                        <LuBell size={16} />
                    </div>
                    <div className='w-8 h-8 rounded-full bg-green-500 drop-shadow-2xl cursor-pointer'>
                        <img src='https://i.pravatar.cc/300' className='w-8 h-8 rounded-full object-cover object-center' alt='avatar' />
                    </div>
                    {/* <div className='flex flex-col cursor-pointer'>
                        <span className='text-xs text-neutral-700 leading-none'>developer@gmail.com</span>
                        <span className='text-xs text-neutral-500'>Developer</span>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default AppNavbar