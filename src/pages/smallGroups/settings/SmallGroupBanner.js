import React from 'react'
import SmallGroupSettingBase from './SmallGroupSettingBase'
import { Box } from '@mui/material'
import CropImage from '../../../components/common/CropImage'
import { requestUpdateSmallGroupBanner } from '../../../slice/smallGroupSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { awsPrefix } from '../../../static/globalVariables'

function SmallGroupBanner() {

    const { path } = useParams();
    console.log("path ", path);

    const dispatch = useDispatch();

    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);

    const saveRequest = (cropResult) => {

        if (!cropResult.image) {
            return;
        }

        const image = {
            'image': cropResult.image,
            'originalImageName': cropResult.originalImageName
        }

        const param = {
            'path': path,
            'image': image
        }

        console.log("data ", param);
        dispatch(requestUpdateSmallGroupBanner(param));
    }

    const setBannerImage = () => {
        if (smallGroup && smallGroup.banner) {
            return awsPrefix + smallGroup.banner;
        }
        return "";
    }

    return (
        <SmallGroupSettingBase currentMenu="banner">
            <Box>
                <CropImage saveRequest={saveRequest} defaultImage={setBannerImage} type="banner" title="배너 이미지" aspectRatio={13 / 2} />
            </Box>
        </SmallGroupSettingBase>
    )
}

export default SmallGroupBanner