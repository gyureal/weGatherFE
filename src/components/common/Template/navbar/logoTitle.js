import React from "react";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { NoEncryption } from "@mui/icons-material";

export default function LogoTitle() {
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                color='inherit'
                sx={{ textDecoration: 'none', display: { xs: 'none', sm: 'block' } }}
            >
                WeGather
            </Typography>
        </div>
    );
}