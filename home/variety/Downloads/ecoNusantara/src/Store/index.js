// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import coordinateSlice from "./coordinateSlice";
import informationSlice from "./informationSlice";

const rootReducer = combineReducers({
    Auth: authSlice,
    Coordinate: coordinateSlice,
    Information: informationSlice,
});

export default rootReducer;
