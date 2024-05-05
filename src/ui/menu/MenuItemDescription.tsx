import React from 'react'
import MealIcon from '../components/MealIcon';
import { Input } from '@/components/ui/input';

const MenuItemDescription = () => {
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

  return (
    <>
      <h1 className='text-lg'>Paneer Masala</h1>
      <div className='mt-4 mb-4 border-b-2 border-solid border-gray-500'></div>

      <div>
        <div>Food Type</div>
        <div className='flex gap-4'>
          {
            foodType?.map((type) => (
              // <div className='flex flex-col'>
                <div className={`flex items-center gap-2 border-2 border-solid ${type.type === 'veg' ? 'border-green-500 bg-green-300' : 'border-red-500 bg-red-300'} w-fit pt-1 pb-1 pr-3 pl-3`}>
                  <MealIcon foodType={type?.type} />
                  <div>
                    {type?.name}
                  </div>
                </div>
              // </div>
            ))
          }
        </div>
      </div>

      <div>
        <div>
          Pricing:
          <Input type="number" placeholder="Enter Price" />
        </div>
      </div>
    </>
  )
}

export default MenuItemDescription