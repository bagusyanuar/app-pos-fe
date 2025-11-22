import React from 'react'
import { LuCircle } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router'

interface IProps {
    to?: string
    text?: string
    icon?: React.ReactNode
    isActive?: boolean
}

const SidebarItem: React.FC<IProps> = ({
    icon,
    to = '#',
    text = 'Sidebar Item',
    isActive = false
}) => {
    return (
        <div className='w-full relative'>
            <div className='w-full px-3'>
                <Link to={to} className={twMerge(
                    'group sidebar-menu',
                    isActive ? '' : ''
                )}>
                    {icon ?? <LuCircle size={16} />}
                    <span>{text}</span>
                </Link>
            </div>
        </div>
    )
}

export default SidebarItem

// with before element

{/* <div className='w-full relative'>
            <div className='w-full px-3'>
                <Link to={to} className={
                    twMerge(`w-full flex items-center gap-2 text-sm py-2 px-3 relative cursor-pointer rounded-md
                    text-neutral-700 bg-white
                    hover:text-green-500
                    font-semibold
                    before:content-['']
                    before:absolute
                    before:inset-0
                    before:bg-green-500/10
                    before:origin-left
                    before:scale-x-0
                    before:transition-transform
                    before:duration-300
                    before:rounded-md
                    group`,
                        isActive ? 'before:scale-x-100 text-green-500' : 'hover:before:scale-x-100'
                    )
                }
                >
                    <div className={twMerge(
                        'w-1 h-3/5 rounded-r-md absolute bg-green-500 top-1/2 -left-3 -translate-x-px -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out',
                        isActive ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-0'
                    )}></div>
                    {icon ?? <LuCircle size={16} />}
                    <span>{text}</span>
                </Link>
            </div>
        </div> */}