import { createSlice } from '@reduxjs/toolkit';

export const statesReducer = createSlice({
    name: "statesReducer",
    initialState: {
        toggleMenu: false,
    },
    reducers: {
        changeStateBool: (state, action) => {
            state[action.payload.toggleName] = action.payload.value;
        }
    }
})

export default statesReducer.reducer;
export const { changeStateBool } = statesReducer.actions;