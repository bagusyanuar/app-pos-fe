import React from 'react'
import { LuSettings2 } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

interface IProps {
    text?: string
    className?: string
    icon?: React.ReactNode
}

const TableFilter: React.FC<IProps> = ({
    icon,
    className = '',
    text = 'Filter',
}) => {
    return (
        <button className={twMerge(
            'px-2.5 py-1.5 text-xs text-neutral-700 flex items-center justify-center gap-1.5 rounded-md border border-gray-400 cursor-pointer hover:bg-gray-900/10 transition-colors duration-300 ease-in-out',
            className
        )}>
            {icon || <LuSettings2 size={14} />}
            <span>{text}</span>
        </button>
    )
}

export default TableFilter