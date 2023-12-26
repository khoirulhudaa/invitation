// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import authSlice from './authSlice';
import paymentSlice from './paymentSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    authSlice,
    paymentSlice
});

export default rootReducer;
