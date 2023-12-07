import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsJoinApi from '../api/smallGroupJoinApi';

const initialState = {
    error: {}
};

export const smallGroupJoinSlice = createSlice({
    name: 'smallGroupJoinSlice',
    initialState,
    extraReducers: (builder) => {
        // builder.addCase(requestGetSmallGroup.fulfilled, (state, action) => {
        //     state.smallGroup = action.payload
        // });
        builder.addCase(requestJoinSmallGroup.rejected, (state, action) => {
            alert(action.payload.description);
        })
    }
});

// 소모임 가입
export const requestJoinSmallGroup = createAsyncThunk('smallGroup/requestJoinSmallGroup',
    async (param, { rejectWithValue }) => {
        try {
            return (await smallGroupsJoinApi.joinSmallGroup(param)).data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });