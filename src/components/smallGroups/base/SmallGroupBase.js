import React from 'react'
import PageTemplate from '../../common/Template/pageTemplate/pageTemplate';
import SmallGroupMenu from './SmallGroupMenu';
import Banner from './Banner';
import SmallGroupInfo from './SmallGroupInfo';
import { Grid } from '@mui/material';

function SmallGroupBase({ children }) {

    return (
        <PageTemplate>
            <Banner />
            <SmallGroupInfo />
            <SmallGroupMenu />
            {children}

        </PageTemplate>
    )
}

export default SmallGroupBase;