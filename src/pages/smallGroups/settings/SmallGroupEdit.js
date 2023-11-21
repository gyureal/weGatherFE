import React from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box, Button, Container, Typography } from '@mui/material'
import { FormField } from '../../../components/common/FormField';
import Editor from '../../../components/common/editor/Editor';
import { Field, reduxForm } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import { requestUpdateSmallGroupDescription } from '../../../slice/smallGroupSlice';
import { useParams } from 'react-router-dom';

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
                <Editor field={field} />
            </Box>
        </div>
    );
};

const validate = (values) => {
    const errors = {};

    return errors;
}

let SmallGroupEdit = ({ handleSubmit, submitting }) => {

    const dispatch = useDispatch();
    const { path } = useParams();

    const submitForm = async (values) => {
        try {
            const param = {
                'path': path,
                'data': {
                    'shortDescription': values.shortDescription,
                    'fullDescription': values.fullDescription
                }
            }
            console.log("param", param);
            await dispatch(requestUpdateSmallGroupDescription(param)).unwrap();
        } catch {
            alert("수정에 실패했습니다.");
        }
    }

    return (
        <SmallGroupSettingBase currentMenu={'edit'}>
            <Container maxWidth="md">
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    소모임 소개
                </Box>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                    <Field
                        component={renderField}
                        name="shortDescription"
                        label="짧은 소개"
                        hintText="100자 이내로 소모임을 소개해 주세요."
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
                        소모임 소개 수정
                    </Button>
                </Box>
            </Container>
        </SmallGroupSettingBase>
    )
}

const mapStateToProps = (state) => {
    return { initialValues: state.smallGroupSlice.smallGroup }
}

SmallGroupEdit = reduxForm({ validate, form: 'SmallGroupEdit', enableReinitialize: true })(SmallGroupEdit); // enableReinitialize 설정 추가해 주어야 바인딩됨
SmallGroupEdit = connect(mapStateToProps, null)(SmallGroupEdit);
export default SmallGroupEdit;