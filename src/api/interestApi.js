import axios from "axios";

const ROOT_URL = process.env.REACT_APP_API_URL;
// 관심사 화이트리스트 조회
export const getInterestWhiteList = (param) => axios.get(`${ROOT_URL}/interests/whitelist`);