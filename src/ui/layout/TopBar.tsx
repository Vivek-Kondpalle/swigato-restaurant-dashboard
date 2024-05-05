import React from 'react'

const TopBar = () => {
    return (
        <div className="bg-white p-4 flex justify-between items-center w-full fixed top-0 z-10 shadow-md">
            <div>Swigato - restaurant partner</div>
            <input type="text" placeholder="Search orders" className="border p-2" />
        </div>
    );
}

export default TopBar