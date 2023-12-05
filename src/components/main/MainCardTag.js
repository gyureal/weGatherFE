import { Chip } from '@mui/material'
//import Chip from '@mui/material-next/Chip';
import React from 'react'

function MainCardTag({ label, color }) {
    return (
        <Chip label={label} size='small' color={color} />
    )
}

export default MainCardTag