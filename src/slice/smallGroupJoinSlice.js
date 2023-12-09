import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsJoinApi from '../api/smallGroupJoinApi';

const initialState = {
    error: {},
    joinRequests: []
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

        builder.addCase(requestGetJoinRequests.fulfilled, (state, action) => {
            state.joinRequests = action.payload
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

// 가입 요청 조회
export const requestGetJoinRequests = createAsyncThunk('smallGroup/requestGetJoinRequests',
    async (param, { rejectWithValue }) => {
        try {
            return (await smallGroupsJoinApi.getJoinRequests(param)).data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// 가입 요청 승인
export const requestApproveJoinRequest = createAsyncThunk('smallGroup/requestApproveJoinRequest',
    async (param, { rejectWithValue }) => {
        try {
            return (await smallGroupsJoinApi.approveJoinRequests(param)).data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

// 가입 요청 거부
export const requestRejectJoinRequest = createAsyncThunk('smallGroup/requestRejectJoinRequest',
    async (param, { rejectWithValue }) => {
        try {
            return (await smallGroupsJoinApi.rejectJoinRequests(param)).data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });
