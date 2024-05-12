'use client';

import React, { useState } from 'react'
import MealIcon from '../components/MealIcon'
import { CirclePlus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const MenuItemList = [
    {
        name: 'Paneer Masala',
        foodType: 'veg',
        price: '100'
    },
    {
        name: 'Chicken Masala',
        foodType: 'non-veg',
        price: '200'
    },
    {
        name: 'Paneer Masala 2',
        foodType: 'veg',
        price: '150'
    },
    {
        name: 'Paneer Masala 3',
        foodType: 'veg',
        price: '200'
    }
]

const MenuItem = () => {
    const [showAddItemField, setShowAddItemField] = useState(false)
    const [position, setPosition] = React.useState("disabled")


    const addItem = () => {
        setShowAddItemField(false)
    }

    // onClick={() => setShowAddItemField(true)}

    return (
        <>
            {
                MenuItemList?.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className={`flex justify-between pl-2 pr-2 pt-4 pb-4 cursor-pointer hover:bg-blue-200 hover:text-blue-800 ${index != (MenuItemList?.length - 1) ? 'border-b-2 border-solid border-gray-300' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <MealIcon foodType={item?.foodType} />
                                {item?.name}
                            </div>
                            <div>₹{item?.price}</div>
                        </div>
                    </React.Fragment>
                ))
            }
            {
                showAddItemField ? 
                null
                :
                <Link href={'?addItem=true'}>
                    <Button variant={'outline'} className='flex items-center gap-2 text-blue-600 mt-4 mb-4 pl-2 pr-2 hover:text-blue-600'>
                        <Plus width={18} height={18} />
                        Add Item
                    </Button>
                </Link>
            }
        </>
    )
}

export default MenuItem