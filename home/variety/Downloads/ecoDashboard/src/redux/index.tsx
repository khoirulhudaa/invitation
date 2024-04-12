// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import informationSlice from "./informationSlice";

const rootReducer = combineReducers({
    Auth: authSlice,
    Information: informationSlice,
});

export default rootReducer;
