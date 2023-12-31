import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { FormField } from "../../components/common/FormField";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
// icon
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// action creator
import { requestLogin } from "../../slice/authSlice";
import PageTemplate from "../../components/common/Template/pageTemplate/pageTemplate";

const validate = (values) => {
    const errors = {};

    if (!values.emailOrNickname) {
        errors.emailOrNickname = "이메일이나 닉네임을 입력해주세요.";
    }

    if (!values.password) {
        errors.password = "패스워드를 입력해주세요.";
    }

    return errors;
}

const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

// const renderCheckbox = ({ label }) => {
//     return (
//         <FormControlLabel
//             control={<Checkbox {...label} color="primary" />}
//             label={label}
//         />
//     );
// }

const Login = (props) => {
    const { handleSubmit, submitting } = props
    const dispatch = useDispatch();
    const naviagate = useNavigate();

    const onSubmit = async (values) => {
        try {
            await dispatch(requestLogin(values)).unwrap();
            naviagate("/");
        } catch (error) {
            alert("등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력했습니다.")
        }
    }
    return (
        <PageTemplate>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="subtitle1">
                        WeGather
                    </Typography>

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <Container maxWidth="sm">
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                            <Field
                                component={renderField}
                                name="usernameOrEmail"
                                label="Email Address / Nickname"
                                autoFocus={true}
                            />
                            <Field
                                component={renderField}
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                            {/* <Field
                                name="remember"
                                component={renderCheckbox}
                                label="Remember Me"
                            /> */}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={submitting}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                로그인
                            </Button>
                        </Box>
                        <Grid container>
                            <Grid item xs>
                                <MuiLink component={Link} to={"/find-password"} variant="body2">
                                    비밀번호 찾기
                                </MuiLink>
                            </Grid>
                            <Grid item>
                                <MuiLink component={Link} to={"/sign-up"} variant="body2">
                                    계정 만들기
                                </MuiLink>
                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </Container>
        </PageTemplate>
    );
}

export default reduxForm({ validate, form: 'SignInForm' })(Login);