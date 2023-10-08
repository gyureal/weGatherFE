import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { accountSlice } from '../slice/accountSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        accountSlice: accountSlice.reducer
    }
});

export default store;