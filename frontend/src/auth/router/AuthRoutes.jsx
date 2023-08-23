import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage";
import Form from "../../form/pages/Form";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='auth/login' element={<LoginPage />} />

            <Route path='auth/register' element={<RegisterPage />} />

            <Route path='form' element={<Form/>} />

            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
export default AuthRoutes;