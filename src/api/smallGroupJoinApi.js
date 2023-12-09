import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 소모임 가입
export const joinSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.id}/join/requests`);

// 가입 요청 조회
export const getJoinRequests = (param) => axios.get(`${ROOT_URL}/smallGroups/${param.id}/join/requests`);