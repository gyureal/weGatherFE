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
                const id = event.target.id;
                navigate(id);
            }}
            {...props}
        />
    );
}

function SmallGroupMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
        }
    }

    return (
        <Box marginTop={2}>
            <Grid container justifyContent="center" xs={10}>
                <Grid item xs={10}>
                    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                            <LinkTab label="소개" id="" />
                            <LinkTab label="구성원" id="members" />
                            <LinkTab label="Gather" id="gather" />
                            <LinkTab label="설정" id="settings" />
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallGroupMenu