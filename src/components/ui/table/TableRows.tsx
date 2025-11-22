import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { TColumn } from './Table'

interface IProps<T> {
    columns: TColumn<T>[]
    data: T[]
}

const TableRows = <T,>({
    columns,
    data
}: IProps<T>) => {
    return (
        <tbody>
            {
                data.map((data, dataKey) => {
                    return (
                        <tr
                            key={dataKey}
                            className='border-b border-gray-400 last:border-0 text-xs'
                        >
                            {
                                columns.map((column, columnKey) => {
                                    return (
                                        <td
                                            key={columnKey}
                                            className={twMerge(
                                                'text-neutral-700',
                                                column.width ?? ''
                                            )}
                                        >
                                            <div className={twMerge(
                                                'w-full flex items-center px-2.5 py-1.5',
                                                column.align ?? 'justify-start',
                                            )}>
                                                {column.cell ? column.cell(data, dataKey) : <></>}
                                            </div>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableRows