import { createSlice, current } from '@reduxjs/toolkit';

export const basketReducer = createSlice({
    name: "basketReducer",
    initialState: {
        basket: [],
        badge: 0,
        isOpen: false,
        isOpenSign: false,
        isOpenPay: false,
    },
    reducers: {
        addToCart: (state, action) => {
            let check = state.basket.filter(e => e.id === action.payload.id);
            if (check.length === 0) {
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

            state.basket.map(tour => {
                if (tour.id === action.payload[0]) {
                    console.log("foundnddsdsdsdsd", action.payload[0]);
                    // current(tour).reserved = action.payload[1];
                    // tour.reserved.start.month = action.payload[1].start.month + 1;
                    // tour.reserved.end.month = action.payload[1].end.month + 1;
                    // delete action.payload[2].guestType;
                    // tour.guestsWill = action.payload[2];

                    // console.log("doneee for GOD's sakeeee", current(tour));
                    
                    console.log("for gods sake wrokkk!!!", current(tour).title);
                    tour.reserved = action.payload[1];
                    tour.reserved.start.month = action.payload[1].start.month + 1;
                    tour.reserved.end.month = action.payload[1].end.month + 1;
                    delete action.payload[2].guestType;
                    tour.guestsWill = action.payload[2];
                    tour.totalPrice = action.payload[3];
                    console.log("totalPriceeee", action.payload[3]);
                    console.log(current(tour));
                    
                    // Saving to localStorage
                    // localStorage.setItem("basket", [...JSON.parse(localStorage.getItem("basket").filter(e => e.id !== action.payload[0]), current(tour)]);
                    // console.log("saved to local storage");

                    let temp = JSON.parse(localStorage.getItem("basket")).filter(a => a.id !== action.payload[0]);
                    localStorage.setItem("basket", JSON.stringify([...temp, tour]));
                    console.log("saved finally!", temp, tour);
                }
            })
        },
        basketWindowChange: (state, action) => {
            state.isOpen = !state.isOpen;
            console.log("window changes");
        },
        signWindowChange: (state, action) => {
            state.isOpenSign = !state.isOpenSign;
        },
        payWindowChange: (state, action) => {
            state.isOpenPay = !state.isOpenPay;
        },
        paid: (state, action) => {
            state.basket = [];
            state.badge = 0;
        }
    }
})

export default basketReducer.reducer;
export const { addToCart, removeFromCart, fill, edit, basketWindowChange, signWindowChange, payWindowChange, paid } = basketReducer.actions;
