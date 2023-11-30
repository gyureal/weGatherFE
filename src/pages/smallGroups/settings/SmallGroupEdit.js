import React, { useState } from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { FormField } from '../../../components/common/FormField';
import Editor from '../../../components/common/editor/Editor';
import { Field, reduxForm } from 'redux-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { requestUpdateSmallGroupDescription } from '../../../slice/smallGroupSlice';
import { useParams } from 'react-router-dom';
import FileUploadButton from '../../../components/common/FileUploadButton';
import { awsPrefix, defaultImage } from '../../../static/globalVariables';

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

    const [uploadImageUrl, setUploadImageUrl] = useState("");
    const [uploadBlobImage, setUploadBlobImage] = useState("");
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [originalImageName, setOriginalImageName] = useState("");

    const savedImage = useSelector((state) => state.smallGroupSlice.smallGroup.image);

    const dispatch = useDispatch();
    const { path } = useParams();

    // 업로드 된 이미지를 서버로 보내기
    const submitForm = async (values) => {
        try {
            const formData = new FormData();
            const descriptionInfo = {
                'shortDescription': values.shortDescription,
                'fullDescription': values.fullDescription
            }
            const json = JSON.stringify(descriptionInfo);
            formData.append('descriptionInfo', new Blob([json], { type: "application/json" }));
            formData.append('image', uploadBlobImage, originalImageName);

            const param = {
                'path': path,
                'formData': formData
            }

            await dispatch(requestUpdateSmallGroupDescription(param)).unwrap();
            // DB 저장 후 업로드 이미지 초기화
            window.location.reload();
        } catch {
            alert("수정에 실패했습니다.");
        }
    }

    // 업로드한 이미지로 세팅, 업로드된 이미지 보여주기
    const onImageChange = (event) => {
        const image = event.target.files[0];
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            setUploadImageUrl(imageUrl);
            setUploadBlobImage(image);
            setIsImageUploaded(true);
            setOriginalImageName(image.name);   // 업로드한 원본 파일명
        }
    }

    // DB에 저장된 이미지로 돌리기
    const onCancelClick = () => {
        setUploadImageUrl(savedImage);
        setUploadBlobImage("");
        setIsImageUploaded(false);
    }

    const showImage = () => {
        if (isImageUploaded) {
            return uploadImageUrl;
        }
        if (savedImage) {
            return awsPrefix + savedImage;
        }
        return defaultImage;
    }


    return (
        <SmallGroupSettingBase currentMenu={'edit'}>
            <Container maxWidth="md">
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular', borderBottom: 0.5, borderColor: 'grey.500' }}>
                    소모임 소개
                </Box>
                <Grid container>
                    <Grid item xs={8}>
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
                                color='primary'
                                sx={{ mt: 3, mb: 1 }}
                            >
                                소모임 소개 수정
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, mt: 2 }}>
                            <Typography variant="body" color="text.secondary">
                                썸네일 이미지
                            </Typography>
                            <Box sx={{ backgroundColor: "gray" }}>
                                <Box component='img' sx={{ mt: 1, height: 'auto', width: '100%', borderRadius: '16px', aspectRatio: "1/1", objectFit: 'contain' }} src={showImage()} />
                            </Box>
                            <FileUploadButton onImageChange={onImageChange} label='이미지 업로드' />

                            {
                                isImageUploaded ?
                                    <Box sx={{ mt: 1 }}>
                                        <Button variant='contained' color='success' fullWidth onClick={onCancelClick}>업로드 취소</Button>
                                    </Box>
                                    :
                                    <Box></Box>
                            }

                        </Box>
                    </Grid>
                </Grid>
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