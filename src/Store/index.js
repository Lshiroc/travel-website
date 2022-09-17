import { configureStore } from '@reduxjs/toolkit';
import statesReducer from './statesReducer.js';

export default configureStore({
    reducer: {
        statesReducer,
    }
})
