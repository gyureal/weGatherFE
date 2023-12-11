import React from 'react'
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate'
import { Avatar, Box, Grid } from '@mui/material'
import SideMenuButtons from '../../components/common/SideMenuButtons'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { awsPrefix, defaultAvatar } from '../../static/globalVariables'
import { requestProfileByUsername } from '../../slice/memberSlice'

const UsersBase = ({ children, currentMenu }) => {

    const { username } = useParams();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const isMe = currentUser.username === username;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            await dispatch(requestProfileByUsername(username)).unwrap();
        } catch {
            alert("조회에 실패했습니다.");
            navigate("/");
        }
    }

    const userProfile = useSelector((state) => {
        if (!state.memberSlice.userProfile) {
            getUser();
            return;
        }
        return state.memberSlice.userProfile;
    });


    const menuInfo = [
        { id: "profile", label: "프로필" },
        { id: "smallGroups", label: "소모임" }
    ]

    if (!userProfile) {
        return <div>Loading</div>
    }

    const changeProfileImage = () => {
        if (userProfile && userProfile.profileImage) {
            return awsPrefix + userProfile.profileImage;
        }
        return defaultAvatar;
    }

    return (
        <PageTemplate>
            <Box sx={{ my: 5 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={2}>
                        <Box display="flex" justifyContent="center">
                            <Avatar
                                sx={{ width: 150, height: 150, my: 3 }}
                                src={changeProfileImage()}
                            />
                        </Box>
                        <SideMenuButtons currentMenu={currentMenu} menuInfo={menuInfo} navigatePrefix={`/users/${username}`} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ ml: 5, mt: 4 }}>
                            {children}
                        </Box>
                    </Grid>
                </Grid>

            </Box>

        </PageTemplate>
    )
}

export default UsersBase