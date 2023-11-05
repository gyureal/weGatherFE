import { Avatar, Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import ContentCutIcon from '@mui/icons-material/ContentCut';
import React, { useRef, useState } from 'react'
import FileUploadButton from './FileUploadButton';
import '/node_modules/cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';
import { useDispatch } from 'react-redux';
import { requestEditProfileImage } from '../../slice/memberSlice';

const defaultSrc =
    "https://raw.githubusercontent.com/gyureal/storage/main/image/default-avatar.png";

// DB에 저장된 이미지 
let savedImage = "";

// 업로드한 파일 
let originalImageName = "";

function CropImage() {
    const [image, setImage] = useState("");
    const [uploadImage, setUploadImage] = useState("");
    const cropperRef = useRef();
    const dispatch = useDispatch();

    const onCrop = () => {
        if (cropperRef.current && typeof cropperRef.current.cropper !== "undefined") {
            setImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
        }
    };

    // 이미지 업로드 하여, uploadImage에 담아야함
    const onImageUpload = (event) => {
        const file = event.target.files[0];
        console.log('file ', file);
        originalImageName = file.name;
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadImage(imageUrl);
        }
    };

    // 업로드, Cropped 된 사진이 저장되어야함
    const onConfirmClick = async () => {
        console.log(image);
        const data = {
            'profileImage': image,
            'originalImageName': originalImageName
        }
        try {
            await dispatch(requestEditProfileImage(data)).unwrap();
        } catch {
            alert("이미지 업로드에 실패했습니다.");
        }
        alert("이미지가 수정되었습니다.");
        savedImage = image;
        setUploadImage("");
    }

    // 확인버튼 비활성화 조건
    const disabledConfirm = () => {
        if (savedImage === image) {
            return true;
        }
        return false;
    }


    // 업로드 취소 : DB에 저장된 이미지로 되돌리기
    const onCancelClick = () => {
        console.log(savedImage);
        setImage(savedImage);
    }

    return (
        <Card variant="outlined" sx={{ display: 'flex', flexGrow: 1, borderRadius: 1 }}>
            <Box sx={{
                display: 'flex', flexGrow: 1, flexDirection: 'column', bgcolor: 'grey.150',
            }}>
                <Box sx={{ display: 'flex', bgcolor: 'grey.100', justifyContent: 'center', border: '1px', borderColor: 'grey:500', paddingY: 1 }}>
                    프로필 이미지
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                    <Avatar src={image === "" ? defaultSrc : image} sx={{ width: 150, height: 150 }} />
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <FileUploadButton onImageChange={onImageUpload} />

                    <Button component="label" variant="contained" sx={{ marginTop: 1 }} color='primary'
                        onClick={onConfirmClick} disabled={disabledConfirm()}>
                        확인
                    </Button>
                    <Button component="label" variant="outlined" sx={{ marginTop: 1 }} color='error'
                        onClick={onCancelClick}>
                        취소
                    </Button>

                    {
                        uploadImage != "" ?
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: 1 }}>
                                <Cropper
                                    ref={cropperRef}
                                    style={{ height: 200, width: "100%" }}
                                    zoomTo={0.5}
                                    initialAspectRatio={1}
                                    preview=".img-preview"
                                    src={uploadImage}
                                    viewMode={1}
                                    minCropBoxHeight={10}
                                    minCropBoxWidth={10}
                                    background={false}
                                    responsive={true}
                                    autoCropArea={1}
                                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                    guides={true}
                                />
                                <Button component="label" variant="contained" startIcon={<ContentCutIcon />} sx={{ marginTop: 1 }} color='success'
                                    onClick={onCrop}>
                                    자르기
                                </Button>
                            </Box>
                            : <div></div>
                    }
                </Box>

            </Box>
        </Card>
    )
}

export default CropImage