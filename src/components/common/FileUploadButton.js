import React from 'react'
import { Button } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import { styled } from '@mui/material/styles';
import { imageExtensions } from '../../static/globalVariables';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const extensionString = imageExtensions.join(", ")

function FileUploadButton({ onImageChange, label }) {

    const onImageUpload = (event) => {
        const file = event.target.files[0];

        if (!checkIfImage(file)) {
            alert("이미지만 업로드 가능합니다.");
            return;
        }
        onImageChange(event);
    }

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

    return (
        <Button component="label" variant="outlined" startIcon={<ImageIcon />} sx={{ marginTop: 1 }}>
            {label}
            <VisuallyHiddenInput type="file" accept={extensionString} onChange={onImageUpload} />
        </Button>
    )
}

export default FileUploadButton