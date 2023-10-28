import React from 'react'
import { useParams } from 'react-router-dom'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase';
import { Box, Grid } from '@mui/material';

function SmallGroupMain() {

    const groupPath = useParams();

    return (
        <SmallGroupBase>
            <Box marginTop={2}>
                <Grid container justifyContent="center" xs={10}>
                    <Grid item xs={10}>
                        <div>content</div>
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupMain