import React from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parse from "html-react-parser";
import DOMPurify from 'dompurify';


function SmallGroupMain() {

    const { path } = useParams();
    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);

    const cleanedFullDescription = DOMPurify.sanitize(smallGroup.fullDescription, {
        USE_PROFILES: { html: true },
    });

    return (
        <SmallGroupBase path={path}>
            <Box marginTop={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        {parse(cleanedFullDescription)}
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupMain