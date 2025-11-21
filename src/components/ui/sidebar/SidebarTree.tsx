import React, { useState, useRef } from 'react'
import { LuCircle, LuChevronRight } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'
import { Link } from 'react-router'

type TItem = {
    to?: string
    text?: string
}

interface IProps {
    text?: string
    icon?: React.ReactNode
    isActive?: boolean
    items?: TItem[]
}

const SidebarTree: React.FC<IProps> = ({
    icon,
    text = 'Menu',
    isActive = false,
    items = []
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const collapsibleRef = useRef<HTMLDivElement>(null)

    const handleOpen = () => {
        setOpen(prev => !prev)

    }
    return (
        <div className='w-full relative'>
            <div className='w-full px-3'>
                <div className={
                    twMerge(`w-full flex items-center justify-between text-sm py-2 px-3 relative cursor-pointer rounded-md
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
                    onClick={handleOpen}
                >
                    <div className={twMerge(
                        'w-1 h-3/5 rounded-r-md absolute bg-green-500 top-1/2 -left-3 -translate-x-px -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out',
                        isActive ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-0'
                    )}></div>
                    <div className='flex items-center gap-2'>
                        {icon ?? <LuCircle size={16} />}
                        <span>{text}</span>
                    </div>
                    <LuChevronRight
                        size={16}
                        className={twMerge(
                            'transition-transform duration-300 ease-in-out',
                            open && 'rotate-90'
                        )}
                    />
                </div>
            </div>
            <div
                ref={collapsibleRef}
                style={{
                    height: open ? collapsibleRef?.current?.scrollHeight : 0
                }}
                className={twMerge(
                    'w-full px-3 opacity-0 transition-all duration-300 ease-in-out',
                    open && `opacity-100`
                )}>
                <div className='w-full ps-5'>
                    <div className='w-full ps-1.5 flex flex-col gap-0.5 border-l border-neutral-300'>
                        {items.map((v, k) => {
                            return <Link
                                key={k}
                                to={v.to || '#'}
                                className='px-2 py-1 w-full rounded-sm text-sm text-neutral-700 hover:bg-green-500/20 hover:text-green-500 transition-colors duration-300 ease-in-out'
                            >
                                {v.text}
                            </Link>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SidebarTree