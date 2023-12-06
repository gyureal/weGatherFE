import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { authSlice } from '../slice/authSlice';
import { memberSlice } from '../slice/memberSlice';
import { interestSlice } from '../slice/interestSlice';
import { smallGroupSlice } from '../slice/smallGroupSlice';
import { smallGroupJoinSlice } from '../slice/smallGroupJoinSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        authSlice: authSlice.reducer,
        memberSlice: memberSlice.reducer,
        interestSlice: interestSlice.reducer,
        smallGroupSlice: smallGroupSlice.reducer,
        smallGroupJoinSlice: smallGroupJoinSlice.reducer
    }
});

export default store;