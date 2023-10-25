import { Box, Grid } from '@mui/material'
import React from 'react'

function SmallGroupMenu() {
    return (
        <Box marginTop={1}>
            <Grid container justifyContent="center" xs={10}>
                <div>소개</div>
                <div>구성원</div>
                <div>Gather</div>
                <div>설정</div>
            </Grid>
        </Box>
    )
}

export default SmallGroupMenu