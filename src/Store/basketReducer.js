import { createSlice } from '@reduxjs/toolkit';

export const basketReducer = createSlice({
    name: "basketReducer",
    initialState: {
        basket: [],
        badge: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            let check = state.basket.filter(e => e.id === action.payload.id);
            if(check.length === 0) {
                state.basket = [...state.basket, action.payload];
                console.log("added", state.basket);
                localStorage.setItem("basket", JSON.stringify(state.basket));
                state.badge += 1;
            } else {
                console.log("already exists");
            }
        },
        removeFromCart: (state, action) => {
           state.basket = state.basket.filter(e => e.id !== action.payload.id);
            console.log("Removed", state.basket);
            localStorage.setItem("basket", JSON.stringify(state.basket));
            state.badge -= 1;  
        },
        fill: (state, action) => {
            state.basket = JSON.parse(action.payload);
            state.badge = JSON.parse(action.payload).length;
        },
        edit: (state, action) => {
            // id
            // date
            // guests
            console.log("worked", action.payload)
            
            state.basket.map(tour => {
                if(tour.id === action.payload[0]) {
                    console.log("foundnddsdsdsdsd", action.payload[0]);
                    tour.reserved = action.payload[1];
                    tour.reserved.start.month = action.payload[1].start.month + 1;
                    tour.reserved.end.month = action.payload[1].end.month + 1;
                    delete action.payload[2].guestType;
                    tour.guestsWill = action.payload[2];
                }
            })
        }
    }
})

export default basketReducer.reducer;
export const { addToCart, removeFromCart, fill, edit } = basketReducer.actions;
