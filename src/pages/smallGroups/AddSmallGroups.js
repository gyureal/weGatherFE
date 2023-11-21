import React from 'react'
import PageTemplate from '../../components/common/Template/pageTemplate/pageTemplate'
import SmallGroupForm from '../../components/smallGroups/SmallGroupForm'
import { FormField } from '../../components/common/FormField';
import { Box, Typography } from '@mui/material';


const renderField = (field) => {
    return (
        <div>
            <FormField field={field} />
        </div>
    );
};

const AddSmallGroups = () => {
    return (
        <PageTemplate>
            <SmallGroupForm title="소모임 만들기" />
        </PageTemplate>
    )
}

export default AddSmallGroups