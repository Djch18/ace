import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import '../../css/home/HomePage.css'

const HomePage = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <Header />
                <div style={{ flexGrow: 1, padding: 16}}>
                    <div className="content">some main content</div>
                    <div className="content">some main content</div>
                    <div className="content">some main content</div>
                    <div className="content">some main content</div>
                    <div className="content">some main content</div>
                </div>

            </div>
        </div>
    )
}

export default HomePage