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
export const requestProfileByUsername = createAsyncThunk('memberSlice/requestProfileByUsername',
    async (param) => {
        return (await memberApi.getProfileByUsername(param)).data;
    });

// 프로필 수정
export const requestEditProfile = createAsyncThunk('memberSlice/requestEditProfile',
    async (param) => {
        return (await memberApi.editProfile(param)).data;
    });

// 비밀번호 변경
export const requestChangePassword = createAsyncThunk('memberSlice/requestChangePassword',
    async (param) => {
        return (await memberApi.changePassword(param)).data;
    });

// 알람 설정 변경
export const requestChangeAlarmSettings = createAsyncThunk('memberSlice/requestChangeAlarmSettings',
    async (param) => {
        return (await memberApi.changeAlaramSettings(param)).data;
    });
