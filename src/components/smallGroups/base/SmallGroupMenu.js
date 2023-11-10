import React from 'react';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function samePageLinkNavigation(event) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

function LinkTab(props) {
    const navigate = useNavigate();
    return (
        <Tab
            component="a"
            onClick={(event) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
                const menuId = props.value;
                navigate(`/smallGroups/${props.groupPath}${menuId}`);
            }}
            {...props}
        />
    );
}

function SmallGroupMenu({ groupPath }) {
    //const [value, setValue] = React.useState("");

    const fullPath = window.location.pathname;
    //const menuId = fullPath.replace(`/smallGroups/${groupPath}`, "");
    let menuId = fullPath.replace(/\/(smallGroups)\/([^\/]+)/, "");
    //console.log("menuId : ", menuId);
    const matchSettingsMenu = menuId.match(/\/settings\/(\w+)/);
    if (matchSettingsMenu) {
        menuId = "/settings";
    }

    return (
        <Box marginTop={2}>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={menuId} aria-label="nav tabs example">
                            <LinkTab label="소개" value="" groupPath={groupPath} />
                            <LinkTab label="구성원" value="/members" groupPath={groupPath} />
                            <LinkTab label="Gather" value="/gather" groupPath={groupPath} />
                            <LinkTab label="설정" value="/settings" groupPath={groupPath} />
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallGroupMenu