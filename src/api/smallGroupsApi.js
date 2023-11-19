import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 소모임 생성
export const createSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups`, param);

// 소모임 조회
export const getSmallGroup = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}`);

// 소모임 회원 조회
export const getSmallGroupMembers = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}/managers-and-members`);

// 소모임 배너 사진 업데이트
export const updateSmallGroupBanner = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/banner`, param.image);

// 관심사 추가
export const addInterestToSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/interest?interestName=${param.interestName}`);

// 관심사 삭제
export const removeInterestToSmallGroup = (param) => axios.delete(`${ROOT_URL}/smallGroups/${param.path}/interest?interestName=${param.interestName}`);

// 관심사 조회
export const getSmallGroupInterests = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}/interests`);