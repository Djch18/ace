import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from "./auth/authSlice";
import { userSlice } from './user/userSlice';
import { formSlice } from './form/formSlice';
import { resultSlice } from './result/resultSlice';
import { studentSlice } from './student/studentSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        form: formSlice.reducer,
        student: studentSlice.reducer,
        result: resultSlice.reducer,
    },
})