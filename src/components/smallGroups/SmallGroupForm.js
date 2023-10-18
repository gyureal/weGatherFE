import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../common/FormField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const SmallGroupForm = (props) => {
    const { handleSubmit, submitting } = props

    const onSubmit = (values) => {
        console.log("submit", values);
    }

    const renderField = (field) => {
        return (
            <div>
                <FormField field={field} />
            </div>
        );
    };

    const renderEditorField = (field) => {
        console.log(field);
        return (
            <div>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="body" color="text.secondary">
                        {field.label}
                    </Typography>
                    <CKEditor
                        editor={ClassicEditor}
                        config={{ placeholder: field.hintText }}
                        data={field.input.value}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            return field.input.onChange(editor.getData())
                        }
                        }
                    />
                </Box>
            </div>
        );
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                    <GroupsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {props.title}
                </Typography>
            </Box>
            <Box sx={{ mt: 3 }} ></Box>
            <Container maxWidth="md">
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <Field
                        component={renderField}
                        name="path"
                        label="소모임 URL"
                        autoFocus={true}
                        hintText="공백없이 문자, 숫자, 대시(-)와 언더바(_)만 2자 이상 20자 이내로 입력하세요. 모임 홈 주소에 사용합니다."
                    />
                    <Field
                        component={renderField}
                        name="name"
                        label="소모임 이름"
                        hintText="소모임 이름을 50자 이내로 입력하세요."
                    />
                    <Field
                        component={renderField}
                        name="smallDescription"
                        label="짧은 소개"
                        hintText="100자 이내로 소모임 짧은 소개해 주세요."
                    />
                    <Field
                        component={renderEditorField}
                        name="fullDescription"
                        label="상세 소개"
                        hintText="소모임의 목표, 진행방식, 모집 중인 회원에 대한 정보 등을 상세하게 적어주세요."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={submitting}
                        sx={{ mt: 3, mb: 1 }}
                    >
                        소모임 만들기
                    </Button>
                </Box>
            </Container>


        </Container >
    )
}

export default reduxForm({ form: 'SmallGroupForm' })(SmallGroupForm);