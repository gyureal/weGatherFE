import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { awsPrefix, defaultAvatar } from '../../static/globalVariables';

const JoinRequestItem = ({ username, introduction, image }) => {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/profile/${username}`);
    }

    return (
        <Card sx={{ boxShadow: 0, mt: 2 }}>
            <Box sx={{ display: 'flex' }}>
                <CardActionArea onClick={onCardClick}>
                    <Box sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 64, height: 64, mr: 3 }}
                            image={image && image != "" ? awsPrefix + image : defaultAvatar}
                        />
                        <Box display="flex" flexDirection="column">
                            <Box display="flex" flexDirection="row">
                                <Box marginRight={2}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {username}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box marginTop={0.7}>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {introduction || ""}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardActionArea>
                <Box sx={{ flexGrow: 1 }} ></Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                    <Button variant='outlined' color='primary'>승인</Button>
                    <Box mr={1}></Box>
                    <Button variant='outlined' color='error'>거절</Button>
                </Box>
            </Box>
        </Card>
    )
}

export default JoinRequestItem