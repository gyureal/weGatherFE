import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/authApi';

const initialState = { currentUser: {} };

// slice
// reducer - 책임: state와 상호작용
export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    extraReducers: (builder) => {   // extraReducer 's'
        // 현재 사용자 가져오기
        builder.addCase(requestCurrentUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        });
        builder.addCase(requestCurrentUser.rejected, (state, action) => { state.currentUser = undefined });

        // 로그아웃
        builder.addCase(requestLogout.fulfilled, (state, action) => {
            state.currentUser = undefined;
        });
    }
});

// action creators
// 네이밍 규칙: request로 시작하는 동사로 정합니다.

// 회원가입
export const requestSignUp = createAsyncThunk('authSlice/requestSignUp',
    async (param) => {
        return (await api.signUp(param)).data;
    });

// 로그인
export const requestLogin = createAsyncThunk('authSlice/requestLogin',
    async (param) => {
        return (await api.login(param)).data;
    });

// 현재 사용자 가져오기
export const requestCurrentUser = createAsyncThunk('authSlice/requestCurrentUser',
    async (param) => {
        return (await api.getCurrentUser(param)).data;
    });

// 로그아웃
export const requestLogout = createAsyncThunk('authSlice/requestLogout',
    async (param) => {
        return (await api.logout(param)).data;
    });

// 인증 메일 재발송
export const requestResendConfirmEmail = createAsyncThunk('authSlice/requestResendConfirmEmail',
    async (param) => {
        return (await api.resendConfirmEmail(param)).data;
    });

// 메일 확인
export const requestConfirmEmail = createAsyncThunk('authSlice/requestConfirmEmail',
    async (param) => {
        return (await api.confirmEmail(param)).data;
    }); 
