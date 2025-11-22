import { PageTitle } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { LuSettings2 } from 'react-icons/lu'

export default function UnitPage() {
    return (
        <section>
            <PageTitle
                title='Satuan'
                subTitle='Halaman ini digunakan untuk mengelola daftar satuan barang yang tersedia'
            />
            <div className='w-full bg-white p-3 rounded-lg border border-gray-300 drop-shadow-md'>
                <div className='flex items-center justify-between'>
                    <p className='text-neutral-700 font-semibold text-md'>Data Satuan</p>
                    <div className='flex items-center gap-1.5'>
                        <div className='px-2.5 py-1.5 text-xs text-neutral-700 flex items-center justify-center gap-1.5 rounded-md border border-gray-400 cursor-pointer hover:bg-gray-900/10'>
                            <LuSettings2 size={14} />
                            <span>filter</span>
                        </div>
                        <Button className='w-fit px-2.5 py-1.5 text-xs border border-green-500'>
                            <span>New</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}