import { Button, Typography, Container, Box } from '@mui/material'
import React from 'react'
import PageTemplate from '../components/common/Template/pageTemplate/pageTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { requestResendConfirmEmail } from '../slice/authSlice';
import { useNavigate } from 'react-router-dom';

function EmailResend() {

    const currentUser = useSelector((state) => {
        return state.authSlice.currentUser;
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onResendClick = async () => {
        try {
            await dispatch(requestResendConfirmEmail()).unwrap();
            alert("인증 메일이 발송되었습니다.");
            navigate("/");
        } catch {
            alert("메일 발송 중 에러가 발생했습니다.");
        }
    }

    return (
        <PageTemplate>
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ my: 1 }}>
                        <Box sx={{ fontWeight: 'regular' }}> WeGather 가입 </Box>
                    </Typography>
                    <Typography variant="h4" sx={{ my: 1 }}>
                        <Box sx={{ fontWeight: 'medium' }}> WeGather 서비스를 사용하려면 인증 메일을 확인하세요 </Box>
                    </Typography>
                    <Typography variant="h5" sx={{ my: 1 }}>
                        <Box sx={{ fontWeight: 'light' }}> {currentUser.email}</Box>
                    </Typography>
                    <Button variant="outlined" sx={{ my: 1 }} onClick={onResendClick}>인증 메일 다시 보내기</Button>
                </Box>
            </Container>
        </PageTemplate >
    )
}

export default EmailResend