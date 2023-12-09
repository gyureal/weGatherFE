import React, { useEffect } from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase'
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetSmallGroupMembers } from '../../slice/smallGroupSlice';
import MemberSimpleInfo from '../../components/smallGroups/MemberSimpleInfo';

function SmallGroupMember() {
    const { path } = useParams();
    const smallGroupMembers = useSelector((state) => state.smallGroupSlice.smallGroupMembers);
    //console.log("smallGroupMembers", smallGroupMembers);
    const dispatch = useDispatch();

    const getSmallGroupMembers = async (path) => {
        try {
            await dispatch(requestGetSmallGroupMembers(path)).unwrap();
        } catch (error) {
            alert("조회에 실패했습니다.");
        }
    }

    useEffect(() => {
        getSmallGroupMembers(path);
    }, []);

    return (
        <SmallGroupBase path={path}>
            <Box marginTop={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        {
                            smallGroupMembers.map((member) => (
                                <Box marginY={1}>
                                    <MemberSimpleInfo name={member.name} introduction={member.introduction} image={member.image} isManager={member.manager} />
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupMember