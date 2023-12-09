import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { awsPrefix, defaultAvatar } from '../../static/globalVariables';
import { useDispatch } from 'react-redux';
import { requestApproveJoinRequest, requestApproveJoinRequests, requestRejectJoinRequest } from '../../slice/smallGroupJoinSlice';

const JoinRequestItem = ({ joinRequest, smallGroupId }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onCardClick = () => {
        navigate(`/profile/${joinRequest.username}`);
    }

    const onApproveClick = async () => {
        try {
            const param = {
                id: smallGroupId,
                requestId: joinRequest.smallGroupJoinId
            }
            await dispatch(requestApproveJoinRequest(param)).unwrap();
            navigate(0);
        } catch {
            alert("소모임 가입 승인에 실패했습니다.");
        }
    }

    const onRejectClick = async () => {
        try {
            const param = {
                id: smallGroupId,
                requestId: joinRequest.smallGroupJoinId
            }
            await dispatch(requestRejectJoinRequest(param)).unwrap();
            navigate(0);
        } catch {
            alert("소모임 가입 거부에 실패했습니다.");
        }
    }

    return (
        <Card sx={{ boxShadow: 0, mt: 2 }}>
            <Box sx={{ display: 'flex' }}>
                <CardActionArea onClick={onCardClick}>
                    <Box sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 64, height: 64, mr: 3 }}
                            image={joinRequest.profileImage && joinRequest.profileImage != "" ? awsPrefix + joinRequest.profileImage : defaultAvatar}
                        />
                        <Box display="flex" flexDirection="column">
                            <Box display="flex" flexDirection="row">
                                <Box marginRight={2}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {joinRequest.username}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box marginTop={0.7}>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {joinRequest.introduction || ""}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardActionArea>
                <Box sx={{ flexGrow: 1 }} ></Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                    <Button variant='outlined' color='primary' onClick={onApproveClick}>승인</Button>
                    <Box mr={1}></Box>
                    <Button variant='outlined' color='error' onClick={onRejectClick}>거절</Button>
                </Box>
            </Box>
        </Card>
    )
}

export default JoinRequestItem