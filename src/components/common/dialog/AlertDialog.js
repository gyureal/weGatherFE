import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

const AlertDialog = ({ open, setOpen, title, description }) => {

    const onClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
            >
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AlertDialog