import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../lib/lib';
import { useDispatch } from 'react-redux';
import { requestConfirmEmail } from '../slice/authSlice';

function CheckEmailToken() {

    let query = useQuery();
    const param = {
        email: query.get("email"),
        token: query.get("token")
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const confirmEmail = async () => {
            try {
                await dispatch(requestConfirmEmail(param)).unwrap();
                alert("이메일 승인이 완료되었습니다.");
                navigate("/");
            } catch {
                alert("이메일 승인에 실패했습니다.");
                navigate("/");
            }
        }
        confirmEmail();
    }, [])

    return (
        <div></div>
    )
}

export default CheckEmailToken