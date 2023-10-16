import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as interestApi from '../api/interestApi';

const initialState = { whitelist: [] };

export const interestSlice = createSlice({
    name: 'interestSlice',
    initialState,
    extraReducers: (builder) => {   // extraReducer 's'
        builder.addCase(requestGetInterestWhiteList.fulfilled, (state, action) => {
            state.whitelist = action.payload
        });
        builder.addCase(requestGetInterestWhiteList.rejected, (state, action) => { state.whitelist = [] });
    }
});

// 관심사 화이트리스트 조회
export const requestGetInterestWhiteList = createAsyncThunk('memberSlice/requestGetInterestWhiteList',
    async (param) => {
        return (await interestApi.getInterestWhiteList(param)).data;
    });
