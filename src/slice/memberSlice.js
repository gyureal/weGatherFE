import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/memberApi';

const initialState = { userProfile: {} };

// slice
// reducer - 책임: state와 상호작용
export const memberSlice = createSlice({
    name: 'memberSlice',
    initialState,
    extraReducers: (builder) => {   // extraReducer 's'
        builder.addCase(requestUserByUsername.fulfilled, (state, action) => {
            state.userProfile = action.payload
        });
        builder.addCase(requestUserByUsername.rejected, (state, action) => { state.currentUser = {} });

    }
});

// username으로 회원 조회
export const requestUserByUsername = createAsyncThunk('authSlice/requestSignUp',
    async (param) => {
        return (await api.getUserByUsername(param)).data;
    });