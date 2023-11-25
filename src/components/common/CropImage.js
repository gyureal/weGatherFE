import { Avatar, Box, Button, Card, CardMedia } from '@mui/material'

import ContentCutIcon from '@mui/icons-material/ContentCut';
import React, { useEffect, useRef, useState } from 'react'
import FileUploadButton from './FileUploadButton';
import '/node_modules/cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';
import { imageExtensions } from '../../static/globalVariables';

// DB에 저장된 이미지 
let savedImage = "";

// 업로드한 파일 
let originalImageName = "";

function CropImage({ saveRequest, defaultImage, type, title, aspectRatio }) {
    const [image, setImage] = useState("");

    // 특정한 값이 변경될 때에만 호출되게 하려면 useEffect + 의존성 배열을 써야한다.
    // 의존성 배열의 값이 변경될 때만 useEffect 를 호출하게 된다.
    // setImage(defaultImage); -> 무한루프
    useEffect(() => {
        savedImage = defaultImage;
        setImage(defaultImage);
    }, [defaultImage])

    const [uploadImage, setUploadImage] = useState("");
    const cropperRef = useRef();

    const onCrop = () => {
        if (cropperRef.current && typeof cropperRef.current.cropper !== "undefined") {
            setImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
        }
    };

    // 이미지 업로드 하여, uploadImage에 담아야함
    const onImageUpload = (event) => {
        const file = event.target.files[0];

        if (!checkIfImage(file)) {
            alert("이미지만 업로드 가능합니다.");
            return;
        }

        originalImageName = file.name;
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadImage(imageUrl);
        }
    };

    const checkIfImage = (file) => {
        if (!file) {
            return;
        }
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (imageExtensions.includes(`.${fileExtension}`)) {
            return true;
        } else {
            return false;
        }
    }

    // 업로드, Cropped 된 사진이 저장되어야함
    const onConfirmClick = async () => {
        saveRequest(image);

        const data = {
            'image': image,
            'originalImageName': originalImageName
        }
        saveRequest(data);
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
                    {title}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
                    {
                        type === "profile" ?
                            <Avatar src={image === "" ? "#" : image} sx={{ width: 150, height: 150 }} />
                            :
                            <CardMedia component="img" height={130} image={image} />
                    }
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <FileUploadButton onImageChange={onImageUpload} label='Image Upload' />

                    <Button component="label" variant="contained" sx={{ marginTop: 1 }} color='primary'
                        onClick={onConfirmClick} disabled={disabledConfirm()}>
                        확인
                    </Button>
                    <Button component="label" variant="outlined" sx={{ marginTop: 1 }} color='error'
                        onClick={onCancelClick}>
                        취소
                    </Button>

                    {
                        uploadImage !== "" ?
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: 1 }}>
                                <Cropper
                                    ref={cropperRef}
                                    style={{ height: 200, width: "100%" }}
                                    zoomTo={0.2}
                                    initialAspectRatio={1}
                                    aspectRatio={aspectRatio}
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

export default CropImage;