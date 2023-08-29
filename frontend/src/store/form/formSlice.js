import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'name',
    initialState: {
        status: 'checking',
        errorMessage: undefined,
    },
    reducers: {
        onCheckingForm: (state) => {
            state.status = 'checking';
            state.errorMessage = undefined;
        },

        onSended: (state) => {
            state.status = 'sended';
            state.errorMessage = undefined;
        },

        onNotSended: (state, { payload }) => {
            state.status = 'not-sended';
            state.errorMessage = payload;
        },

        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onCheckingForm, onSended, onNotSended, clearErrorMessage } = formSlice.actions;