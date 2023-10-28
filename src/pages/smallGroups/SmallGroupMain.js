import React from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';


function SmallGroupMain() {

    const { path } = useParams();

    return (
        <SmallGroupBase path={path}>
            <Box marginTop={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <div>smallGroup</div>
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupMain