import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Chip } from '@mui/material';

const InterestTag = ({ interest, color = 'success' }) => {
    return (
        <Chip icon={<LocalOfferIcon />} label={interest} size="small" color={color} />
    )
}

export default InterestTag;