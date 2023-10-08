import axios from "axios";

const ROOT_URL = "http://localhost:8080/api";

// 회원가입
export const signUp = (param) => axios.post(`${ROOT_URL}/sign-up`, param);
// 로그인
export const login = (param) => axios.post(`${ROOT_URL}/sign-in`, param);