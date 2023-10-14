import React from 'react'
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate'
import SideMenuButtons from '../../components/common/SideMenuButtons'
import { Box, Grid } from '@mui/material'


const menuInfo = [
    { id: "profile", label: "프로필" },
    { id: "password", label: "패스워드" },
    { id: "alarm", label: "알림" },
    { id: "interests", label: "관심주제" },
    { id: "account", label: "계정" }
]

function SettingsBase({ children, currentMenu }) {
    return (
        <PageTemplate>
            <Box sx={{ my: 5 }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={2}>
                        <Box display="flex" justifyContent="center"></Box>
                        <SideMenuButtons currentMenu={currentMenu} menuInfo={menuInfo} />
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ ml: 4 }}>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </PageTemplate>
    )
}

export default SettingsBase