import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/authApi';

const initialState = { currentUser: {} };
// slice
// reducer - 책임: state와 상호작용
export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    extraReducer: (builder) => {
        // builder.addCase(requestLogin.fulfilled, (state, action) => { state.currentUser = action.payload });
        // builder.addCase(requestLogin.rejected, (state, action) => { state.currentUser = {} });
    }
});

// action creators
// 회원가입
export const requestSignUp = createAsyncThunk('auth/createAsyncThunk',
    async (param) => {
        return (await api.signUp(param)).data;
    });

// 로그인
export const requestLogin = createAsyncThunk('auth/createAsyncThunk',
    async (param) => {
        return (await api.login(param)).data;
    });
