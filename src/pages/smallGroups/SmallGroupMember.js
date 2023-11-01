import React from 'react'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase'
import { useParams } from 'react-router-dom';

function SmallGroupMember() {
    const { path } = useParams();

    return (
        <SmallGroupBase path={path}>
        </SmallGroupBase>
    )
}

export default SmallGroupMember