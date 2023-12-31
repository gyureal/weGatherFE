import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as memberApi from '../api/memberApi';

const initialState = {
    userProfile: {},
    myInterests: "",
    joinSmallGroups: [],
    createSmallGroups: []
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
            state.myInterests = commaSeperated;
        });

        builder.addCase(requestGetJoinSmallGroup.fulfilled, (state, action) => {
            state.joinSmallGroups = action.payload;
        });

        builder.addCase(requestGetCreateSmallGroup.fulfilled, (state, action) => {
            state.createSmallGroups = action.payload;
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

// 프로필 사진 수정
export const requestEditProfileImage = createAsyncThunk('memberSlice/requestEditProfileImage',
    async (param) => {
        return (await memberApi.editProfileImage(param)).data;
    });


// 비밀번호 변경
export const requestChangePassword = createAsyncThunk('memberSlice/requestChangePassword',
    async (param, { rejectWithValue }) => {
        try {
            return (await memberApi.changePassword(param)).data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
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

// 회원이 가입한 소모임 목록 조회
export const requestGetJoinSmallGroup = createAsyncThunk('memberSlice/requestGetJoinSmallGroup',
    async () => {
        return (await memberApi.getJoinSmallGroup()).data;
    });

// 회원이 생성한 소모임 목록 조회
export const requestGetCreateSmallGroup = createAsyncThunk('memberSlice/requestGetCreateSmallGroup',
    async () => {
        return (await memberApi.getCreateSmallGroup()).data;
    });