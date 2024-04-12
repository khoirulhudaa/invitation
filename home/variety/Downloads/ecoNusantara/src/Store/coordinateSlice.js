import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coordinate: [],
    dinas_id: '',
    title_id: '',
}

const coordinateSlide = createSlice({
    name: 'coordinate',
    initialState,   
    reducers: {
        getCoordinate: (state, action) => {
            state.coordinate.push(action.payload);
        },
        getDinasId: (state, action) => {
            state.dinas_id = action.payload;
        },
        getTitleId: (state, action) => {
            state.title_id = action.payload;
        },
        removeCoordinateById: (state, action) => {
            state.coordinate.splice(action.payload,  1);
        },
        clearCoordinate: (state) => {
            state.coordinate = []
        },
    }
})

export const { getCoordinate, removeCoordinateById, getDinasId, getTitleId, clearCoordinate } = coordinateSlide.actions;
export default coordinateSlide.reducer;

