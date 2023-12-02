import { Box, Grid, Pagination } from '@mui/material'
import React, { useEffect } from 'react'
import SmallGroupCard from '../main/SmallGroupCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { requestSearchSmallGroup } from '../../slice/smallGroupSlice';

const SmallGroupSearchContent = () => {

    const smallGroups = useSelector((state) => state.smallGroupSlice.smallGroupSearchResult.content);
    const totalPages = useSelector((state) => state.smallGroupSlice.smallGroupSearchResult.totalPages);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page")) ?? 1;

    const searchSmallGroup = async (keyword) => {
        try {
            const param = {
                size: 9,
                page: page - 1, // 백엔드는 0부터 시작
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

    const onPaginationChange = (e, value) => {
        searchParams.set("page", value);
        navigate({
            pathname: "/smallGroups",
            search: searchParams.toString(),        // page=1
        });
        navigate(0);
    }


    const onChange = (e, value) => {
        onPaginationChange(e, value);
    }

    return (
        <Box>
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
                    <Pagination count={parseInt(totalPages) + 1} onChange={onChange} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallGroupSearchContent;