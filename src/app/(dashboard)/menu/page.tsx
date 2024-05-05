import MenuItemDescription from '@/ui/menu/MenuItemDescription'
import MenuList from '@/ui/menu/MenuList'
import React from 'react'

const Menu = () => {
  return (
    <div className="content-area flex-grow bg-gray-100 gap-8 ml-64">
        <div className='flex h-full'>
            <div className='flex-1 p-4 border-r border-solid border-gray-500 bg-white'>
                <MenuList />
            </div>
            <div className='flex-1 p-4 border-r border-solid border-gray-500 bg-white'>
                <MenuItemDescription />
            </div>
        </div>
    </div>
  )
}

export default Menu