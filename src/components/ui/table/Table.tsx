import React from 'react'
import { twMerge } from 'tailwind-merge'
import TableHeader from './TableHeader'
import TableRows from './TableRows'
import TablePagination from './TablePagination'

export type TColumn<T> = {
    key?: string
    cell?: (row: T, index: number) => React.ReactNode
    text?: string
    align?: 'justify-start' | 'justify-center' | 'justify-end'
    width?: string
    columnClassName?: string
    cellClassName?: string | ((row: T, index: number) => string)
    sortable?: boolean
}

interface IProps<T> {
    columns: TColumn<T>[]
    data: T[]
    className?: string
    containerClassName?: string
    tableClassName?: string
    headerClassName?: string
    rowClassName?: string
    onSort?: (key?: string) => void
    isProcessing?: boolean
    pageSizeOptions?: number[]
    onPageSizeChange?: (size: number) => void
}

const Table = <T,>({
    columns,
    data,
    onSort,
    onPageSizeChange,
    className = '',
    containerClassName = '',
    tableClassName = '',
    headerClassName = '',
    rowClassName = '',
    isProcessing = false,
    pageSizeOptions = [10, 25, 50],
}: IProps<T>) => {
    return (
        <div className={twMerge(
            'w-full',
            className
        )}>
            <div className={twMerge(
                'w-full overflow-x-auto rounded-md border border-gray-400 mb-1',
                containerClassName
            )}>
                <table className={twMerge(
                    'w-full table-fixed',
                    tableClassName
                )}>
                    <TableHeader
                        columns={columns}
                        className={headerClassName}
                        onSort={onSort}
                        isProcessing={isProcessing}
                    />
                    <TableRows
                        columns={columns}
                        data={data}
                        className={rowClassName}
                        isProcessing={isProcessing}
                    />
                </table>
            </div>
            <TablePagination
                pageSizeOptions={pageSizeOptions}
                onPageSizeChange={onPageSizeChange}
                isProcessing={isProcessing}
            />
        </div>
    )
}

export default Table