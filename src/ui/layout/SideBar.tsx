'use client';

import { HandPlatter, SquareMenu, History, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const menuItems = [
    {
        item: 'Orders',
        Icon: HandPlatter,
        link: '/orders'
    },
    {
        item: 'Menu',
        Icon: SquareMenu,
        link: '/menu'
    }, 
    {
        item: 'Order history',
        Icon: History,
        link: '/history'
    },
    {
        item: 'Logout',
        Icon: LogOut,
        link: ''
    }
]

const SideBar = () => {

    const pathName = usePathname();

    console.log(' pathName ', pathName)

    return (
        <div className=" h-full w-64 bg-white fixed left-0 shadow-md" style={{ color: '#878787', top: '74px' }}>
            <div>
                <ul>
                    {
                        menuItems?.map((item: any, index: number) => {
                            const Icon = item?.Icon;
                            return (
                                <Link key={index} href={item?.link === '/orders' ? `${item?.link}?stage=pending` : item?.link} className={`p-5 ${pathName === item?.link ? 'bg-blue-200 text-blue-800' : ''} hover:bg-blue-200 hover:text-blue-800 flex gap-2 cursor-pointer`}>
                                    <Icon /> 
                                    {item?.item}
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default SideBar