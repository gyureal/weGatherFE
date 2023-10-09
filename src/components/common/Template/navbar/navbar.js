import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoTitle from "./logoTitle";
import SearchBar from "./searchBar";
import AuthCompleteMenu from "./authCompleteMenu";
import UnAuthMenu from "./unAuthMenu";
import { requestCurrentUser } from "../../../../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCurrentUser());
    }, []);

    const currentUser = useSelector((state) => {
        return state.authSlice.currentUser;
    });

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <LogoTitle />
                    <SearchBar />
                    <Box sx={{ flexGrow: 1 }} />
                    {currentUser ? <AuthCompleteMenu currentUser={currentUser} /> : <UnAuthMenu />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}