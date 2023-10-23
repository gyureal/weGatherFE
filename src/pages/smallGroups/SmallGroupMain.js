import React from 'react'
import { useParams } from 'react-router-dom'
import SmallGroupBase from '../../components/smallGroups/base/SmallGroupBase';

function SmallGroupMain() {

    const groupPath = useParams();

    return (
        <SmallGroupBase>
            <div>main</div>

        </SmallGroupBase>
    )
}

export default SmallGroupMain