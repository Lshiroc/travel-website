import { createSlice } from '@reduxjs/toolkit';

// Images 
import Hiking from './../assets/images/Hiking.png';
import Wifi from './../assets/images/wifi.png';
import Wildlife from './../assets/images/wildlife.png';
import berlinBg from './../assets/images/detail-bg-temp.jpg';
import madridBg from './../assets/images/madridBg.jpg';

export const eventsReducer = createSlice({
    name: "eventsReducer",
    initialState: {
        products: [
            {
                id: 1,
                upPlace: "Berlin",
                title: "Berlin Nature",
                image: "https://www.sa-venues.com/visit/platbosforest/26g.jpg",
                banner: berlinBg,
                price: 34,
                type: "In the Nature",
                features: ["Sports"],
                visited: 234,
                activities: [
                    {
                        name: "Hiking",
                        image: Hiking,
                    },
                    {
                        name: "Wildlife Watching",
                        image: Wildlife,
                    },
                ],
                internet: [
                    {
                        name: "WIFI",
                        status: true,
                        image: Wifi,
                    },
                ],
                reservable: [
                    {
                        start: {
                            month: 10,
                            day: 6,
                        },
                        end: {
                            month: 10,
                            end: 25,
                        }
                    }
                ]
            },
            {
                id: 2,
                upPlace: "Madrid",
                title: "Madrid Camp",
                image: "https://www.campingintheforest.co.uk/images/default-source/campsite-images/setthorns/setthorns-01.jpg?sfvrsn=c13e0071_2",
                banner: madridBg,
                price: 56,
                popular: true, 
                type: "In the Nature",
                features: ["Party Places", "Photography"],
                visited: 138,
                activities: [
                    {
                        name: "Wildlife Watching",
                        image: Wildlife,
                    },
                ],
                internet: [
                    {
                        name: "WIFI",
                        staus: false,
                        image: Wifi,
                    },
                ],
            },
            {
                id: 3,
                upPlace: "Swed",
                title: "Swed Build",
                image: "https://www.ubuy.hu/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFuOENMMmUxdEwuX0FDX1NMMTAwMF8uanBn.jpg",
                banner: berlinBg,
                price: 23,
                type: "City",
                features: ["Activities for group"],
                visited: 78,
                activities: [],
                internet: [
                    {
                        name: "WIFI",
                        staus: true,
                        image: Wifi,
                    },
                ],
            },
        ]
    },
    reducers: {

    }
})

export default eventsReducer.reducer;
