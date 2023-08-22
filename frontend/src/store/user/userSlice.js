import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'name',
    initialState: {
        isLoading: true,
        users: [],
        errorMessage: undefined,
        successMessage: undefined,

    },
    reducers: {
        onLoadUsers: (state, { payload }) => {
            state.isLoading = false;
            state.users = payload;
            state.errorMessage = undefined;
            state.successMessage = undefined;
        },

        onSuccessUser: (state, { payload }) => {
            state.isLoading = false;
            state.errorMessage = undefined;
            state.successMessage = payload;
        },

        onLogoutUser: (state, { payload }) => {
            state.isLoading = true;
            state.errorMessage = payload;
            state.successMessage = undefined
        },

        clearMessages: (state) => {
            state.errorMessage = undefined;
            state.successMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLoadUsers, onSuccessUser, onLogoutUser, clearMessages, } = userSlice.actions;