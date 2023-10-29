import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'


const getStatus = (smallGroup) => {
    if (smallGroup.closed) {
        return "종료";
    }
    if (!smallGroup.published) {
        return "준비중";
    }
    return smallGroup.recruiting ? "모집중" : "모집중 아님";
}

const getJoinOrLeaveButton = (smallGroup) => {
    if (!smallGroup || !smallGroup.joinable) {
        return (
            <Button variant="contained" disabled>
                가입 불가
            </Button>
        )
    }
    if (smallGroup.joinable) {
        return (
            <Button variant="contained">
                소모임 가입
            </Button>
        )
    }

    if (smallGroup.managerOrMember) {
        return (
            <Button variant='contained' color='red'>
                소모임 탈퇴
            </Button>
        )
    }
}

function SmallGroupInfo({ smallGroup }) {
    console.log(smallGroup);
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
                        <Button variant="outlined">
                            {/* 준비중, 모집중, 모집중 아님, 종료 */}
                            {getStatus(smallGroup)}
                        </Button>
                        <Box marginX={1}></Box>
                        {/* 소모임 가입, 소모임 탈퇴, 가입 불가 */}
                        {getJoinOrLeaveButton(smallGroup)}
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
        </Box>
    )
}

export default SmallGroupInfo