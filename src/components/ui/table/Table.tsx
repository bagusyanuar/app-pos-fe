import React from 'react'
import { twMerge } from 'tailwind-merge'
import TableHeader from './TableHeader'
import TableRows from './TableRows'

export type TColumn<T> = {
    cell?: (row: T, index: number) => React.ReactNode
    text?: string
    align?: 'justify-start' | 'justify-center' | 'justify-end'
    width?: string
}

interface IProps<T> {
    columns: TColumn<T>[]
    data: T[]
    className?: string
    containerClassName?: string
}

const Table = <T,>({
    columns,
    data,
    className = '',
    containerClassName = '',
}: IProps<T>) => {
    return (
        <div className={twMerge(
            'w-full overflow-x-auto rounded-md border border-gray-400',
            containerClassName
        )}>
            <table className={twMerge(
                'w-full table-fixed',
                className
            )}>
                <TableHeader columns={columns} />
                <TableRows columns={columns} data={data} />
            </table>
        </div>
    )
}

export default Table