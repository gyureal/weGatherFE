import React from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box, Button, Grid } from '@mui/material'
import CropImage from '../../../components/common/CropImage'
import { requestUpdateSmallGroupBanner } from '../../../slice/smallGroupSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { awsPrefix } from '../../../static/globalVariables'
import { requestToggleUseBanner } from '../../../slice/smallGroupSlice'

function SmallGroupBanner() {

    const { path } = useParams();
    const dispatch = useDispatch();
    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);

    const saveRequest = (cropResult) => {
        const formData = new FormData();
        formData.append('multipartImage', cropResult.blobImage, cropResult.originalImageName);

        const param = {
            'path': path,
            'image': formData
        }
        dispatch(requestUpdateSmallGroupBanner(param));
    }

    const setBannerImage = () => {
        if (smallGroup && smallGroup.banner) {
            return awsPrefix + smallGroup.banner;
        }
        return "";
    }

    const onUseBannerClick = () => {
        const param = {
            'path': path
        }
        dispatch(requestToggleUseBanner(param));
    }

    return (
        <SmallGroupSettingBase currentMenu="banner">
            <Box>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                    소모임 배너
                </Box>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ fontSize: 'h7.fontSize', fontWeight: 'regular', mt: 1, p: 2 }} bgcolor="#CEF6EC" fullWidth>
                            모임 메뉴에서 모임 메뉴 이미지를 사용합니다. 모임 배너 이미지가 없다면, 기본 배너 이미지를 사용합니다.
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', mt: 1 }}>
                            <Button Button component="label" variant="outlined" onClick={onUseBannerClick}>
                                {!smallGroup.useBanner ? '배너 이미지 사용하기' : '배너 이미지 사용하지 않기'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular', mt: 3 }}>
                    배너 이미지 변경
                </Box>
                <Box sx={{ mt: 1 }}>
                    <CropImage saveRequest={saveRequest} defaultImage={setBannerImage} type="banner" title="배너 이미지" aspectRatio={13 / 2} />
                </Box>


            </Box>
        </SmallGroupSettingBase>
    )
}

export default SmallGroupBanner