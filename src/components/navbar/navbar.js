import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoTitle from "./logoTitle";
import SearchBar from "./searchBar";
import AuthCompleteMenu from "./authCompleteMenu";
import UnAuthMenu from "./unAuthMenu";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <LogoTitle />
                    <SearchBar />
                    <Box sx={{ flexGrow: 1 }} />
                    <UnAuthMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}