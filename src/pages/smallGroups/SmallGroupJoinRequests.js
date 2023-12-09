import React, { useEffect } from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase'
import { Box, Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import JoinRequestItem from '../../components/smallGroups/JoinRequestItem'
import { useDispatch, useSelector } from 'react-redux'
import { requestApproveJoinRequests, requestGetJoinRequests } from '../../slice/smallGroupJoinSlice'


const SmallGroupJoinRequests = () => {
    const { path } = useParams();
    const { smallGroup } = useSelector((state) => state.smallGroupSlice);

    const { joinRequests } = useSelector((state) => state.smallGroupJoinSlice);
    const dispatch = useDispatch();

    const getJoinRequests = async () => {
        try {
            const param = {
                id: smallGroup.id
            }
            await dispatch(requestGetJoinRequests(param)).unwrap();
        } catch { }
    }

    useEffect(() => {
        if (smallGroup && smallGroup.id) {
            getJoinRequests();
        }
    }, [smallGroup.id])



    return (
        <SmallGroupBase path={path}>
            <Box marginTop={2}>
                <Grid container justifyContent='center'>
                    <Grid item xs={10}>
                        {
                            joinRequests.map((joinRequest) => (
                                <Box marginY={1}>
                                    <JoinRequestItem joinRequest={joinRequest} smallGroupId={smallGroup.id} />
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupJoinRequests