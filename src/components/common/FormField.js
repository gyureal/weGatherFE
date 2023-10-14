import React from 'react';
import { TextField, Typography } from "@mui/material";

export const FormField = ({ field: {
    input,
    name,
    label,
    type = "text",
    required = true,
    autoFocus = false,
    autoComplete = null,
    hintText = undefined,
    placeholder = undefined,
    meta: { touched, error } } }) => {
    return (
        <div>
            <TextField
                margin="normal"
                required={required}
                fullWidth
                id={name}
                label={label}
                type={type}
                name={name}
                autoFocus={autoFocus}           // 페이지 이동시 자동 포커스
                autoComplete={autoComplete}     // 자동 완성 (브라우저 내 캐시)
                helperText={touched && error}   // 포커스 떠나고, 에러가 있으면 메서지 표시
                error={touched && error}        // 포커스 떠나고, 에러가 있으면 빨간색으로 표시
                placeholder={placeholder}
                {...input}
            />
            {hintText && <Typography variant="caption" color="text.secondary">{hintText}</Typography>}
        </div>
    );
};