import { Chip } from '@mui/material'
//import Chip from '@mui/material-next/Chip';
import React from 'react'

function MainCardTag({ label }) {
    return (
        <Chip label={label} size='small' />
    )
}

export default MainCardTag