import React, { useEffect, useState } from 'react'
import SettingsBase from './SettingsBase'
import { Box, Grid } from '@mui/material'
import Tags from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
import { useDispatch, useSelector } from 'react-redux'
import { requestAddInterest, requestRemoveInterest } from '../../slice/memberSlice'
import { requestGetInterestWhiteList } from '../../slice/interestSlice'


const SettingInterests = () => {

    const whitelist = useSelector((state) => state.interestSlice.whitelist);

    const dispatch = useDispatch();

    const getWhiteList = async () => {
        try {
            await dispatch(requestGetInterestWhiteList()).unwrap;
        } catch {
            alert("error");
        }
    }

    useEffect(() => {
        getWhiteList();
    }, [])

    const onInterestAdd = async ({ detail }) => {
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
                                onAdd={onInterestAdd}
                                onRemove={onInterestRemove}
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