import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 관심사 화이트리스트 조회
export const getInterestWhiteList = (param) => axios.get(`${ROOT_URL}/interests/whitelist`);