import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsApi from '../api/smallGroupsApi';

const initialState = {
    smallGroup: {},
    smallGroupMembers: [],
    smallGroupInterests: [],
    smallGroupSearchResult: {
        "content": [],
        "totalPages": 0
    }
};

export const smallGroupSlice = createSlice({
    name: 'smallGroupSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(requestGetSmallGroup.fulfilled, (state, action) => {
            state.smallGroup = action.payload
        });

        builder.addCase(requestGetSmallGroupMembers.fulfilled, (state, action) => {
            state.smallGroupMembers = action.payload;
        });

        builder.addCase(requestGetSmallGroupInterests.fulfilled, (state, action) => {
            state.smallGroupInterests = action.payload;
        });

        builder.addCase(requestToggleUseBanner.fulfilled, (state) => {
            state.smallGroup.useBanner = !state.smallGroup.useBanner;
        });

        builder.addCase(requestSearchSmallGroup.fulfilled, (state, action) => {
            state.smallGroupSearchResult = action.payload;
        })
    }
});

// 소모임 생성
export const requestCreateSmallGroup = createAsyncThunk('smallGroup/requestSmallGroupSlice',
    async (param, { rejectWithValue }) => {
        try {
            return (await smallGroupsApi.createSmallGroup(param)).data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    });

// 소모임 조회
export const requestGetSmallGroup = createAsyncThunk('smallGroup/requestGetSmallGroup',
    async (param) => {
        return (await smallGroupsApi.getSmallGroup(param)).data;
    });

// 소모임 회원 조회
export const requestGetSmallGroupMembers = createAsyncThunk('smallGroup/requestGetSmallGroupMembers',
    async (param) => {
        return (await smallGroupsApi.getSmallGroupMembers(param)).data;
    });

// 소모임 배너 업데이트
export const requestUpdateSmallGroupBanner = createAsyncThunk('smallGroup/requestUpdateSmallGroupBanner',
    async (param) => {
        return (await smallGroupsApi.updateSmallGroupBanner(param)).data;
    });


// 소모임 관심사 추가
export const requestAddInterestToSmallGroup = createAsyncThunk('smallGroup/requestAddInterestToSmallGroup',
    async (param) => {
        return (await smallGroupsApi.addInterestToSmallGroup(param)).data;
    });

// 소모임 관심사 추가
export const requestRemoveInterestToSmallGroup = createAsyncThunk('smallGroup/requestRemoveInterestToSmallGroup',
    async (param) => {
        return (await smallGroupsApi.removeInterestToSmallGroup(param)).data;
    });

// 소모임 관심사 조회
export const requestGetSmallGroupInterests = createAsyncThunk('smallGroup/requestGetSmallGroupInterests',
    async (param) => {
        return (await smallGroupsApi.getSmallGroupInterests(param)).data;
    });

// 소모임 소개 수정
export const requestUpdateSmallGroupDescription = createAsyncThunk('smallGroup/requestUpdateSmallGroupDescription',
    async (param) => {
        return (await smallGroupsApi.updateSmallGroupDescription(param)).data;
    });

// 소모임 배너 사용 여부 변경
export const requestToggleUseBanner = createAsyncThunk('smallGroup/requestToggleUseBanner',
    async (param) => {
        return (await smallGroupsApi.toggleUseBanner(param)).data;
    });

// 소모임 검색
export const requestSearchSmallGroup = createAsyncThunk('smallGroup/requestSearchSmallGroup',
    async (param) => {
        return (await smallGroupsApi.searchSmallGroup(param)).data;
    });