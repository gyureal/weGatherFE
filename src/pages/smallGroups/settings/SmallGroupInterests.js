import React, { useEffect } from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box, Grid } from '@mui/material';
import Tags from '@yaireo/tagify/dist/react.tagify';
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
import { requestAddInterestToSmallGroup, requestGetSmallGroupInterests, requestRemoveInterestToSmallGroup } from '../../../slice/smallGroupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetInterestWhiteList } from '../../../slice/interestSlice';
import { useParams } from 'react-router-dom';

function SamllGroupInterests() {

    const dispatch = useDispatch();
    const { path } = useParams();

    const whitelist = useSelector((state) => state.interestSlice.whitelist);
    const smallGroupInterests = useSelector((state) => state.smallGroupSlice.smallGroupInterests);

    const getWhiteList = async () => {
        try {
            await dispatch(requestGetInterestWhiteList()).unwrap;
        } catch {
            alert("error");
        }
    }

    const getSmallGroupInterests = async () => {
        try {
            await dispatch(requestGetSmallGroupInterests(path)).unwrap;
        } catch {
            alert("error");
        }
    }

    useEffect(() => {
        getWhiteList();
        getSmallGroupInterests();
    }, [])

    let isInitialDataLoadFinished = false;
    const setAfterDataLoad = () => {        // 데이터가 로드된 것으로 간주함 (타이핑 한 경우)
        isInitialDataLoadFinished = true;
    }
    const onInterestAdd = async ({ detail }) => {
        if (!isInitialDataLoadFinished) {       // 첫 데이터 로드 할 때, onAdd Handler 동작 안하도록 설정
            return;
        }
        const param = {
            'path': path,
            'interestName': detail.data.value
        }

        try {

            await dispatch(requestAddInterestToSmallGroup(param)).unwrap();
        } catch (error) {
            console.log("error add");
        }
    }

    const onInterestRemove = async ({ detail }) => {
        const param = {
            'path': path,
            'interestName': detail.data.value
        }
        try {
            await dispatch(requestRemoveInterestToSmallGroup(param)).unwrap();
        } catch (error) {
            console.log("error remove");
        }
    }

    const settings = {
        dropdown: { enabled: 1 }    // 첫글자 입력 시 화이트리스트 표출
    };
    return (
        <SmallGroupSettingBase currentMenu='interests'>
            <Grid container>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    소모임 관심사
                </Box>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', mt: 1, p: 2 }} bgcolor="#CEF6EC" fullWidth>
                            소모임의 관심사를 추가합니다. 해당 관심사를 검색 시, 소모임이 검색됩니다.
                        </Box>
                        <Box sx={{ mt: 1 }} fullWidth>
                            <Tags
                                autoFocus={true}
                                whitelist={whitelist}
                                value={smallGroupInterests}
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

        </SmallGroupSettingBase>
    )
}

export default SamllGroupInterests