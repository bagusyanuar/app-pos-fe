import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface IProps {
    className?: string
    totalRows?: number
    pageSizeOptions?: number[]
    pageSize?: number
    onPageSizeChange?: (size: number) => void
    currentPage?: number
    isProcessing?: boolean
}

const TablePagination: React.FC<IProps> = ({
    className = '',
    totalRows = 0,
    pageSizeOptions = [10, 25, 50],
    pageSize = 10,
    onPageSizeChange,
    currentPage = 1,
    isProcessing = false
}) => {
    const [pages, setPages] = useState<number[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)

    useEffect(() => {
        const _PAGES = Math.ceil(totalRows / pageSize)
        const _MAX_PAGES = 5
        const halfRange = Math.floor(_MAX_PAGES / 2)
        let start = Math.max(1, currentPage - halfRange)
        let end = Math.min(_PAGES, currentPage + halfRange)
        if ((end - start + 1) < _MAX_PAGES) {
            if (start === 1) {
                end = Math.min(_PAGES, (start + _MAX_PAGES - 1))
            } else {
                start = Math.max(1, (end - _MAX_PAGES + 1))
            }
        }
        const arrayPages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        setTotalPages(_PAGES)
        setPages(arrayPages)
        return () => { }
    }, [totalRows, pageSize, currentPage])


    return (
        <div className={twMerge(
            'w-full flex items-center justify-between text-xs text-neutral-700',
            className
        )}>
            <div className='flex items-center gap-1.5'>
                <span>Total Rows :</span>
                <span>{totalRows}</span>
            </div>
            <div className='flex items-center gap-1.5'>
                <div className='flex items-center gap-1.5'>
                    <span>Rows Per Page :</span>
                    <select
                        className='text-xs focus:outline-none text-neutral-700 border border-gray-400 rounded py-0.5 disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50'
                        value={pageSize}
                        onChange={(e) => { onPageSizeChange?.(parseInt(e.currentTarget.value)) }}
                        disabled={isProcessing}
                    >
                        {
                            pageSizeOptions.map((v, k) => {
                                return (
                                    <option key={k} value={v}>{v}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex items-center gap-1 text-neutral-700 text-xs'>
                    <button
                        className={twMerge(
                            'w-6 h-6 rounded-sm border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50 disabled:hover:bg-white transition-colors duration-300 ease-in-out'
                        )}
                        disabled={
                            isProcessing || currentPage <= 1 || totalRows === 0
                        }
                    >
                        <LuChevronLeft size={12} />
                    </button>
                    {
                        pages.map((page, key) => {
                            return (
                                <button
                                    key={key}
                                    className={twMerge(
                                        'w-6 h-6 rounded-sm border border-gray-400 flex items-center justify-center cursor-pointer disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50 disabled:hover:bg-white transition-colors duration-300 ease-in-out',
                                        currentPage === page ?
                                            'bg-green-500 border-green-500 text-white'
                                            : 'bg-white border-gray-400 text-neutral-700 hover:bg-green-500 hover:text-white hover:border-green-500'
                                    )}
                                >
                                    <span>{page}</span>
                                </button>
                            )
                        })
                    }

                    <button
                        className={twMerge(
                            'w-6 h-6 rounded-sm border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 disabled:cursor-default disabled:border-gray-200 disabled:text-neutral-700/50 disabled:hover:bg-white transition-colors duration-300 ease-in-out'
                        )}
                        disabled={
                            isProcessing || currentPage === totalPages || totalRows === 0
                        }
                    >
                        <LuChevronRight size={12} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TablePagination