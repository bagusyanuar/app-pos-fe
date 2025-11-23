import { PageTitle } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Table, TableFilter, TableSearch, type TColumn } from '@/components/ui/table'
import { LuCirclePlus } from 'react-icons/lu'

type TModel = {
    id: string
    name: string
}
export default function UnitPage() {

    const columns: TColumn<TModel>[] = [
        {
            key: 'id',
            cell: (row) => row.id,
            text: '#',
            align: 'justify-center',
            width: 'w-20',
        },
        {
            key: 'name',
            cell: (row) => row.name,
            text: 'Name',
            align: 'justify-start',
            sortable: true
        }
    ]

    const data: TModel[] = [
        {
            id: '1',
            name: 'coba'
        },
        {
            id: '2',
            name: 'oke'
        }
    ]

    return (
        <section>
            <PageTitle
                title='Satuan'
                subTitle='Halaman ini digunakan untuk mengelola daftar satuan barang yang tersedia'
            />
            <div className='w-full bg-white p-3 rounded-lg border border-gray-300 drop-shadow-md'>
                <div className='flex items-center justify-between mb-3'>
                    <p className='text-neutral-700 font-semibold text-sm'>Data Satuan</p>
                    <div className='flex items-center gap-1.5'>
                        <TableSearch />
                        <TableFilter />
                        <Button className='px-2.5 py-1.5 text-xs gap-1'>
                            <LuCirclePlus size={14} />
                            <span>Create</span>
                        </Button>
                    </div>
                </div>
                <Table
                    columns={columns}
                    data={data}
                    onSort={(key) => {console.log(key);}}
                    onPageSizeChange={(size) => {console.log(size)}}
                />
            </div>
        </section>
    );
}