import React from 'react'
import { SidebarItem, SidebarLabel, SidebarTree } from '@/components/ui/sidebar'
import { LuLayoutDashboard, LuFolderArchive } from 'react-icons/lu'

const AppSidebar = () => {
  return (
    <aside className='w-64 h-dvh fixed z-50 p-3'>
      <div className='w-full h-full flex flex-col bg-white rounded-xl shadow-xl'>
        <div className='w-full h-16 px-6 flex items-center gap-1.5'>
          <img src='/static/images/brand-logo.png' className='h-8 w-fit' />
          <span className='text-neutral-700 font-bold'>POS</span>
        </div>
        <div className='flex-1 w-full flex flex-col gap-1'>
          <SidebarItem to='/dashboard' text='Dashboard' icon={<LuLayoutDashboard size={16} />} />
          <SidebarLabel text='Menu' />
          <SidebarTree
            text='Master'
            icon={<LuFolderArchive size={16} />}
            items={[
              {
                text: 'Satuan',
                to: '#'
              },
              {
                text: 'Bahan Baku',
                to: '#'
              }
            ]}
          />
          <SidebarItem to='/master' text='Purchase' icon={<LuFolderArchive size={16} />} isActive />
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar