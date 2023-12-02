import React from 'react'
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate'
import { Box, Grid } from '@mui/material'
import SmallGroupSearchContent from '../../components/smallGroups/SmallGroupSearchContent'
import Logo from '../../components/main/Logo'

const SmallGroupsAll = () => {
    return (
        <PageTemplate>
            <Grid container justifyContent='center'>
                <Box my={5}>
                    <Logo />
                </Box>
            </Grid>
            <SmallGroupSearchContent />
        </PageTemplate>
    )
}

export default SmallGroupsAll