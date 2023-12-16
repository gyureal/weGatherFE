import React, { useEffect } from 'react'
import UsersBase from './UsersBase'
import { Box, Divider, Grid, Typography } from '@mui/material'
import UserSmallGroupCard from '../../components/users/UserSmallGroupCard'
import { useDispatch, useSelector } from 'react-redux'
import { requestGetCreateSmallGroup, requestGetJoinSmallGroup } from '../../slice/memberSlice'

// const joinSmallGroups = [
//     {
//         path: "ttt",
//         image: null,
//         staus: "CLOSED",
//         name: "awefawef",
//         createdAt: "2021.21.13 13:13:13"
//     },
//     {
//         path: "ttt",
//         image: null,
//         staus: "CLOSED",
//         name: "awefawef",
//         createdAt: "2021.21.13 13:13:13"
//     },
//     {
//         path: "ttt",
//         image: null,
//         status: "CLOSED",
//         name: "awefawef",
//         createdAt: "2021.21.13 13:13:13"
//     }
// ]

//const createSmallGroups = joinSmallGroups;

const UserSmallGroups = () => {
    const dispatch = useDispatch();
    const { joinSmallGroups } = useSelector(state => state.memberSlice);
    const { createSmallGroups } = useSelector(state => state.memberSlice);

    useEffect(() => {
        getJoinSmallGroups();
        getCreateSmallGroups();
    }, [])

    const getJoinSmallGroups = async () => {
        try {
            dispatch(requestGetJoinSmallGroup()).unwrap();
        } catch {
            alert("가입한 소모임 조회에 실패했습니다.");
        }
    }

    const getCreateSmallGroups = async () => {
        try {
            dispatch(requestGetCreateSmallGroup()).unwrap();
        } catch {
            alert("생성한 소모임 조회에 실패했습니다.");
        }
    }

    return (
        <UsersBase currentMenu={"smallGroups"}>
            <Box>
                <Box mb={1} sx={{ fontSize: 'h5.fontSize', fontWeight: 'regular' }}>
                    참여 중인 소모임
                </Box>
                {
                    (joinSmallGroups.length > 0) ?
                        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                joinSmallGroups.map((smallGroup, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <UserSmallGroupCard smallGroup={smallGroup} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        : <Typography>아직 참여중인 소모임이 없습니다</Typography>
                }

            </Box>

            <Divider sx={{ my: 5 }} />

            <Box>
                <Box mb={1} sx={{ fontSize: 'h5.fontSize', fontWeight: 'regular' }}>
                    생성한 소모임
                </Box>
                {
                    (createSmallGroups.length > 0) ?
                        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                createSmallGroups.map((smallGroup, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <UserSmallGroupCard smallGroup={smallGroup} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        : <Typography>아직 생성한 소모임이 없습니다.</Typography>
                }
            </Box>
        </UsersBase>
    )
}

export default UserSmallGroups