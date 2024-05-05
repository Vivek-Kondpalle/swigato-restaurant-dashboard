'use client';

import React, { useState } from 'react'
import MealIcon from '../components/MealIcon'
import { CirclePlus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

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

    return (
        <>
            {
                MenuItemList?.map((item, index) => (
                    <>
                        <div className='flex justify-between p-2 cursor-pointer hover:bg-blue-200 hover:text-blue-800'>
                            <div className='flex items-center gap-2'>
                                <MealIcon foodType={item?.foodType} />
                                {item?.name}
                            </div>
                            <div>₹{item?.price}</div>
                        </div>
                        {
                            index != (MenuItemList?.length - 1) ?
                                <div className='mt-2 mb-2 border-b-2 border-solid border-gray-300'></div>
                                :
                                null
                        }
                    </>
                ))
            }
            {
                showAddItemField ? 
                <div className='flex items-center justify-between mt-4 mb-4 pl-2 pr-2'>
                    <div className='flex gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <MealIcon foodType={position} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="veg">Veg</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="non-veg">Non-Veg</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Input type="text" placeholder="Enter name" />
                        <Input type="text" placeholder="Enter price" />
                    </div>
                    <div className='flex gap-2'>
                        <CirclePlus color='blue' onClick={() => addItem()} />
                        <Trash2 color='red' onClick={() => setShowAddItemField(false)} />
                    </div>
                </div>
                :
                <Button onClick={() => setShowAddItemField(true)} variant={'outline'} className='flex items-center gap-2 text-blue-600 mt-4 mb-4 pl-2 pr-2 hover:text-blue-600'>
                    <Plus width={18} height={18} />
                    Add Item
                </Button>
            }
        </>
    )
}

export default MenuItem