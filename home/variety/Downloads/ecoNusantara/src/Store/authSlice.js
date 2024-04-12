import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: {},
    token: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authSignIn: (state, action) => {
            state.auth = {
                ...state.auth,
                ...action.payload
            }   
            },
        authSignOut: (state) => {
            state.auth = initialState.auth,
            state.token = initialState.token
        },
        saveToken: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { authSignIn, authSignOut, saveToken } = authSlice.actions;
export default authSlice.reducer;

