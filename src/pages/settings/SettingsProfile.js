import React, { useEffect } from 'react'
import SettingsBase from './SettingsBase'
import { Box, Button, Grid } from '@mui/material'
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../../components/common/FormField';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestEditProfile, requestProfileByUsername } from '../../slice/memberSlice';

const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

let SettingsProfile = ({ handleSubmit, submitting }) => {

    const userProfile = useSelector((state) => {
        return state.memberSlice.userProfile;
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserProfile = async (currentUser) => {
        try {
            await dispatch(requestProfileByUsername(currentUser.username)).unwrap();
        } catch {
            alert("조회에 실패했습니다.");
            //navigate("/");
        }
    }

    useEffect(() => {
        // localStorage 데이터 가져오기
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser && currentUser.username != undefined) {
            getUserProfile(currentUser);    // 프로필 조회
        }
    }, []);

    const onFormSubmit = async (values) => {
        try {
            await dispatch(requestEditProfile(values)).unwrap();
            alert("수정되었습니다.");
        } catch (error) {
            alert("error : ", error);
        }
    }

    // if (!userProfile) {
    //     return <div>Loading</div>
    // }

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
                    <Box sx={{ ml: 3 }}>
                    </Box>

                </Grid>
            </Grid>
        </SettingsBase >
    )
}

const mapStateToProps = (state) => {
    return { initialValues: state.memberSlice.userProfile }
}

SettingsProfile = reduxForm({ form: 'profileEditForm' })(SettingsProfile);
SettingsProfile = connect(mapStateToProps, null)(SettingsProfile);

export default SettingsProfile;