import axios from "axios";

const ROOT_URL = process.env.REACT_APP_API_URL;

// 네이밍 규칙: 행위를 동사로 적습니다

// username 으로 회원조회 
export const getProfileByUsername = (username) => axios.get(`${ROOT_URL}/members/profile/${username}`);

// profile 수정
export const editProfile = (param) => axios.post(`${ROOT_URL}/members/profile/`, param);

// 프로필 사진 수정
export const editProfileImage = (param) => axios.post(`${ROOT_URL}/members/profile/image/v2`, param);

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

// 회원이 가입한 소모임 목록 조회
export const getJoinSmallGroup = (param) => axios.get(`${ROOT_URL}/members/profile/smallGroups/join`);

// 회원이 생성한 소모임 목록 조회
export const getCreateSmallGroup = (param) => axios.get(`${ROOT_URL}/members/profile/smallGroups/create`);