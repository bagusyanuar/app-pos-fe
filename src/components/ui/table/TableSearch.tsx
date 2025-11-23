import React from 'react'
import { twMerge } from 'tailwind-merge'
import { LuSearch } from 'react-icons/lu'

interface IProps {
    className?: string
    disabled?: boolean
}
const TableSearch: React.FC<IProps> = ({
    className = '',
    disabled = false
}) => {
    return (
        <div className={twMerge(
            'relative group w-40 border border-gray-400 rounded-md focus-within:border-gray-700 transition-[border] duration-300 ease-in-out',
            className
        )}>
            <div className='h-full w-8 rounded-l-md absolute top-0 left-0 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out'>
                <LuSearch size={14} />
            </div>
            <input
                type="text"
                className={twMerge(
                    'w-full py-1.5 ps-8.5 pe-2.5 text-xs leading-none rounded-md text-neutral-500 focus:text-neutral-700 focus:ring-0 focus:outline-none disabled:bg-neutral-200 placeholder:text-neutral-400 transition-colors duration-300 ease-in-out',
                )}
                placeholder="search..."
                disabled={disabled}
            />
        </div>
    )
}

export default TableSearch