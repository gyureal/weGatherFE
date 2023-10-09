import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { authSlice } from '../slice/authSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        authSlice: authSlice.reducer
    }
});

export default store;