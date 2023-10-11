import React from 'react'
import { useParams } from 'react-router-dom'
import SideMenuButtons from '../components/common/SideMenuButtons';
import PageTemplate from '../components/common/Template/pageTemplate/pageTemplate';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Profile() {

    const { username } = useParams();

    const menuInfo = [
        { id: "profile", label: "프로필" },
        { id: "study", label: "소개" }
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
                                Username
                            </Box>
                            <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'light' }}>
                                한 줄 소개를 추가해 주세요.
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
                                            example@email.com
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
                                            2023.01.01
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 3 }}>
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