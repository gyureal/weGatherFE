import React from 'react'
import { Button } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import { styled } from '@mui/material/styles';

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


function FileUploadButton({ onImageChange }) {
    return (
        <Button component="label" variant="outlined" startIcon={<ImageIcon />} sx={{ marginTop: 1 }}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={onImageChange} />
        </Button>
    )
}

export default FileUploadButton