import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 소모임 생성
export const createSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups`, param);

// 소모임 조회
export const getSmallGroup = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}`);

// 소모임 회원 조회
export const getSmallGroupMembers = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}/managers-and-members`);