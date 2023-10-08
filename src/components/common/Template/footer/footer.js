import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="#">
                    WeGather
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }


    return (
        <Copyright sx={{ mt: 8, mb: 4 }} />
    );
}