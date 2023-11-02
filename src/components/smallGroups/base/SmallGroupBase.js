import React, { useEffect } from 'react'
import PageTemplate from '../../common/Template/pageTemplate/pageTemplate';
import SmallGroupMenu from './SmallGroupMenu';
import Banner from './Banner';
import SmallGroupInfo from './SmallGroupInfo';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetSmallGroup } from '../../../slice/smallGroupSlice';
import { useNavigate, useParams } from 'react-router-dom';

function SmallGroupBase({ children }) {

    const smallGroup = useSelector((state) => state.smallGroupSlice.smallGroup);
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

    useEffect(() => {
        getSmallGroup(path);
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