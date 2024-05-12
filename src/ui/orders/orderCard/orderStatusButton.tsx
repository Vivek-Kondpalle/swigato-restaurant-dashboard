'use client';

import { Button } from '@/components/ui/button'
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const OrderStatusButton = () => {

  const searchParams = useSearchParams()
  const stageName = searchParams?.get('stage');
  const pathName = usePathname();

  console.log(' pathName ', pathName)

  const [btnName, setBtnName] = useState('');

  useEffect(() => {
    if(stageName === 'pending'){
      setBtnName('Accept Order');
    }

    if(stageName === 'preparing'){
      setBtnName('Order Ready');
    }

    if(stageName === 'ready'){
      setBtnName('Order Picked up');
    }
  }, [stageName])

  return (
    <>
      {
        pathName !== '/history' && stageName !== 'pickedup' ?
        <Button className='mt-1 bg-blue-600 text-white rounded-md pt-2 pb-2 text-sm hover:bg-blue-800'>
          {btnName}
        </Button>
        :
        null
      }
    </>
  )
}

export default OrderStatusButton