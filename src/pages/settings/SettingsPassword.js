import React from 'react'
import SettingsBase from './SettingsBase'
import { Box, Button, Grid } from '@mui/material'
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../../components/common/FormField';

const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

let SettingsPassword = ({ handleSubmit, submitting }) => {

    const onFormSubmit = () => {
        console.log("submit");
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
                                label="기존 패스워드"
                                hintText="기존 패스워드를 입력해 주세요"
                            />
                            <Field
                                component={renderField}
                                name="newPassword"
                                label="새 패스워드"
                                hintText="새 패스워드를 입력하세요"
                            />
                            <Field
                                component={renderField}
                                name="newPasswordCheck"
                                label="새 패스워드 확인"
                                hintText="새 패스워드를 다시 한번 입력하세요"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
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

SettingsPassword = reduxForm({ form: "SettingsPassword" })(SettingsPassword);

export default SettingsPassword;