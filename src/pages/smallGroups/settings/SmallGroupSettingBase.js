import React from 'react'
import SmallGroupBase from '../../../components/smallGroups/base/SmallGroupBase'
import SideMenuButtons from '../../../components/common/SideMenuButtons'
import { Box, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'


const menuInfo = [
    { id: "edit", label: "소개" },
    { id: "banner", label: "배너 이미지" },
    { id: "interests", label: "모임 관심사" },
    { id: "smallGroup", label: "모임 설정" }
]

function SmallGroupSettingBase({ children, currentMenu }) {

    const { path } = useParams();

    return (
        <SmallGroupBase>
            <Box sx={{ my: 5 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={2}>
                        <Box display="flex" justifyContent="center"></Box>
                        <SideMenuButtons currentMenu={currentMenu} menuInfo={menuInfo} navigatePrefix={`/smallGroups/${path}/settings`} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ ml: 4 }}>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </SmallGroupBase>
    )
}

export default SmallGroupSettingBase