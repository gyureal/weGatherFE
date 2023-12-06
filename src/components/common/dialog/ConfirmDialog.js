import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import React from 'react'

function ConfirmDialog({ open, setOpen, title, description, agreeLabel, disagreeLabel, onAgreeClick }) {

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
                        {disagreeLabel}
                    </Button>
                    <Button onClick={onAgreeClick} autoFocus>
                        {agreeLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ConfirmDialog