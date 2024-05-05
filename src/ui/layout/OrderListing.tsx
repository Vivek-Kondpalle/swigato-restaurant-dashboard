import React from 'react'

const OrderListing = ({ children }: any) => {
  return (
    <div className="content-area flex-grow p-4 pr-8 pl-8 bg-gray-100 gap-8 ml-64">
        {children}
    </div>
  )
}

export default OrderListing