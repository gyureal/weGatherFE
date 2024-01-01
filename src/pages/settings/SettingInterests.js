import React, { useEffect, useState } from 'react'
import SettingsBase from './SettingsBase'
import { Box, Grid } from '@mui/material'
import Tags from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
import { useDispatch, useSelector } from 'react-redux'
import { requestAddInterest, requestGetMyInterests, requestRemoveInterest } from '../../slice/memberSlice'
import { requestGetInterestWhiteList } from '../../slice/interestSlice'


const SettingInterests = () => {

    const whitelist = useSelector((state) => state.interestSlice.whitelist);
    const myInterests = useSelector((state) => state.memberSlice.myInterests);

    const dispatch = useDispatch();

    const getWhiteList = async () => {
        try {
            await dispatch(requestGetInterestWhiteList()).unwrap;
        } catch {
            alert("error");
        }
    }

    const getMyInterests = async () => {
        try {
            await dispatch(requestGetMyInterests()).unwrap;
        } catch {
            alert("error");
        }
    }

    useEffect(() => {
        getWhiteList();
        getMyInterests();
    }, [])

    let isInitialDataLoadFinished = false;
    const setAfterDataLoad = () => {        // 데이터가 로드된 것으로 간주함 (타이핑 한 경우)
        isInitialDataLoadFinished = true;
    }
    const onInterestAdd = async ({ detail }) => {
        if (!isInitialDataLoadFinished) {       // 첫 데이터 로드 할 때, onAdd Handler 동작 안하도록 설정
            return;
        }
        try {
            await dispatch(requestAddInterest(detail.data.value)).unwrap();
        } catch (error) {
            console.log("error add", error);
        }
    }

    const onInterestRemove = async ({ detail }) => {
        try {
            await dispatch(requestRemoveInterest(detail.data.value)).unwrap();
        } catch (error) {
            console.log("error remove", error);
        }
    }

    const settings = {
        // 화이트리스트 비활성화 (한글 입력시 화이트 리스트에 해당되는 단어가 있으면 두번 입력됨)
        dropdown: { enabled: 100 }    // 100글자 입력 시 화이트리스트 표출 
    };

    return (
        <SettingsBase currentMenu="interests">
            <Grid container>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    관심 있는 모임 주제
                </Box>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', mt: 1, p: 2 }} bgcolor="#CEF6EC" fullWidth>
                            참여하고 싶은 모임 주제를 입력해 주세요. 해당 주제의 모임이 생성되면 알림을 받을 수 있습니다. <br />
                            태그를 입력하고 콤마(,) 또는 엔터를 입력해 주세요.
                        </Box>
                        <Box sx={{ mt: 1 }} fullWidth>
                            <Tags
                                autoFocus={true}
                                whitelist={whitelist}
                                value={myInterests}
                                loading={true}
                                onAdd={onInterestAdd}
                                onRemove={onInterestRemove}
                                onInput={setAfterDataLoad}    // 타이핑 했으면 데이터 로드된 이후임을 간주
                                settings={settings}
                            >
                            </Tags>

                        </Box>

                    </Grid>
                </Grid>
            </Grid>
        </SettingsBase>
    )
}

export default SettingInterests