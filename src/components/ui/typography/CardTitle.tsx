import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    text?: string
    className?: string
}

const CardTitle: React.FC<IProps> = ({
    text = 'Title',
    className = ''
}) => {
    return (
        <p className={twMerge(
            'text-neutral-700 font-semibold text-md mb-0 leading-none',
            className
        )}>
            {text}
        </p>
    )
}

export default CardTitle