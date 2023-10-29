import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../common/FormField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./SmallGroupForm.css";
import { requestCreateSmallGroup } from '../../slice/smallGroupSlice';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '../common/ConfirmDialog';

const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

const renderEditorField = (field) => {
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


const pathRegEx = new RegExp(/^[A-Za-z0-9\-_]{2,20}$/);
const numberRegEx = new RegExp(/^[0-9\b]+$/);

const validate = (values) => {
    const errors = {};

    if (!(values.path && pathRegEx.test(values.path))) {
        errors.path = "공백없이 문자, 숫자, 대시(-)와 언더바(_)만 2자 이상 20자 이내로 입력하세요."
    }

    if (values.name) {  // 값이 있으면 (빈값 허용)
        errors.name = (values.name.length <= 50) ? undefined : "소모임 이름을 50자 이내로 입력하세요.";
    }

    if (values.shortDescription) {  // 값이 있으면 (빈값 허용)
        errors.shortDescription = (values.shortDescription.length <= 100) ? undefined : "소모임 짧은 소개를 100자 이내로 입력하세요.";
    }

    if (values.maxMemberCount && !numberRegEx.test(values.maxMemberCount)) {
        errors.maxMemberCount = "숫자만 입력 가능합니다.";
    }

    if (parseInt(values.maxMemberCount) < 0 || parseInt(values.maxMemberCount) > 300) {
        errors.maxMemberCount = "0에서 300 사이 숫자를 적어 주세요.";
    }

    return errors;
}
let formValues = {};    // 밖에 선언해야함

let SmallGroupForm = (props) => {
    const { handleSubmit, submitting } = props
    const [open, setOpen] = React.useState(false);  // dialog 팝업

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmitClick = (values) => {
        formValues = { ...values };     // redux-form values 를 변수에 저장
        setOpen(true);
    }

    const submitForm = async () => {
        try {
            await dispatch(requestCreateSmallGroup(formValues)).unwrap();   // 변수에 저장한 formValues 를 사용함
            navigate(`/smallGroups/${formValues.path}`);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div>
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
                    <Box component="form" onSubmit={handleSubmit(onSubmitClick)} noValidate sx={{ mt: 1 }}>
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
                            name="shortDescription"
                            label="짧은 소개"
                            hintText="100자 이내로 소모임을 소개해 주세요."
                        />
                        <Field
                            component={renderField}
                            name="maxMemberCount"
                            label="소모임 인원수"
                            type='number'
                            hintText="최대 300명 까지 모집 가능합니다. 0에서 300 사이 숫자를 적어 주세요."
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
            <ConfirmDialog
                open={open}
                setOpen={setOpen}
                title="확인"
                description="소모임을 생성하시겠습니까?"
                agreeLabel="생성"
                disagreeLabel="취소"
                onAgreeClick={submitForm}
            />

        </div>
    )
}

const mapStateToProps = () => {
    return { initialValues: { maxMemberCount: 30 } }        // Redux Form 초기값주기 
}

SmallGroupForm = reduxForm({ validate, form: 'SmallGroupForm' })(SmallGroupForm);
SmallGroupForm = connect(mapStateToProps, null)(SmallGroupForm);
export default SmallGroupForm;