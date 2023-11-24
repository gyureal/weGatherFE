import React, { useEffect } from 'react'
import PageTemplate from '../../common/Template/pageTemplate/pageTemplate';
import SmallGroupMenu from './SmallGroupMenu';
import Banner from './Banner';
import SmallGroupInfo from './SmallGroupInfo';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetSmallGroup, requestGetSmallGroupInterests } from '../../../slice/smallGroupSlice';
import { useNavigate, useParams } from 'react-router-dom';

const SmallGroupBase = ({ children }) => {

    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);
    console.log(smallGroup);
    const smallGroupInterests = useSelector((state) => state.smallGroupSlice.smallGroupInterests);

    const { path } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getSmallGroup = async (path) => {
        try {
            await dispatch(requestGetSmallGroup(path)).unwrap();
        } catch {
            alert("조회에 실패했습니다.");
            navigate("/");
        }
    }
    const getSmallGroupInterests = async () => {
        try {
            await dispatch(requestGetSmallGroupInterests(path)).unwrap;
        } catch {
            alert("error");
        }
    }

    useEffect(() => {
        getSmallGroup(path);
        getSmallGroupInterests();
    }, []);

    return (
        <PageTemplate>

            {smallGroup && smallGroup.useBanner && <Banner />}
            <SmallGroupInfo smallGroup={smallGroup} />
            <SmallGroupMenu groupPath={path} />
            {children}

        </PageTemplate>
    )
}

export default SmallGroupBase;