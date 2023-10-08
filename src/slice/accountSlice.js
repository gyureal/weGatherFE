import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/api';

const initialState = "";
// slice
export const accountSlice = createSlice({
    name: 'accountSlice',
    initialState,
    extraReducer: (builder) => {

    }
});

// action creators
// 회원가입
export const requestSignUp = createAsyncThunk('account/createAsyncThunk',
    async (param) => {
        return (await api.signUp(param)).data;
    });