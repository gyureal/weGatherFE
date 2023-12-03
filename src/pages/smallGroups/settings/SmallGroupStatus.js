import React from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box, Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { requestPublishSmallGroup } from '../../../slice/smallGroupSlice'
import { useDispatch } from 'react-redux'

const SmallGroupStatus = () => {

    const { path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <SmallGroupSettingBase currentMenu='status'>
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

        </SmallGroupSettingBase>
    )
}

export default SmallGroupStatus