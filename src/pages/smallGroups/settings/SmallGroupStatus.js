import React, { useEffect, useState } from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { requestCloseSmallGroup, requestOpenRecruiting, requestPublishSmallGroup } from '../../../slice/smallGroupSlice'
import { useDispatch, useSelector } from 'react-redux'



const SmallGroupStatus = () => {

    const { path } = useParams();
    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);
    console.log('smallGroup ', smallGroup);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const PublishComponent = () => {
        const publish = async () => {
            try {
                const param = {
                    path: path
                }
                await dispatch(requestPublishSmallGroup(param)).unwrap();
                navigate(0);
            } catch {
                alert("소모임 공개에 실패했습니다.");
            }
        }

        return (
            <Box>
                <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'regular' }}>
                    소모임 공개
                </Box>
                <Box display='flex' sx={{ flexDirection: 'column' }}>
                    <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', flexGrow: 1, mt: 1, p: 2 }} bgcolor="#CEF6EC" display='flex' >
                        소모임을 다른 사람에게 공개합니다. <br />
                        소모임 경로, 이름, 관심사를 등록했는지 다시 한번 확인해 주세요. <br />
                        소모임을 공개하면 해당 관심사에 관심있는 다른 사용자에게 알림이 갑니다.
                    </Box>
                </Box>
                <Button sx={{ mt: 1 }} variant='outlined' onClick={publish}>소모임 공개</Button>
            </Box>
        )
    }

    const RecruitComponent = ({ beforeOpen }) => {
        const [recruitingProcess, setRecruitingProcess] = useState('FCFS'); // 기본값

        useEffect(() => {
            if (!beforeOpen) {
                setRecruitingProcess(smallGroup.recruitingProcess);
            }
        }, [beforeOpen])

        const handleChange = (event) => {
            setRecruitingProcess(event.target.value);
        };

        const openRecruiting = async () => {
            const param = {
                path: path,
                recruitingProcess: recruitingProcess
            }
            try {
                await dispatch(requestOpenRecruiting(param)).unwrap();
                navigate(0);
            } catch {
                alert("소모임 회원 모집 시작에 실패했습니다.");
            }
        }

        return (
            <Box>
                <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'regular' }}>
                    {
                        (beforeOpen === true) ? "소모임 인원 모집" : "인원 모집 방식 변경"
                    }
                </Box>
                <Box display='flex' sx={{ flexDirection: 'column' }}>
                    {
                        (beforeOpen === true) ?
                            <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', flexGrow: 1, mt: 1, p: 2 }} bgcolor="#CEF6EC" display='flex' >
                                소모임에서 인원 모집을 시작합니다. <br /> <br />
                                1. 선착순 : 먼저 가입신청한 인원 순으로 가입됩니다. <br />
                                2. 관리자 승인 : 관리자가 승인한 인원이 가입됩니다. <br />
                            </Box>
                            : <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', flexGrow: 1, mt: 1, p: 2 }} bgcolor="#CEF6EC" display='flex' >
                                소모임 인원모집 방식을 변경합니다. <br />
                            </Box>
                    }
                    <FormControl sx={{ m: 1 }} size="small">
                        <InputLabel id="demo-select-small-label">방식</InputLabel>
                        <Select
                            value={recruitingProcess}
                            onChange={handleChange}
                            defaultValue="FCFS"
                            label="방식"
                        >
                            <MenuItem value={'FCFS'}>선착순</MenuItem>
                            <MenuItem value={'APPROVAL'}>관리자 승인</MenuItem>
                        </Select>
                    </FormControl>

                    <Box sx={{ flexGrow: 0 }}>
                        {
                            (beforeOpen === true) ?
                                <Button sx={{ mt: 1 }} variant='outlined' onClick={openRecruiting}>인원 모집 시작</Button>
                                : <Button sx={{ mt: 1 }} variant='outlined' onClick={openRecruiting}>모집 방식 변경</Button>
                        }
                    </Box>
                </Box>
            </Box>
        )
    }

    const CloseComponent = ({ isClosed }) => {
        const closeClick = async () => {
            const param = {
                path: path,
            }
            try {
                await dispatch(requestCloseSmallGroup(param)).unwrap();
                navigate(0);
            } catch {
                alert("소모임 종료에 실패했습니다.");
            }
        }

        return (
            <Box>
                <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'regular' }}>
                    소모임 종료
                </Box>
                <Box display='flex' sx={{ flexDirection: 'column' }}>
                    <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', flexGrow: 1, mt: 1, p: 2 }} bgcolor="#FFAEAB" display='flex' >
                        소모임을 종료합니다.
                        종료된 소모임은 다시 오픈할 수 없습니다.
                    </Box>
                </Box>
                <Button sx={{ mt: 1 }} variant='outlined' color='error' onClick={closeClick}>소모임 종료</Button>
            </Box>
        )
    }

    const AfterClosedComponent = () => {
        return <div>
            <Box sx={{ fontSize: 'h5.fontSize', fontWeight: 'regular' }}>
                소모임 종료
            </Box>
            <Box display='flex' sx={{ flexDirection: 'column' }}>
                <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', flexGrow: 1, mt: 1, p: 2 }} bgcolor="#FFAEAB" display='flex' >
                    소모임이 종료되었습니다.
                </Box>
            </Box>
        </div>
    }

    const renderSettingStatusComponent = () => {
        if (!smallGroup) {
            return <div></div>
        }
        if (!smallGroup.published) {
            return <PublishComponent />
        }
        if (!smallGroup.recruiting) {
            return <RecruitComponent beforeOpen={true} />
        }
        if (!smallGroup.closed) {
            return <div>
                <CloseComponent />
                <Divider sx={{ my: 3 }} />
                <RecruitComponent beforeOpen={false} />
            </div>
        }
        return <AfterClosedComponent />
    }


    return (
        <SmallGroupSettingBase currentMenu='status'>
            {
                renderSettingStatusComponent()
            }

        </SmallGroupSettingBase>
    )
}

export default SmallGroupStatus