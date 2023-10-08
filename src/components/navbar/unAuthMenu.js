import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function UnAuthMenu() {
    return (
        <div>
            <Grid container>
                <Button color="inherit"
                    component={Link}
                    to={'/sign-up'}
                >Login
                </Button>
                <Button color="inherit"
                    component={Link}
                    to={'/sign-in'}
                >SignIn
                </Button>
            </Grid>
        </div>
    )

}