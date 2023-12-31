import React, { useEffect, useState } from 'react'
import SettingsBase from './SettingsBase'
import { Box, Button, Grid } from '@mui/material'
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../../components/common/FormField';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { requestEditProfile, requestEditProfileImage, requestProfileByUsername } from '../../slice/memberSlice';
import CropImage from '../../components/common/CropImage';
import { awsPrefix, defaultAvatar } from '../../static/globalVariables';
import { useNavigate } from 'react-router-dom';

const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

let SettingsProfile = ({ handleSubmit, submitting }) => {

    const currentUser = useSelector((state) => {
        return state.authSlice.currentUser;
    });

    const userProfile = useSelector((state) => {
        return state.memberSlice.userProfile;
    }, shallowEqual);

    const [profileApiCalled, setProfileApiCalled] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserProfile = async (username) => {
        try {
            await dispatch(requestProfileByUsername(username)).unwrap();
        } catch {
            navigate("/login");
        }
    }

    useEffect(() => {
        if (currentUser && currentUser.username && !profileApiCalled) { // currentUser fetch 중 호출 방지, 두번 호출 방지
            getUserProfile(currentUser.username);    // 프로필 조회
            setProfileApiCalled(true); // 프로필 조회 API 호출 여부
        }
    }, [currentUser]);

    const onFormSubmit = async (values) => {
        try {
            await dispatch(requestEditProfile(values)).unwrap();
            alert("수정되었습니다.");
        } catch (error) {
            alert("error : ", error);
        }
    }

    const setProfileImage = () => {
        if (userProfile && userProfile.profileImage && userProfile.profileImage !== "") {
            return awsPrefix + userProfile.profileImage;
        }
        return defaultAvatar;
    }

    const saveRequest = async (cropResult) => {
        const formData = new FormData();
        formData.append('multipartImage', cropResult.blobImage, cropResult.originalImageName);

        try {
            await dispatch(requestEditProfileImage(formData)).unwrap();
        } catch {
            alert("이미지 업로드에 실패했습니다.");
        }
    }

    return (
        <SettingsBase currentMenu={'profile'}>
            <Grid container>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    {userProfile && userProfile.username}
                </Box>
            </Grid>
            <Box sx={{ mt: 0 }}></Box>
            <Grid container>
                <Grid item xs={7}>
                    <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
                        <Field
                            component={renderField}
                            name="introductionText"
                            label="한 줄 소개"
                            placeholder="간략한 소개를 적어주세요"
                            hintText="길지 않게 35자 이내로 입력해 주세요"
                            required={false}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={submitting}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            수정하기
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{ ml: 3, display: "flex" }}>
                        <CropImage saveRequest={saveRequest} defaultImage={setProfileImage} type={"profile"} title="프로필 이미지" />
                    </Box>
                </Grid>
            </Grid>
        </SettingsBase >
    )
}

const mapStateToProps = (state) => {
    return { initialValues: state.memberSlice.userProfile }
}

SettingsProfile = reduxForm({ form: 'profileEditForm', enableReinitialize: true })(SettingsProfile);
SettingsProfile = connect(mapStateToProps, null)(SettingsProfile);

export default SettingsProfile;