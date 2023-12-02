import React from "react";
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";

export default function LogoTitle() {
    const navigate = useNavigate();
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