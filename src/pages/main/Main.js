import React from 'react';
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate';
import { Box, Grid } from '@mui/material';
import Logo from '../../components/main/Logo';
import SmallGroupSearchContent from '../../components/smallGroups/SmallGroupSearchContent';

export default function Main() {

    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_API_URL);

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