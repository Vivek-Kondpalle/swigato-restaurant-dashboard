import { Check, Printer } from 'lucide-react';
import React from 'react'
import MealIcon from '../components/MealIcon';
import Image from 'next/image';

const OrderCard = (props: any) => {
    const order = props?.order;

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-between space-x-4 mb-8">
            {/* Left Column */}
            <div className="flex flex-col space-y-2 w-1/3 border-r-2 border-gray-800 dotted pr-4 gap-1">
                <div>
                    <h2 className="text-lg font-semibold">{order.restaurant}</h2>
                    <p className='text-sm'>{order.address}</p>
                </div>
                <div className='border-b-2 border-gray-800 dotted'></div>

                <div>
                    <h2 className='text-lg font-semibold'>ID: {order?.id}</h2>
                </div>
                <div className='border-b-2 border-gray-800 dotted'></div>

                <div className="flex flex-col gap-2 pb-2">
                    <div className="flex justify-between">
                        <div className='flex gap-2 items-center'>
                            <div
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    backgroundColor: 'green',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Check width={12} height={12} color='white' />
                            </div>
                            <div className='text-sm'>
                                Placed
                            </div>
                        </div>
                        <div className='text-sm'>2:00 pm</div>
                    </div>
                    <div className="flex justify-between">
                        <div className='flex gap-2 items-center'>
                            <div
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    backgroundColor: 'green',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Check width={12} height={12} color='white' />
                            </div>
                            <div className='text-sm'>
                                Accepted
                            </div>
                        </div>
                        <div className='text-sm'>2:02 pm</div>
                    </div>
                </div>
            </div>

            {/* Center Column */}
            <div className="flex flex-col justify-start w-1/3 border-r-2 border-gray-800 dotted flex-grow pr-4 gap-2">
                <div>
                    {order.items.map((item: any, index: any) => (
                        <div key={index} className="w-full">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <MealIcon foodType='veg' />
                                    <div className="flex">
                                        {item?.quantity}
                                        &nbsp;X&nbsp;
                                        <div>{item.name}</div>
                                    </div>
                                </div>
                                <div>₹{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='border-b-2 border-gray-800 dotted'></div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <div>
                            Total bill
                        </div>
                        <div className="border border-green-500 border-solid pt-0 pb-0 pl-1 pr-1 text-xs flex items-center text-green-500">
                            PAID
                        </div>
                        <div>
                            ₹850
                        </div>
                    </div>
                    <div className='flex items-center gap-1 text-blue-500'>
                        <Printer width={16} height={16} />
                        <div>
                            Print bill
                        </div>
                    </div>
                </div>
                <button className='mt-1 bg-blue-600 text-white rounded-md pt-2 pb-2 text-sm'>Accept Order</button>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-1/3 gap-4">
                <div className='flex flex-col gap-2'>
                    <div>Delivery partner details</div>
                    <div className='flex items-center gap-2'>
                        <Image width={60} height={60} src={'/deliveryExe.jpg'} alt='delivery-executive-image' className='rounded-full w-14 h-14' />
                        <div>
                            Raghav is on the way
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            Arriving in 
                        </div>
                        <div>
                            8 mins 
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-teal-500 h-2 rounded-full"
                            style={{ width: `10%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderCard