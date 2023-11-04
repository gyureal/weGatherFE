import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import ContentCutIcon from '@mui/icons-material/ContentCut';
import React, { useRef, useState } from 'react'
import FileUploadButton from './FileUploadButton';
import '/node_modules/cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';

const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";


function CropImage() {
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("#");
    const cropperRef = useRef();

    const getCropData = () => {
        if (cropperRef.current && typeof cropperRef.current.cropper !== "undefined") {
            setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
        }
    };

    const onImageChange = (event) => {
        console.log("called");
        console.log("event", event.target.files);
        // const file = event.target.files[0];
        // if (file) {
        //     console.log('file', file);
        //     setImage(file);
        // }
    };

    const onConfirmClick = () => {

    }

    const onCancelClick = () => {

    }

    return (
        <Card variant="outlined" sx={{ display: 'flex', flexGrow: 1, borderRadius: 1, border: '1px solid', borderColor: 'grey:500' }}>
            <Box sx={{
                display: 'flex', flexGrow: 1, flexDirection: 'column', bgcolor: 'grey.150',
            }}>
                <Box sx={{ display: 'flex', bgcolor: 'grey.100', justifyContent: 'center', border: '1px', borderColor: 'grey:500', paddingY: 1 }}>
                    프로필 이미지
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Cropper
                        ref={cropperRef}
                        style={{ height: 200, width: "100%" }}
                        zoomTo={0.5}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={image}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        guides={true}
                    />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <FileUploadButton onImageChange={onImageChange} />

                    <Button component="label" variant="outlined" startIcon={<ContentCutIcon />} sx={{ marginTop: 1 }} color='success'
                        onClick={getCropData}>
                        자르기
                    </Button>
                    <Button component="label" variant="contained" sx={{ marginTop: 1 }} color='primary'
                        onClick={onConfirmClick}>
                        확인
                    </Button>
                    <Button component="label" variant="outlined" sx={{ marginTop: 1 }} color='error'
                        onClick={onCancelClick}>
                        취소
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                        <img style={{ width: "100%" }} src={cropData} alt="cropped" />
                    </Box>
                </Box>

            </Box>
        </Card>
    )
}

export default CropImage