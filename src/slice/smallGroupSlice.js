import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsApi from '../api/smallGroupsApi';

const initialState = {

};

export const smallGroupSlice = createSlice({
    name: 'smallGroupSlice',
    initialState,
    extraReducers: (builder) => {

    }
});

// 프로필 수정
export const requestCreateSmallGroup = createAsyncThunk('smallGrou/requestSmallGroupSlice',
    async (param) => {
        return (await smallGroupsApi.createSmallGroup(param)).data;
    });