import React from 'react'

interface IProps {
    text?: string
}

const SidebarLabel: React.FC<IProps> = ({
    text = 'Label'
}) => {
    return (
        <div className='w-full text-xs px-6 text-neutral-700/80 my-1'>{text}</div>
    )
}

export default SidebarLabel