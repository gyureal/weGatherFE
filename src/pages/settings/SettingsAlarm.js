import React from 'react'
import SettingsBase from './SettingsBase'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Switch } from '@mui/material'
import { Field, reduxForm } from 'redux-form'

const renderOptionField = ({ groupLabel, optionInfo }) => {
    return (
        <div>
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
                                    <FormControlLabel
                                        value={option.value}
                                        control={<Switch defaultChecked={option.defaultChecked} />}
                                        label={option.label}
                                    />
                                )
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    )
}

let SettingsAlarm = ({ handleSubmit, submitting }) => {

    const onFormSubmit = async (values) => {
        alert("submit");
        // try {
        //     await dispatch(requestChangePassword(values)).unwrap();
        //     alert("비밀번호 변경에 성공했습니다.");
        // } catch (error) {
        //     alert("에러가 발생했습니다 ; ", error.description);
        //     console.log(error);
        // }
    }

    const recommandOption = [
        { value: "recommandByEmail", label: "이메일로 받기", defaultChecked: false },
        { value: "recommandByWeb", label: "웹으로 받기", defaultChecked: true }
    ]

    const joinResultOption = [
        { value: "joinResultByEmail", label: "이메일로 받기", defaultChecked: false },
        { value: "joinResultByWeb", label: "웹으로 받기", defaultChecked: true }
    ]

    const groupAlaramOption = [
        { value: "groupAlaramByEmail", label: "이메일로 받기", defaultChecked: false },
        { value: "groupAlaramByWeb", label: "웹으로 받기", defaultChecked: true }
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
                            <Field
                                component={renderOptionField}
                                groupLabel="활동 지역에 관심사에 해당하는 모임이 만들어졌을 때 알림을 받습니다."
                                optionInfo={recommandOption}
                            />
                            <Field
                                component={renderOptionField}
                                groupLabel="모임 참가 신청 결과 알림을 받습니다."
                                optionInfo={joinResultOption}
                            />
                            <Field
                                component={renderOptionField}
                                groupLabel="참여중인 모임에 대한 알림을 받습니다."
                                optionInfo={groupAlaramOption}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
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

SettingsAlarm = reduxForm({ form: "SettingsAlarm" })(SettingsAlarm);

export default SettingsAlarm