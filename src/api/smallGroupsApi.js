import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 소모임 생성
export const createSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups`, param);