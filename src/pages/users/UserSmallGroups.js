import React from 'react'
import UsersBase from './UsersBase'
import { Box, Divider, Grid, Typography } from '@mui/material'
import UserSmallGroupCard from '../../components/users/UserSmallGroupCard'

const joinSmallGroups = [
    {
        path: "ttt",
        image: null,
        staus: "CLOSED",
        name: "awefawef",
        createdAt: "2021.21.13 13:13:13"
    },
    {
        path: "ttt",
        image: null,
        staus: "CLOSED",
        name: "awefawef",
        createdAt: "2021.21.13 13:13:13"
    },
    {
        path: "ttt",
        image: null,
        status: "CLOSED",
        name: "awefawef",
        createdAt: "2021.21.13 13:13:13"
    }
]

const createSmallGroups = joinSmallGroups;

const UserSmallGroups = () => {
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