import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as memberApi from '../api/memberApi';

const initialState = { userProfile: undefined };

// slice
// reducer - 책임: state와 상호작용
export const memberSlice = createSlice({
    name: 'memberSlice',
    initialState,
    extraReducers: (builder) => {   // extraReducer 's'
        builder.addCase(requestProfileByUsername.fulfilled, (state, action) => {
            state.userProfile = action.payload
        });
        builder.addCase(requestProfileByUsername.rejected, (state, action) => { state.currentUser = undefined });
    }
});

// username으로 회원 조회
export const requestProfileByUsername = createAsyncThunk('authSlice/requestProfileByUsername',
    async (param) => {
        return (await memberApi.getProfileByUsername(param)).data;
    });

export const requestEditProfile = createAsyncThunk('authSlice/requestEditProfile',
    async (param) => {
        return (await memberApi.editProfile(param)).data;
    });