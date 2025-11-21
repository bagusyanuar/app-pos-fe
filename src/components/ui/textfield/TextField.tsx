import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    className?: string
    inputClassName?: string
    prefixIcon?: React.ReactNode
    suffixIcon?: React.ReactNode
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
    isError?: boolean
    placeholder?: string
    disabled?: boolean
}

const TextField: React.FC<IProps> = ({
    className = '',
    inputClassName = '',
    prefixIcon,
    suffixIcon,
    type = 'text',
    isError = false,
    placeholder = '',
    disabled = false
}) => {
    return (
        <div className={twMerge(
            'relative group w-full border border-neutral-400 rounded-lg focus-within:border-neutral-700 transition-[border] duration-300 ease-in-out',
            isError && 'border-red-500 focus-within:border-red-500',
            className
        )}>
            {prefixIcon && <div className='h-full w-8 rounded-l-lg absolute top-0 left-0 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out'>
                {prefixIcon}
            </div>}
            <input
                type={type}
                className={twMerge(
                    'w-full py-2.5 px-2 text-sm leading-none rounded-lg text-neutral-500 focus:text-neutral-700 focus:ring-0 focus:outline-none disabled:bg-neutral-200 placeholder:text-neutral-400 transition-colors duration-300 ease-in-out',
                    prefixIcon && 'ps-8',
                    suffixIcon && 'pe-8',
                    inputClassName
                )}
                placeholder={placeholder}
                disabled={disabled}
            />
            {suffixIcon && <div className='h-full w-8 rounded-l-lg absolute top-0 right-0 flex items-center justify-center text-neutral-500 group-focus-within:text-neutral-700 transition-colors duration-300 ease-in-out'>
                {suffixIcon}
            </div>}
        </div>
    )
}

export default TextField