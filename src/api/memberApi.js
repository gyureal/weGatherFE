import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 네이밍 규칙: 행위를 동사로 적습니다

// username 으로 회원조회 
export const getProfileByUsername = (username) => axios.get(`${ROOT_URL}/members/profile/${username}`);

// profile 수정
export const editProfile = (param) => axios.post(`${ROOT_URL}/members/profile/`, param);

// 비밀번호 수정
export const changePassword = (param) => axios.post(`${ROOT_URL}/members/profile/password`, param);

// 알람 설정 변경
export const changeAlaramSettings = (param) => axios.post(`${ROOT_URL}/members/profile/alarmSettings`, param);

// 관심사 추가
export const addInterest = (param) => axios.post(`${ROOT_URL}/members/profile/interests?interestName=${param}`);

// 관심사 삭제
export const removeInterest = (param) => axios.delete(`${ROOT_URL}/members/profile/interests?interestName=${param}`);

// 회원의 관심사 조회
export const getMyInterests = (param) => axios.get(`${ROOT_URL}/members/profile/interests`);