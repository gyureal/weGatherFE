import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function SmallGroupInfo() {
    return (
        <Box marginTop={2}>
            <Grid container justifyContent="center">
                <Grid item xs={6}>
                    <Typography variant='h4' fontWeight="fontWeightMedium">
                        소모임 이름
                    </Typography>
                </Grid>
                <Grid item xs={4} justifyContent="end" alignItems="end">
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="outlined">
                            {/* 준비중, 모집중, 모집완료, 모집중지, 종료 */}
                            상태값
                        </Button>
                        <Box marginX={1}></Box>
                        <Button variant="contained">
                            {/* 소모임 가입 */}
                            소모임 가입
                        </Button>
                    </Box>

                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Typography variant='h6' fontWeight="fontWeightLight">
                        소모임 짧은 소개입니다.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallGroupInfo