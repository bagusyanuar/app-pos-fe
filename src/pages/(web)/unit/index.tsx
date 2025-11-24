import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Card, FlexBox } from '@/components/ui/container'
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
            <Card>
                <FlexBox className='justify-between mb-3'>
                    <CardTitle text='Data Satuan' />
                    <div className='flex items-center gap-1.5'>
                        <TableSearch />
                        <TableFilter>
                            <div className='w-46'></div>
                        </TableFilter>
                        <Button>
                            <LuCirclePlus size={14} />
                            <span>Create</span>
                        </Button>
                    </div>
                </FlexBox>
                <Table
                    columns={columns}
                    data={data}
                    onSort={(key) => { console.log(key); }}
                    onPageSizeChange={(size) => { console.log(size) }}
                />
            </Card>
        </section>
    );
}