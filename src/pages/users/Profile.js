import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Grid, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch, useSelector } from 'react-redux';
import { requestProfileByUsername } from '../../slice/memberSlice';
import UsersBase from './UsersBase';
import InterestTag from '../../components/common/InterestTag';

const Profile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => {
        return state.memberSlice.userProfile;
    });
    useEffect(() => {
        const getUser = async () => {
            try {
                await dispatch(requestProfileByUsername(username)).unwrap();
            } catch {
                alert("조회에 실패했습니다.");
                navigate("/");
            }
        }
        getUser();
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const isMe = currentUser.username === username;

    const onEditClick = (event) => {
        navigate("/settings/profile");
    }

    const changeJoinedAtText = () => {
        if (!userProfile.joinedAt) {
            if (isMe) {
                return "가입 완료 하려면 이메일을 확인하세요.";
            }
            return "이메일 인증이 되지 않은 계정입니다.";
        }
        return userProfile.joinedAt;
    }

    if (!userProfile) {
        return <div>Loading</div>
    }

    return (
        <UsersBase currentMenu={"profile"}>
            <Box sx={{ fontSize: 'h2.fontSize', fontWeight: 'regular' }}>
                {userProfile.username}
            </Box>
            <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'light' }}>
                {userProfile.introductionText ?? "한 줄 소개 입력 전 입니다."}
            </Box>
            <Stack sx={{ mt: 2 }} direction="row" spacing={2}>
                {
                    userProfile && userProfile.interests ?
                        userProfile.interests.map((interest, index) => (
                            <InterestTag interest={interest} key={index} />
                        )) : <div></div>
                }
            </Stack>
            <Box sx={{ mt: 4 }}>
                <Grid container>
                    <Grid item xs={1}>
                        <Box sx={{ fontSize: 'h6.fontSize', fontWeight: 'regular' }}>
                            <EmailIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ fontSize: 'h6.fontSize', fontWeight: 'regular' }}>
                            {userProfile.email}
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}> </Box>
                <Grid container>
                    <Grid item xs={1}>
                        <Box sx={{ fontSize: 'h6.fontSize', fontWeight: 'regular' }}>
                            <CalendarMonthIcon />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ fontSize: 'h6.fontSize', fontWeight: 'regular' }}>
                            {/* {(userProfile.joinedAt && isMe) ? "가입 완료 하려면 이메일을 확인하세요" : ""} */}
                            {changeJoinedAtText()}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {
                // 본인에게만 표시
                isMe &&
                <Box sx={{ mt: 3 }}>
                    <Button variant="outlined" onClick={onEditClick}>프로필 수정</Button>
                </Box>
            }
        </UsersBase>
    )
}

export default Profile