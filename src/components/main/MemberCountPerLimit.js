import { Box, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';

import React from 'react'

function MemberCountPerLimit({ currentCount, maxCount }) {
    const color = 'grey';
    return (
        <Box>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <GroupsIcon sx={{ color: color }} />
                <Typography sx={{ color: color, ml: 1 }} component='span' variant='caption'>
                    {`${currentCount}/${maxCount}`}
                </Typography>
            </div>

        </Box>
    )
}

export default MemberCountPerLimit