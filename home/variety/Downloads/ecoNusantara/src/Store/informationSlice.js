import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    information: {},
    detail: {},
    detailArticle: {},
}

const informationSlide = createSlice({
    name: 'information',
    initialState,   
    reducers: {
        getInformation: (state, action) => {
            state.information = action.payload;
        },
        clearInformation: (state) => {
            state.information = {}
        },
        getDetail: (state, action) => {
            state.detail = action.payload;
        },
        clearDetail: (state) => {
            state.detail = {}
        },
        getDetailArticle: (state, action) => {
            state.detailArticle = action.payload;
        },
        clearDetailArticle: (state) => {
            state.detailArticle = {}
        },
    }
})

export const { getInformation, clearInformation, getDetailArticle, clearDetailArticle, getDetail, clearDetail } = informationSlide.actions;
export default informationSlide.reducer;

