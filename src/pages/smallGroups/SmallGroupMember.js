import React from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase'
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import MemberSimpleInfo from '../../components/smallGroups/MemberSimpleInfo';

function SmallGroupMember() {
    const { path } = useParams();

    return (
        <SmallGroupBase path={path}>
            <Box marginTop={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <Box marginY={1}>
                            <MemberSimpleInfo name={"정우진"} introduction={"반갑습니다 저는 관리자에요!"} isAdmin={true} />
                        </Box>
                        <Box marginY={1}>
                            <MemberSimpleInfo name={"정용규"} introduction={"뭐에요 다들! 놀아봅시다!"} isAdmin={false} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupMember