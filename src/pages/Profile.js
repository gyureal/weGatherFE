import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideMenuButtons from '../components/common/SideMenuButtons';
import PageTemplate from '../components/common/Template/pageTemplate/pageTemplate';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useDispatch, useSelector } from 'react-redux';
import { requestProfileByUsername } from '../slice/memberSlice';

function Profile() {

    const { username } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const userProfile = useSelector((state) => {
        return state.memberSlice.userProfile;
    });

    const menuInfo = [
        { id: "profile", label: "프로필" },
        { id: "gather", label: "모임" }
    ]

    return (
        <PageTemplate>
            <Box sx={{ my: 5 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={2}>
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                sx={{ width: 150, height: 150, my: 3 }}
                                src="#"
                            />
                        </Box>
                        <SideMenuButtons currentMenu="profile" menuInfo={menuInfo} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ ml: 5, mt: 4 }}>
                            <Box sx={{ fontSize: 'h2.fontSize', fontWeight: 'regular' }}>
                                {userProfile.username}
                            </Box>
                            <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'light' }}>
                                {userProfile.introductionText ?? "한 줄 소개 입력 전 입니다."}
                            </Box>
                            <Box sx={{ mt: 8 }}>
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
                                            {userProfile.introductionText ?? "가입 완료 하려면 이메일을 확인하세요"}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                {/* 본인에게만 표시 */}
                                <Button variant="outlined">프로필 수정</Button>
                            </Box>
                        </Box>


                    </Grid>
                </Grid>
            </Box>


        </PageTemplate >
    )
}

export default Profile