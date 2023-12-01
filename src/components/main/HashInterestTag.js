import { Box, Chip, makeStyles } from '@mui/material'
import React from 'react'

function HashInterestTag({ interest }) {

    const label = `# ${interest}`

    return (
        <Box component='span' mx={0.2}>
            <Chip label={label} size='small' color='success' sx={{ fontSize: 10, height: 16 }} />
        </Box>
    )
}

export default HashInterestTag