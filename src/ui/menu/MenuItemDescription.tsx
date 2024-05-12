'use client';

import React, { useEffect, useState } from 'react'
import MealIcon from '../components/MealIcon';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';

const foodType = [
  {
    name: 'Veg', 
    type: 'veg'
  },
  {
    name: 'Non Veg',
    type: 'non-veg'
  }
];

const MenuItemDescription = () => {

  const searchParams = useSearchParams();

  const [isEdit, setIsEdit] = useState(false);

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [foodTypeSelected, setFoodTypeSelected] = useState('veg');

  useEffect(() => {
    if(searchParams?.get('itemId')){
      setIsEdit(true);
    }
  }, [])

  const changeFoodType = (type: string) => {
    setFoodTypeSelected(type)
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg'>{itemName ? itemName : 'Item Name'}</h1>
        <div className='flex items-center gap-4'>
          <Button className='mt-1 bg-blue-600 text-white rounded-md pt-2 pb-2 text-sm hover:bg-blue-800'>Save</Button>
          <Link href={'/menu'}>
            <X className='cursor-pointer' />
          </Link>
        </div>
      </div>

      <div className='mt-4 mb-4 border-b-2 border-solid border-gray-500'></div>

      <div>
        <div className='mb-4'>
          Item Name:
          <Input type="text" placeholder="Enter name" onChange={(event: any) => setItemName(event?.target?.value)} />
        </div>
        <div className='mb-4'>
          Item Price:
          <Input type="number" placeholder="Enter Price" onChange={(event: any) => setItemPrice(event?.target?.value)} />
        </div>
      </div>
      
      <div>
        <div>Food Type</div>
        <div className='flex gap-4'>
          {
            foodType?.map((type: any, index: number) => (
              <div key={index} className={`flex items-center gap-2 border-2 border-solid w-fit pt-1 pb-1 pr-3 pl-3 cursor-pointer ${foodTypeSelected === 'veg' && foodTypeSelected === type?.type ? 'border-green-500 bg-green-300' : ''} ${foodTypeSelected === 'non-veg' && foodTypeSelected === type?.type ? 'border-red-500 bg-red-300' : ''}`} onClick={() => changeFoodType(type?.type)}>
                <MealIcon foodType={type?.type} />
                <div>
                  {type?.name}
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default MenuItemDescription