import React from 'react'
import { useParams } from 'react-router-dom'
import SideMenuButtons from '../components/common/SideMenuButtons';
import PageTemplate from '../components/common/Template/pageTemplate/pageTemplate';

function Profile() {

    const { username } = useParams();

    const menuInfo = [
        { id: "profile", label: "프로필" },
        { id: "study", label: "소개" }
    ]

    return (
        <PageTemplate>
            <SideMenuButtons currentMenu="profile" menuInfo={menuInfo} />
            <div>{username}</div>
        </PageTemplate>
    )
}

export default Profile