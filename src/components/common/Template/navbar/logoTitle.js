import React from "react";
import Typography from '@mui/material/Typography';

export default function LogoTitle() {
    return (
        <div>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                WeGather
            </Typography>
        </div>
    );
}