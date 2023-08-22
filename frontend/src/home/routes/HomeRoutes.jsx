import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Analytics from "../pages/Analytics"
import Students from "../pages/Students"
import RecordPage from "../pages/RecordPage"
import RequestsPage from "../pages/RequestsPage"
import ProfilePage from "../pages/ProfilePage"

const HomeRoutes = () => {
    return (
        <Routes>

            {/*Menu*/}
            <Route path='/home' element={<HomePage />} />

            <Route path='/analytics' element={<Analytics />} />

            <Route path='/students' element={<Students />} />

            {/*Administration*/}

            <Route path='/record' element={<RecordPage />} />

            <Route path='/requests' element={<RequestsPage />} />

            {/*Settings*/}

            <Route path='/profile' element={<ProfilePage />} />


            <Route path='/*' element={<Navigate to='/home' />} />

        </Routes>
    )
}
export default HomeRoutes;