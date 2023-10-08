import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

export default function UnAuthMenu() {
    return (
        <div>
            <Grid container>
                <Button color="inherit">Login</Button>
                <Button color="inherit">SignIn</Button>
            </Grid>
        </div>
    )

}