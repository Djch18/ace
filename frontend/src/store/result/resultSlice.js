import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
    name: 'name',
    initialState: {
        isLoadingResult: true,
        results: [],
        countResults: {},
        gradeCountResults: {},
        errorMessage: undefined,
    },
    reducers: {
        onLoadCountResults: (state, { payload }) => {
            state.isLoading = false;
            state.results = [];
            state.countResults = payload;
            state.gradeCountResults = undefined;
            state.errorMessage = undefined;
        },
        clearMessages: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLoadCountResults, clearMessages } = resultSlice.actions;