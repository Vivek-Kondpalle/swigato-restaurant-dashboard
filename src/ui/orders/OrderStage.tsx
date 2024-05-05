import React from 'react'

const OrderStage = () => {

    const stages = [
        {stageName: 'Pending', quantity: '2'},
        {stageName: 'Preparing', quantity: '2'},
        {stageName: 'Ready', quantity: '2'},
        {stageName: 'Picked-up', quantity: '2'},
    ]


  return (
    <div className='flex mb-4 gap-8'>

        {
            stages?.map((stage: any, index: number) => (
                <div className='flex items-center pt-2 pb-2 pl-4 pr-4 gap-6 rounded-lg bg-white'>
                    <div className={`${index === 1 ? 'text-red-500' : 'text-gray-400'}`}>{stage?.stageName}</div>
                    <div className={`pr-1 pl-1 border-2 border-solid ${index === 1 ? 'border-red-500 text-red-500' : 'border-gray-400 text-gray-400'}`}>{stage?.quantity}</div>
                </div>
            ))
        }

    </div>
  )
}

export default OrderStage