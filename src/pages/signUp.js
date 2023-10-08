import React from "react";
import { Field, reduxForm } from 'redux-form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import PageTemplate from "../components/common/Template/pageTemplate/pageTemplate";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
//icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// action creator
import { requestSignUp } from "../slice/accountSlice";

const validate = (values) => {
    const errors = {};

    if (!values.nickname) {
        errors.nickname = "닉데임을 입력해주세요.";
    }

    if (!values.email) {
        errors.email = "이메일을 입력해주세요.";
    }

    if (!values.password) {
        errors.password = "패스워들를 입력해주세요.";
    }

    return errors;
}

const renderField = ({
    input,
    name,
    label,
    type = "text",
    hintText,
    autoFocus = false,
    autoComplete = null,
    meta: { touched, error },
}) => {
    return (
        <div>
            <TextField
                margin="normal"
                required
                fullWidth
                id={name}
                label={label}
                type={type}
                name={name}
                autoFocus={autoFocus}           // 페이지 이동시 자동 포커스
                autoComplete={autoComplete}     // 자동 완성 (브라우저 내 캐시)
                helperText={touched && error}   // 포커스 떠나고, 에러가 있으면 메서지 표시
                error={touched && error}        // 포커스 떠나고, 에러가 있으면 빨간색으로 표시
                {...input}
            />
            <Typography variant="caption" color="text.secondary">{hintText}</Typography>
        </div>
    );
};

const SignUp = (props) => {
    const { handleSubmit, submitting } = props
    const dispatch = useDispatch();
    const naviagate = useNavigate();

    const onSubmit = async (values) => {
        try {
            await dispatch(requestSignUp(values)).unwrap();
            naviagate("/");
        } catch (error) {
            console.log('error', error);
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
                        WeGater
                    </Typography>

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        계정 만들기
                    </Typography>



                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <Field
                            component={renderField}
                            name="username"
                            label="Nickname"
                            autoFocus={true}
                            hintText="공백없이 문자와 숫자로만 3자 이상 20자 이내로 입력하세요."
                        />
                        <Field
                            component={renderField}
                            name="email"
                            label="Email"
                            autoComplete="email"
                            hintText="이메일을 입력해 주세요."
                        />
                        <Field
                            component={renderField}
                            name="password"
                            label="Password"
                            autoComplete="current-password"
                            type="password"
                            hintText="8자 이상 50자 이내로 입력하세요. 영문자, 숫자, 특수기호를 사용할 수 있습니다."
                        />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={submitting}
                            sx={{ mt: 3, mb: 1 }}
                        >
                            가입하기
                        </Button>
                        <Grid container>
                            <Link href="#" variant="caption">
                                약관
                            </Link>
                            <Typography variant="caption" color="text.secondary">에 동의하시면 가입하기 버튼을 클릭하세요.</Typography>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </PageTemplate>
    );
}

export default reduxForm({ validate, form: 'SignUpForm' })(SignUp);