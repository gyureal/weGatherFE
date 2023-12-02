import React from "react";
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";

export default function LogoTitle() {
    const navigate = useNavigate();
    const onLogoClick = () => {
        navigate("/");
        navigate(0);
    }
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component={Link}
                onClick={onLogoClick}
                //to="/"
                color='inherit'
                sx={{ textDecoration: 'none', display: { xs: 'none', sm: 'block' } }}
            >
                WeGather
            </Typography>
        </div>
    );
}