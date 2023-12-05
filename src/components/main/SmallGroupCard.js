import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import MainCardTag from './MainCardTag'
import MemberCountPerLimit from './MemberCountPerLimit'
import HashInterestTag from './HashInterestTag'
import { useNavigate } from 'react-router-dom'
import { awsPrefix, defaultImage } from '../../static/globalVariables'

const convertDateFormat = (datetime) => {
    const originalDate = new Date(datetime);

    const year = originalDate.getFullYear();
    const month = originalDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = originalDate.getDate();

    return `${year}년 ${month}월 ${day}일`;
}

const SmallGroupCard = ({ smallGroup }) => {
    const navigate = useNavigate();

    const onCardClick = (e) => {
        navigate(`/smallGroups/${smallGroup.path}`);
    }

    const showImage = () => {
        if (smallGroup && smallGroup.image) {
            return awsPrefix + smallGroup.image;
        }
        return defaultImage;
    }

    const renderStatusTag = () => {
        if (smallGroup.status === "CLOSED") return <MainCardTag label='종료' />;
        if (smallGroup.status === "PUBLISHED") return <MainCardTag label='모집중 아님' />;
        if (smallGroup.status === "RECRUITING") return <MainCardTag label='모집중' color='primary' />;
        return <MainCardTag label='준비중' />;
    }

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardActionArea onClick={onCardClick}>
                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '56.25%',   // 이미지의 가로길이 대비 세로길이 (%) 인듯
                    }}
                    image={showImage()}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            {renderStatusTag()}
                        </Grid>
                    </Grid>
                    <Typography gutterBottom variant="h5" mt={0.5}>
                        {smallGroup.name}
                    </Typography>
                    <Typography variant='body2'>
                        {smallGroup.shortDescription}
                    </Typography>
                    <Box mt={1}>
                        {
                            smallGroup.interests.map((interest, index) => (
                                <HashInterestTag interest={interest} key={index} />
                            ))
                        }
                        {/* <HashInterestTag interest='취미' /> */}
                    </Box>
                    <Grid container justifyContent='space-between' marginTop={1}>
                        <Grid item>
                            <MemberCountPerLimit currentCount={smallGroup.currentMemberCount} maxCount={smallGroup.maxMemberCount} />
                        </Grid>
                        <Grid item>
                            <Typography variant='caption' sx={{ color: 'grey' }}>
                                {/* 2022년 11월 23일 */}
                                {convertDateFormat(smallGroup.createdAt)}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SmallGroupCard