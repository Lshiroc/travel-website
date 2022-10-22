import { createSlice } from '@reduxjs/toolkit';

export const eventsReducer = createSlice({
    name: "eventsReducer",
    initialState: {
        products: [
            {
                id: 1,
                title: "Berlin Nature",
                image: "https://www.sa-venues.com/visit/platbosforest/26g.jpg",
                price: 34,
                type: "In the Nature",
                features: ["Sports"],
            },
            {
                id: 2,
                title: "Madrid Camp",
                image: "https://www.campingintheforest.co.uk/images/default-source/campsite-images/setthorns/setthorns-01.jpg?sfvrsn=c13e0071_2",
                price: 56,
                popular: true, 
                type: "In the Nature",
                features: ["Party Places", "Photography"],
            },
            {
                id: 3,
                title: "Swed Build",
                image: "https://www.ubuy.hu/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFuOENMMmUxdEwuX0FDX1NMMTAwMF8uanBn.jpg",
                price: 23,
                type: "City",
                features: ["Activities for Group"]
            },
        ]
    },
    reducers: {

    }
})

export default eventsReducer.reducer;
