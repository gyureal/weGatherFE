import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as memberApi from '../api/memberApi';

const initialState = {
    userProfile: undefined,
    myInterests: ""
};

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

        // 회원 관심사 조회
        builder.addCase(requestGetMyInterests.fulfilled, (state, action) => {
            const commaSeperated = action.payload.join(",");
            console.log("commaSeperated ", commaSeperated);
            state.myInterests = commaSeperated;
        });
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

// 회원 관심사 추가
export const requestAddInterest = createAsyncThunk('memberSlice/requestAddInterest',
    async (param) => {
        return (await memberApi.addInterest(param)).data;
    });

// 회원 관심사 삭제
export const requestRemoveInterest = createAsyncThunk('memberSlice/requestRemoveInterest',
    async (param) => {
        return (await memberApi.removeInterest(param)).data;
    });

// 회원 관심사 조회
export const requestGetMyInterests = createAsyncThunk('memberSlice/requestGetMyInterests',
    async () => {
        return (await memberApi.getMyInterests()).data;
    });