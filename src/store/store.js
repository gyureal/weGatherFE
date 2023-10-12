import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { authSlice } from '../slice/authSlice';
import { memberSlice } from '../slice/memberSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        authSlice: authSlice.reducer,
        memberSlice: memberSlice.reducer
    }
});

export default store;