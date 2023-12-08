import { Box, Card, CardActionArea, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'
import { awsPrefix, defaultAvatar } from '../../static/globalVariables'
import { useNavigate } from 'react-router-dom';

const MemberSimpleInfo = ({ name, introduction, image, isManager }) => {
    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/profile/${name}`);
    }

    return (
        <div>
            <Card sx={{ display: 'flex', boxShadow: 0, mt: 2 }}>
                <CardActionArea onClick={onCardClick}>
                    <Box display="flex" flexDirection="row">
                        <Box marginRight={3}>
                            <CardMedia
                                component="img"
                                sx={{ width: 64, height: 64 }}
                                image={image && image != "" ? awsPrefix + image : defaultAvatar}
                            />
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Box display="flex" flexDirection="row">
                                <Box marginRight={2}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {name}
                                    </Typography>
                                </Box>
                                {
                                    isManager ?
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Chip label="관리자" color='primary' size="small" />
                                        </Box>
                                        : <Box></Box>
                                }
                            </Box>
                            <Box marginTop={0.7}>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {introduction}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MemberSimpleInfo