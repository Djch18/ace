import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import HomeRoutes from '../home/routes/HomeRoutes'
import AuthRoutes from "../auth/router/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { Spinner } from "react-bootstrap";

const AppRouter = () => {

    // const status = 'not-authenticated';

    const { status, CheckAuthToken } = useAuthStore();

    useEffect(() => {
        CheckAuthToken();
    }, [])


    if (status === 'checking') {
        return (
            <React.Fragment>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh"
                    }}
                >
                    <Spinner animation="border" />
                </div>
            </React.Fragment>
        )
    }

    return (
        <Routes>
            {
                (status === 'authenticated') ? (
                    <>
                        <Route path='*' element={<HomeRoutes />} />
                    </>
                ) : (
                    <>
                        <Route path='*' element={<AuthRoutes />} />
                    </>
                )
            }
        </Routes>)
}

export default AppRouter