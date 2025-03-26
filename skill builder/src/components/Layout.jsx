// import React from 'react'

import Navbar from "./Navbar"
import SideBar from "./SideBar"

function Layout() {
    return (
        <div className=''>
            <Navbar />
            <div className=" h-[724px] bg-slate-600 w-64">
            <SideBar/>
            </div>

        </div>
    )
}

export default Layout
