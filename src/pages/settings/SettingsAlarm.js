import React, { useEffect } from 'react'
import SettingsBase from './SettingsBase'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Switch } from '@mui/material'
import { Field, reduxForm } from 'redux-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { requestChangeAlarmSettings, requestProfileByUsername } from '../../slice/memberSlice'


const renderSwitch = ({ label, input }) => {    // field.input 으로 Field의 값이 넘어옴
    return <FormControlLabel
        label={label}
        control={<Switch checked={input.value} onChange={input.onChange} />}    // input.value, input.onChange
    />
}

const SwitchGroup = ({ groupLabel, optionInfo }) => {
    return (
        <Box sx={{ mt: 3 }}>
            <FormControl fullWidth>
                <FormLabel id="demo-row-option-buttons-group-label" fullWidth>
                    <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', p: 1 }} bgcolor="#F7F2E0" fullWidth>
                        {groupLabel}
                    </Box>
                </FormLabel>
                <RadioGroup
                    row
                    name="row-radio-buttons-group"
                >
                    {
                        optionInfo.map((option) => {
                            return (
                                <Field
                                    key={option.value}
                                    name={option.value}
                                    label={option.label}
                                    component={renderSwitch}
                                />
                            )
                        })
                    }
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

let SettingsAlarm = ({ handleSubmit, submitting }) => {

    // const userProfile = useSelector((state) => {
    //     return state.memberSlice.userProfile;
    // });
    const dispatch = useDispatch();

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
            await dispatch(requestChangeAlarmSettings(values)).unwrap();
            alert("알람 설정 변경에 성공했습니다.");
        } catch (error) {
            alert("에러가 발생했습니다 ; ", error.description);
            console.log(error);
        }
    }

    const recommandOption = [
        { value: "groupCreatedByEmail", label: "이메일로 받기" },
        { value: "groupCreatedByWeb", label: "웹으로 받기" }
    ]

    const joinResultOption = [
        { value: "joinResultByEmail", label: "이메일로 받기" },
        { value: "joinResultByWeb", label: "웹으로 받기" }
    ]

    const groupActivityOption = [
        { value: "groupActivityByEmail", label: "이메일로 받기" },
        { value: "groupActivityByWeb", label: "웹으로 받기" }
    ]


    return (
        <SettingsBase currentMenu="alarm">
            <Grid container>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    알림 설정
                </Box>
                <Grid container>
                    <Grid item xs={8}>
                        <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
                            <SwitchGroup
                                name="recommand"
                                groupLabel="활동 지역에 관심사에 해당하는 모임이 만들어졌을 때 알림을 받습니다."
                                optionInfo={recommandOption}
                            />
                            <SwitchGroup
                                name="joinResult"
                                groupLabel="모임 참가 신청 결과 알림을 받습니다."
                                optionInfo={joinResultOption}
                            />
                            <SwitchGroup
                                name="groupActivity"
                                groupLabel="참여중인 모임에 대한 알림을 받습니다."
                                optionInfo={groupActivityOption}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={submitting}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                저장하기
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </SettingsBase>
    )
}

const mapStateToProps = (state) => {
    return { initialValues: state.memberSlice.userProfile }
}


SettingsAlarm = reduxForm({ form: "SettingsAlarm" })(SettingsAlarm);
SettingsAlarm = connect(mapStateToProps, null)(SettingsAlarm);

export default SettingsAlarm;