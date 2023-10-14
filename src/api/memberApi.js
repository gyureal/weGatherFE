import axios from "axios";

const ROOT_URL = "http://localhost:8080";

// 네이밍 규칙: 행위를 동사로 적습니다

// username 으로 회원조회 
export const getProfileByUsername = (username) => axios.get(`${ROOT_URL}/members/profile/${username}`);