import { PageTitle, CardTitle } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Card, FlexBox } from '@/components/ui/container'
import { Table, TableSearch, type TColumn } from '@/components/ui/table'
import { LuCirclePlus } from 'react-icons/lu'
import { useCallback, useState } from 'react'
import { ModalForm } from '@/components/ui/modal'

type TModel = {
    id: string
    name: string
}
export default function UnitPage() {

    const [modalOpen, setModalOpen] = useState<boolean>(false)

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

    const handleSearch = useCallback((param: string) => {
        console.log('search ' + param);
    }, [])

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
                        <TableSearch
                            onSearch={handleSearch}
                            debounceTime={1500}
                        />
                        <Button
                            onClick={() => setModalOpen(true)}
                        >
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
            <ModalForm
                show={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={() => console.log('submitted')}
                onProcess
            />
        </section>
    );
}