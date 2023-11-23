import { Box } from '@mui/material'
import React from 'react'
import { defaultBanner } from '../../../static/globalVariables'
import { useSelector } from 'react-redux'
import { awsPrefix } from '../../../static/globalVariables'

function Banner() {

    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);

    const changeBanner = () => {
        return (smallGroup && smallGroup.banner) ? awsPrefix + smallGroup.banner : defaultBanner;
    }

    return (
        <Box component="img" sx={{ display: 'flex', height: 'auto', width: '100%' }} src={changeBanner()}></Box>
    )
}

export default Banner;