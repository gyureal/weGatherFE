import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsJoinApi from '../api/smallGroupJoinApi';

const initialState = {
    smallGroup: {},
    smallGroupMembers: [],
    smallGroupInterests: [],
    smallGroupSearchResult: {
        "content": [],
        "totalPages": 0
    }
};

export const smallGroupJoinSlice = createSlice({
    name: 'smallGroupJoinSlice',
    initialState,
    extraReducers: (builder) => {
        // builder.addCase(requestGetSmallGroup.fulfilled, (state, action) => {
        //     state.smallGroup = action.payload
        // });
    }
});

// 소모임 가입
export const requestJoinSmallGroup = createAsyncThunk('smallGroup/requestJoinSmallGroup',
    async (param) => {
        return (await smallGroupsJoinApi.joinSmallGroup(param)).data;
    });