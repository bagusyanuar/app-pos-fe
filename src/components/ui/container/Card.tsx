import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children?: React.ReactNode
    className?: string
}

const Card: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'w-full bg-white p-6 rounded-lg border border-gray-400 drop-shadow-md',
            className
        )}>
            {children}
        </div>
    )
}

export default Card