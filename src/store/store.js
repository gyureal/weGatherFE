import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { authSlice } from '../slice/authSlice';
import { memberSlice } from '../slice/memberSlice';
import { interestSlice } from '../slice/interestSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        authSlice: authSlice.reducer,
        memberSlice: memberSlice.reducer,
        interestSlice: interestSlice.reducer
    }
});

export default store;