import React, { useState, useRef, useEffect } from 'react'
import { LuSettings2 } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components/ui/button'

interface IProps {
    text?: string
    className?: string
    icon?: React.ReactNode
    dropdownClassName?: string
    children?: React.ReactNode
    size?: 'small' | 'normal'
}

const TableFilter: React.FC<IProps> = ({
    children,
    icon,
    className = '',
    text = 'Filter',
    dropdownClassName = '',
    size = 'normal'
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div
            ref={dropdownRef}
            className='w-fit relative'>
            <Button
                className={className}
                onClick={() => setIsOpen(!isOpen)}
                variant='outline-neutral'
                size={size}
            >
                {icon || <LuSettings2 size={14} />}
                <span>{text}</span>
            </Button>
            <div
                className={twMerge(
                    'absolute top-10 right-0 bg-white rounded-md p-3 border border-gray-400 drop-shadow-md',
                    dropdownClassName,
                    isOpen ? 'animate-dropdown' : 'animate-dropdown-close'
                )}>
                {children}
            </div>
        </div>
    )
}

export default TableFilter