import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'isAuthorized',
    initialState: false,
    reducers: {
        loginUser: (state) => {
            return true;
        },
        logoutUser: (state) => {
            return false;
        },
    },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
