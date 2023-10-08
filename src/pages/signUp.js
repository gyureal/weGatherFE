import React from "react";
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

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nickname"
                            label="Nickname"
                            name="nickname"
                            autoFocus
                        />
                        <Typography variant="caption" color="text.secondary">공백없이 문자와 숫자로만 3자 이상 20자 이내로 입력하세요.</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />
                        <Typography variant="caption" color="text.secondary">이메일을 입력해 주세요.</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Typography variant="caption" color="text.secondary">8자 이상 50자 이내로 입력하세요. 영문자, 숫자, 특수기호를 사용할 수 있습니다.</Typography>
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
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