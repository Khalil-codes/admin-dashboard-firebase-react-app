import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'isAuthorized',
    initialState: false,
    reducers: {
        loginUser: () => {
            return true;
        },
        logoutUser: () => {
            return false;
        },
    },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
