import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate'

const NotFound = () => {
    return (
        <PageTemplate>
            <Grid container justifyContent='center'>
                <Grid item>
                    <Box my={20}>
                        <Typography variant='h4'>페이지를 찾을 수 없습니다</Typography>
                    </Box>
                </Grid>
            </Grid>
        </PageTemplate>
    )
}

export default NotFound