import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
    name: 'name',
    initialState: {
        isLoading: true,
        result: {},
        students: [],
        errorMessage: undefined,
    },
    reducers: {
        onLoadStudents: (state, { payload }) => {
            state.isLoading = false;
            state.students = payload;
            state.errorMessage = undefined;
        },
        onLoadStudentResult: (state, { payload }) => {
            state.isLoading = false;
            state.result = payload;
            state.errorMessage = undefined;
        },
        clearMessages: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLoadStudents, onLoadStudentResult, clearMessages } = studentSlice.actions;