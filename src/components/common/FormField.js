import React from 'react';
import { TextField } from "@mui/material";

export const FormField = ({ field: {
    input,
    name,
    label,
    type = "text",
    autoFocus = false,
    autoComplete = null,
    meta: { touched, error } } }) => {
    return (
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
    );
};