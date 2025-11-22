import React from 'react'
import { SidebarItem, SidebarLabel, SidebarTree } from '@/components/ui/sidebar'
import {
  LuLayoutDashboard,
  LuFolderArchive,
  LuShoppingBag,
  LuUser,
  LuShield,
  LuChartPie,
  LuChartLine,
  LuBox
} from 'react-icons/lu'
import { GrGroup } from 'react-icons/gr'

const AppSidebar = () => {
  return (
    <aside className='w-64 h-dvh fixed z-50 p-3'>
      <div className='w-full h-full flex flex-col bg-white rounded-lg py-3 border border-gray-300 drop-shadow-md'>
        <div className='w-full h-16 px-6 flex items-center gap-1.5'>
          <img src='/static/images/brand-logo.png' className='h-8 w-fit' />
          <span className='text-neutral-700 font-bold'>POS</span>
        </div>
        <div className='flex-1 w-full flex flex-col gap-1 overflow-y-auto'>
          <SidebarItem to='/dashboard' text='Dashboard' icon={<LuLayoutDashboard size={16} />} />
          <SidebarLabel text='Menu' />
          <SidebarTree
            text='Master'
            icon={<LuFolderArchive size={16} />}
            items={[
              {
                text: 'Satuan',
                to: '/unit'
              },
              {
                text: 'Bahan Baku',
                to: '#'
              },
              {
                text: 'Kategori',
                to: '#'
              },
              {
                text: 'Produk',
                to: '#'
              },
            ]}
          />
          <SidebarItem to='/master' text='Supplier' icon={<GrGroup size={16} />} />
          <SidebarItem to='/master' text='Inventory' icon={<LuBox size={16} />} />
          <SidebarItem to='/master' text='Purchase' icon={<LuFolderArchive size={16} />} />
          <SidebarItem to='/master' text='Order' icon={<LuShoppingBag size={16} />} />
          <SidebarLabel text='Report & Analytics' />
          <SidebarTree
            text='Report'
            icon={<LuChartPie size={16} />}
            items={[
              {
                text: 'Purchase',
                to: '#'
              },
              {
                text: 'Order',
                to: '#'
              },
              {
                text: 'Inventory',
                to: '#'
              },
            ]}
          />
          <SidebarTree
            text='Analytics'
            icon={<LuChartLine size={16} />}
            items={[
              {
                text: 'Product',
                to: '#'
              },
              {
                text: 'Order',
                to: '#'
              },
            ]}
          />
          <SidebarLabel text='Account' />
          <SidebarItem to='/master' text='Pengguna' icon={<LuUser size={16} />} />
          <SidebarItem to='/master' text='Hak Akses' icon={<LuShield size={16} />} />
        </div>
        <div className='w-full px-3 mt-3'>
          <div className='w-full h-24 border border-gray-300 rounded-md'></div>
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar