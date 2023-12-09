import React, { useEffect } from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase'
import { Box, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import JoinRequestItem from '../../components/smallGroups/JoinRequestItem'
import { useDispatch, useSelector } from 'react-redux'
import { requestGetJoinRequests } from '../../slice/smallGroupJoinSlice'


const SmallGroupJoinRequests = () => {
    const { path } = useParams();
    const { smallGroup } = useSelector((state) => state.smallGroupSlice);

    const { joinRequests } = useSelector((state) => state.smallGroupJoinSlice);
    console.log("joinRequests", joinRequests);
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
                        {/* <JoinRequestItem name={"username"} introduction="안녕하세요" image={""} /> */}
                        {
                            joinRequests.map((member) => (
                                <Box marginY={1}>
                                    <JoinRequestItem username={member.username} introduction={member.introduction} image={member.profileIamge} />
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