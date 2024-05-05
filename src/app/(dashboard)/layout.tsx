import SideBar from '@/ui/layout/SideBar'
import TopBar from '@/ui/layout/TopBar'
import React from 'react'

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="app-container flex flex-col h-screen">
         <TopBar />
         <div className="flex flex-grow" style={{ paddingTop: '74px' }}>
            <SideBar />
            {children}
         </div>
    </div>
  )
}

export default DashboardLayout