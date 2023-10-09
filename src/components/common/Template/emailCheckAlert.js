import React from 'react';
import { Alert, Grid } from '@mui/material';
import { Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

const EmailCheckAlert = (props) => {
    return (
        <Alert severity="warning">
            <Grid container>
                <Grid item>
                    WeGather 가입을 완료하려면
                </Grid>
                <Grid item>
                    <MuiLink component={Link} to={"/email-resend"} variant="body2">
                        계정 인증 메일
                    </MuiLink>
                </Grid>
                <Grid item>
                    을 확인하세요
                </Grid>
            </Grid>
        </Alert>
    )
}

export default EmailCheckAlert;