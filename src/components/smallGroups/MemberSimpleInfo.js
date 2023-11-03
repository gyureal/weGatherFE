import { Box, Card, CardMedia, Chip, Typography } from '@mui/material'
import React from 'react'

function MemberSimpleInfo({ name, introduction, image, isManager }) {
    return (
        <div>
            <Card sx={{ display: 'flex', boxShadow: 0 }}>
                <Box marginRight={3}>
                    <CardMedia
                        component="img"
                        sx={{ width: 64, height: 64 }}
                        image={image ? image : "https://picsum.photos/id/237/200/300"}
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
                    <Box marginTop={1}>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            {introduction}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </div>
    )
}

export default MemberSimpleInfo