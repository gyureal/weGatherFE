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

    const searchSmallGroup = async (keyword, page) => {
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

    // page값이 변경될 때 마다 새로 조회하도록 해야함 (뒤로가기, 렌더링 가능)
    // react-router Route 에는 같은 컴포넌트를 보도록 되어 있기 때문에, url이 바뀌더라도 reload가 되지 않는다.
    // url 변경(파라메터)에 따라 state를 변경해 주어야 렌더링이 된다. 즉, page가 변경될 때 마다 조회 쿼리를 실행한다.
    useEffect(() => {
        searchSmallGroup("", page);
    }, [page])


    const onPaginationChange = (e, value) => {
        searchParams.set("page", value);
        navigate({
            pathname: "/smallGroups",
            search: searchParams.toString(),        // page=1
        });
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
                    <Pagination count={parseInt(totalPages)} onChange={onChange} page={page} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SmallGroupSearchContent;