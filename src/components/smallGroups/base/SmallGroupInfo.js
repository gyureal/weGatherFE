import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import InterestTag from '../../common/InterestTag';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmDialog from '../../common/dialog/ConfirmDialog';
import { requestJoinSmallGroup } from '../../../slice/smallGroupJoinSlice';
import { useNavigate } from 'react-router-dom';


const getStatusButton = (smallGroup) => {
    if (smallGroup.status === "CLOSED") return <Button variant='outlined'>종료</Button>
    if (smallGroup.status === "PUBLISHED") return <Button variant='outlined'>모집중 아님</Button>
    if (smallGroup.status === "RECRUITING") return <Button variant='contained'>모집중</Button>
    return <Button variant='outlined'>준비중</Button>
}



const SmallGroupInfo = ({ smallGroup }) => {
    const smallGroupInterests = useSelector((state) => state.smallGroupSlice.smallGroupInterests);
    const smallGroupId = useSelector((state) => state.smallGroupSlice.smallGroup.id);
    const [joinConfirmOpen, setJoinCofirmOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const renderJoinButton = (smallGroup) => {
        if (!smallGroup || !smallGroup.joinable) {
            return (
                <Button variant="contained" disabled>
                    가입 불가
                </Button>
            )
        }
        if (smallGroup.joinable && !smallGroup.joinRequested && !smallGroup.managerOrMember) {
            return (
                <Button variant="contained" onClick={onJoinButtonClick}>
                    소모임 가입
                </Button>
            )
        }

        if (smallGroup.joinable && smallGroup.joinRequested && !smallGroup.managerOrMember) {
            return (
                <Button variant='outlined' color='success'>
                    가입 요청중
                </Button>
            )
        }

        if (smallGroup.managerOrMember) {
            return (
                <Button variant='contained' color='success'>
                    가입 완료
                </Button>
            )
        }
    }

    const onJoinButtonClick = () => {
        setJoinCofirmOpen(true);
    }

    const onJoinAgreeClicked = async () => {
        try {
            const param = {
                id: smallGroupId
            }
            setJoinCofirmOpen(false);
            await dispatch(requestJoinSmallGroup(param)).unwrap();
        } catch (e) {
            if (e.errorCode === '4003') {
                alert("이미 가입 요청한 회원은 가입요청할 수 없습니다.");
            } else {
                alert("가입 요청에 실패했습니다.");
            }
        }
    }

    return (
        <Box marginTop={2}>
            <Grid container justifyContent="center">
                <Grid item xs={6}>
                    <Typography variant='h4' fontWeight="fontWeightMedium">
                        {smallGroup.name}
                    </Typography>
                </Grid>
                <Grid item xs={4} justifyContent="end" alignItems="end">
                    <Box display="flex" justifyContent="flex-end">
                        {
                            getStatusButton(smallGroup)
                        }
                        <Box marginX={1}></Box>
                        {/* 소모임 가입, 소모임 탈퇴, 가입 불가, 가입 승인중 */}
                        {renderJoinButton(smallGroup)}
                    </Box>

                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Typography variant='h6' fontWeight="fontWeightLight">
                        {smallGroup.shortDescription}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Box sx={{ mt: 2 }}>
                        <Stack direction="row" spacing={2}>
                            {
                                smallGroupInterests.map((interest, index) => (
                                    <InterestTag interest={interest} key={index} />
                                ))
                            }
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <ConfirmDialog open={joinConfirmOpen} setOpen={setJoinCofirmOpen}
                title="가입요청" description="해당 소모임에 가입 요청을 하시겠습니까?" onAgreeClick={onJoinAgreeClicked} />
        </Box>
    )
}

export default SmallGroupInfo