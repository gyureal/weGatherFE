import React from 'react'
import SettingsBase from './SettingsBase'
import { Box, Button, Grid } from '@mui/material'
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../../components/common/FormField';
import { useDispatch } from 'react-redux';
import { requestChangePassword } from '../../slice/memberSlice';

const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

const validatePassword = (value) => {
    return (value && value.length >= 8 && value.length < 50) ? true : false;
}

const validate = (values) => {
    const errors = {};

    if (!values.originalPassword) {
        errors.originalPassword = "기존 패스워드를 입력해 주세요";
    }
    if (!validatePassword(values.newPassword)) {
        errors.newPassword = "패스워드는 8자 이상 50자 미만이어야합니다.";
    }

    if (!values.newPasswordCheck) {
        errors.newPasswordCheck = "새 패스워드를 다시 한번 입력해 주세요";
    }
    if (values.newPassword !== values.newPasswordCheck) {
        errors.newPasswordCheck = "새 패스워드와 일치하지 않습니다.";
    }
    return errors;
}

let SettingsPassword = ({ handleSubmit, submitting }) => {

    const dispatch = useDispatch();

    const onFormSubmit = async (values) => {
        try {
            await dispatch(requestChangePassword(values)).unwrap();
            alert("비밀번호 변경에 성공했습니다.");
        } catch (error) {
            alert("에러가 발생했습니다 ; ", error.description);
            console.log(error);
        }
    }

    return (
        <SettingsBase currentMenu="password">
            <Grid container>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    패스워드 변경
                </Box>
                <Grid container>
                    <Grid item xs={8}>
                        <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
                            <Field
                                component={renderField}
                                name="originalPassword"
                                type='password'
                                label="기존 패스워드"
                                hintText="기존 패스워드를 입력해 주세요"
                            />
                            <Field
                                component={renderField}
                                name="newPassword"
                                type='password'
                                label="새 패스워드"
                                hintText="새 패스워드를 입력하세요"
                            />
                            <Field
                                component={renderField}
                                name="newPasswordCheck"
                                type='password'
                                label="새 패스워드 확인"
                                hintText="새 패스워드를 다시 한번 입력하세요"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={submitting}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                패스워드 변경하기
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </SettingsBase>
    )
}

SettingsPassword = reduxForm({ validate, form: "SettingsPassword" })(SettingsPassword);

export default SettingsPassword;