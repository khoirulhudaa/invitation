import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InformationState {
    detailTour: any,
    detailIsland: any,
    detailArticle: any,
    user: any,
    detailUser: any
}

const initialState: InformationState = {
    detailTour: null,
    detailIsland: null,
    detailArticle: null,
    user: [],
    detailUser: null
}

const informatSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
        getTour: (state, action: PayloadAction<any>) => {
            state.detailTour = action.payload
        },
        clearTour: (state) => {
            state.detailTour = null
        },
        getIsland: (state, action: PayloadAction<any>) => {
            state.detailIsland = action.payload
        },
        clearIsland: (state) => {
            state.detailIsland = null
        },
        getArticle: (state, action: PayloadAction<any>) => {
            state.detailArticle = action.payload
        },
        clearArticle: (state) => {
            state.detailArticle = null
        },
        getUser: (state, action: PayloadAction<any>) => {
            state.user = {
                ...state.user,
                ...action.payload
            }   
        },
        getDetailUser: (state, action: PayloadAction<any>) => {
            state.detailUser = {
                ...state.detailUser,
                ...action.payload
            }   
        },
        clearUser: (state) => {
            state.user = null,
            state.detailUser = null
        }
    }
})

export const { getTour, clearTour, getIsland, clearIsland, getArticle, clearArticle, getUser, getDetailUser, clearUser } = informatSlice.actions;
export default informatSlice.reducer;

