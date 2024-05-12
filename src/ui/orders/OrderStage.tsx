'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const OrderStage = () => {

    const searchParams = useSearchParams();
    const stageName = searchParams?.get('stage');

    console.log(' searchParams ', searchParams)

    const stages = [
        {stageName: 'Pending', quantity: '2', value: 'pending'},
        {stageName: 'Preparing', quantity: '2', value: 'preparing'},
        {stageName: 'Ready', quantity: '2', value: 'ready'},
        {stageName: 'Picked-up', quantity: '2', value: 'pickedup'},
    ]


  return (
    <div className='flex mb-4 gap-8'>

        {
            stages?.map((stage: any, index: number) => (
                <Link key={index} href={`?stage=${stage?.value}`} className='flex items-center pt-2 pb-2 pl-4 pr-4 gap-6 rounded-lg bg-white cursor-pointer'>
                    <div className={`${stage?.value === stageName ? 'text-red-500' : 'text-gray-400'}`}>{stage?.stageName}</div>
                    <div className={`pr-1 pl-1 border-2 border-solid ${stage?.value === stageName ? 'border-red-500 text-red-500' : 'border-gray-400 text-gray-400'}`}>{stage?.quantity}</div>
                </Link>
            ))
        }

    </div>
  )
}

export default OrderStage