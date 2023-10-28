import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsApi from '../api/smallGroupsApi';

const initialState = {
    smallGroup: {}
};

export const smallGroupSlice = createSlice({
    name: 'smallGroupSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(requestGetSmallGroup.fulfilled, (state, action) => {
            state.smallGroup = action.payload
        });
    }
});

// 소모임 생성
export const requestCreateSmallGroup = createAsyncThunk('smallGrou/requestSmallGroupSlice',
    async (param) => {
        return (await smallGroupsApi.createSmallGroup(param)).data;
    });

// 소모임 조회
export const requestGetSmallGroup = createAsyncThunk('smallGrou/requestGetSmallGroup',
    async (param) => {
        return (await smallGroupsApi.getSmallGroup(param)).data;
    });