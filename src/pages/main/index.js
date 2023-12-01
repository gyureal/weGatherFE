import React from 'react';
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate';
import { Box, Grid, Pagination } from '@mui/material';
import Logo from '../../components/main/Logo';
import SmallGroupCard from '../../components/main/SmallGroupCard';

export default function Index() {
    return (
        <PageTemplate>
            <Grid container justifyContent='center'>
                <Box my={5}>
                    <Logo />
                </Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid item xs={8}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {Array.from(Array(8)).map((_, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <SmallGroupCard />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' my={7}>
                <Grid item>
                    <Pagination count={10} />
                </Grid>
            </Grid>
        </PageTemplate>
    )
}