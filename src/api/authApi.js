import axios from "axios";

const ROOT_URL = "http://localhost:8080/api";

// 네이밍 규칙: 행위를 동사로 적습니다

// 회원가입
export const signUp = (param) => axios.post(`${ROOT_URL}/sign-up`, param);
// 로그인
export const login = (param) => axios.post(`${ROOT_URL}/sign-in`, param);
// 현재 사용자 정보
export const getCurrentUser = (param) => axios.get(`${ROOT_URL}/current-user`, param);
// 로그아웃
export const logout = (param) => axios.post(`${ROOT_URL}/logout`, param);
// 인증 메일 재발송
export const resendConfirmEmail = (param) => axios.post(`${ROOT_URL}/resend-confirm-email`, param);