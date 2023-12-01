import React, { useEffect } from 'react';
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate';
import { Box, Grid, Pagination } from '@mui/material';
import Logo from '../../components/main/Logo';
import SmallGroupCard from '../../components/main/SmallGroupCard';
import { useDispatch, useSelector } from 'react-redux';
import { requestSearchSmallGroup } from '../../slice/smallGroupSlice';

export default function Index() {

    const smallGroups = useSelector((state) => state.smallGroupSlice.smallGroupSearchResult.content);
    const dispatch = useDispatch();

    const searchSmallGroup = async (keyword) => {
        try {
            const param = {
                size: 9,
                page: 0,
                keyword: keyword
            }
            await dispatch(requestSearchSmallGroup(param)).unwrap();
        } catch {
            alert("검색 실패");
        }
    }

    useEffect(() => {
        searchSmallGroup("");
    }, [])

    return (
        <PageTemplate>
            <Grid container justifyContent='center'>
                <Box my={5}>
                    <Logo />
                </Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid item xs={8}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {
                                smallGroups.map((smallGroup, index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <SmallGroupCard smallGroup={smallGroup} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' my={7}>
                <Grid item>
                    <Pagination count={10} />
                </Grid>
            </Grid>
        </PageTemplate>
    )
}