import { configureStore } from '@reduxjs/toolkit';
import statesReducer from './statesReducer.js';
import eventsReducer from './eventsReducer.js';
import blogReducer from './blogReducer.js';

export default configureStore({
    reducer: {
        statesReducer,
        eventsReducer,
        blogReducer,
    }
})
