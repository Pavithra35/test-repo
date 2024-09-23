import React from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <div style={{ width: "10%", backgroundColor:"#ffffff" }}>
                <SideBar />
            </div>
            <div style={{ width: "90%", background: "#f5f3f3" }}>
                <div>
                    <Navbar />
                </div>
                <div style={{ padding: ".5em"}}>
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default AppLayout