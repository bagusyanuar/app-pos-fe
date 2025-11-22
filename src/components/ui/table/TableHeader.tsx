import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { TColumn } from './Table'

interface IProps<T> {
    columns: TColumn<T>[]
}

const TableHeader = <T, >({
    columns
}: IProps<T>) => {
    return (
        <thead>
            <tr className='rounded-md bg-gray-100 border-b border-gray-400 text-xs'>
                {
                    columns?.map((header, key) => {
                        return (
                            <th
                                key={key}
                                className={twMerge(
                                    'font-normal',
                                    header.width ?? ''
                                )}
                            >
                                <div
                                    className={twMerge(
                                        'w-full flex items-center px-2.5 py-1.5',
                                        header.align ?? 'justify-start',
                                    )}
                                >
                                    {header.text}
                                </div>
                            </th>
                        )
                    })
                }

            </tr>
        </thead>
    )
}

export default TableHeader