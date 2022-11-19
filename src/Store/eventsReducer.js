import { createSlice } from '@reduxjs/toolkit';

// Images 
import Hiking from './../assets/images/Hiking.png';
import Wifi from './../assets/images/wifi.png';
import Wildlife from './../assets/images/wildlife.png';
import berlinBg from './../assets/images/detail-bg-temp.jpg';
import runAwayBanner from './../assets/images/runAwayBanner.webp';
import fourDirectionBanner from './../assets/images/fourDirectionBanner.webp';
import artHeartBanner from './../assets/images/artHeartBanner.webp';
import hiddenValleyBanner from './../assets/images/hiddenValleyBanner.webp';
import rhizeBanner from './../assets/images/rhizeBanner.webp';
import madridBg from './../assets/images/madridBg.jpg';
import smokeyBg from './../assets/images/smokeyAcresBg.jpg';
import runAwayBg from './../assets/images/runAwayBayLodge.webp';
import fourDirection from './../assets/images/fourDirectionBg.webp';
import artHeartBg from './../assets/images/artHeartBg.webp';
import hiddenValleyBg from './../assets/images/hiddenValleyBg.webp';
import rhizeBg from './../assets/images/rhizeBg.webp';

export const eventsReducer = createSlice({
    name: "eventsReducer",
    initialState: {
        products: [
            {
                id: 1,
                city: "Berlin",
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
                reservable: {
                    start: {
                        month: 11,
                        day: 6,
                    },
                    end: {
                        month: 11,
                        day: 25,
                    }
                },
                guests: {
                    adults: 3,
                    children: 2,
                    pets: 5,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "Whether you'd like a leisurely day on the river or an adventure in the Gulf, there are plenty of boating options nearby. Be sure to make it back to the property in time to enjoy amazing sunsets that bring peace and tranquility to your experience. Down a hidden gravel drive with wetlands on either side you will find a completely fenced in field surrounded by pine, oak, and swamp maple trees. There are two ponds located on the property both stocked with bass, bluegill, and sunfish. The front pond is home to many natural Florida wildlife and is a great location to bird watch. The property is also home to several sheep and Pency the Llama. ",
            },
            {
                id: 2,
                city: "Madrid",
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
                        status: false,
                        image: Wifi,
                    },
                ],
                reservable: {
                    start: {
                        month: 11,
                        day: 6,
                    },
                    end: {
                        month: 11,
                        day: 25,
                    }
                },
                guests: {
                    adults: 3,
                    children: 2,
                    pets: 1,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "Whether you'd like a leisurely day on the river or an adventure in the Gulf, there are plenty of boating options nearby. Be sure to make it back to the property in time to enjoy amazing sunsets that bring peace and tranquility to your experience. Down a hidden gravel drive with wetlands on either side you will find a completely fenced in field surrounded by pine, oak, and swamp maple trees. There are two ponds located on the property both stocked with bass, bluegill, and sunfish. The front pond is home to many natural Florida wildlife and is a great location to bird watch. The property is also home to several sheep and Pency the Llama. ",
            },
            {
                id: 3,
                city: "Swed",
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
                        status: true,
                        image: Wifi,
                    },
                ],
                reservable: {
                    start: {
                        month: 11,
                        day: 2,
                    },
                    end: {
                        month: 11,
                        day: 25,
                    }
                },
                guests: {
                    adults: 3,
                    children: 2,
                    pets: 1,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "Withlacoochee State Park and other natural preserves with trail access and kayaking are only a short distance away, and Dames Cave, Homosassa Springs, and Chasawiska Springs are all within a ~20-minute drive as well. Spending a day at the beach is easy with plenty of options along the Nature Coast. We’re also less than an hour from Tampa and Clearwater and two hours from Orlando. A perfect weekend get-away for anyone looking to “unplug,” Smokey Acres is also a great stop for those passing through the area. We are a close distance to many racing, livestock, boating and fishing events. We have no problem accommodating whatever you’re towing!"
            },
            {
                id: 4,
                city: "Florida",
                title: "Smokey Acres",
                image: smokeyBg,
                banner: berlinBg,
                price: 36.5,
                type: "City",
                features: ["Sports", "Photography"],
                visited: 348,
                activities: [
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
                reservable: {
                    start: {
                        month: 12,
                        day: 2,
                    },
                    end: {
                        month: 12,
                        day: 15,
                    }
                },
                guests: {
                    adults: 2,
                    children: 2,
                    pets: 0,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "Set in the southwestern corner of Utah, Bryce Canyon National Park is famous for its shale and sandstone rock formations, known as hoodoos or fairy chimneys, which dominate the landscape.Hiking and photography, unsurprisingly, are particularly popular activities, and the park offers a variety of trails that range from easy walks along the rim to more challenging backcountry hikes.The visitor center also offers a variety of educational programs, from ranger- led horseback rides to an interpretive film about the park’s geological history.You can even camp among the hoodoos, either at one of two campgrounds or at one of 10 backcountry campsites.",
            },
            {
                id: 5,
                city: "Florida",
                title: "Runaway Bay Lodge",
                image: runAwayBg,
                banner: runAwayBanner,
                price: 27,
                type: "City",
                features: ["Activities for group"],
                visited: 109,
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
                reservable: {
                    start: {
                        month: 11,
                        day: 19,
                    },
                    end: {
                        month: 12,
                        day: 10,
                    }
                },
                guests: {
                    adults: 2,
                    children: 2,
                    pets: 0,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "We have 4 separate units on our property, including 2 cabins and 2 yurts, Each cabin and yurt is set up with only one bed, in each. We are a perfect spot for solo journeyers and couples. Larger groups can rent multiple units. We also host 3rd party retreats for up to 12 total guests. We offer our exclusive Magic M Meditations, Yoga, Plant Based Meal Options, Reiki, Moxibustion, Kundalini and Tantric Energy work and other spiritual services and Retreats, Boat Tours and Boat Rentals.",
            },
            {
                id: 6,
                city: "Portalnd",
                title: "Four Directions Retreat",
                image: fourDirection,
                banner: fourDirectionBanner,
                price: 18,
                type: "City",
                features: ["Photography"],
                visited: 199,
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
                        status: false,
                        image: Wifi,
                    },
                ],
                reservable: {
                    start: {
                        month: 11,
                        day: 19,
                    },
                    end: {
                        month: 11,
                        day: 28,
                    }
                },
                guests: {
                    adults: 4,
                    children: 2,
                    pets: 3,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "Come relax and enjoy the amazing energy of Four Directions Retreat, where we provide beautiful campsites, an amazing outdoor stage and a cute tiny cabin. We offer hiking, mountain biking and spend time with our adorable goats! We have a meadow and forested camping options. Our beautiful property features a 40 year old Douglas Fir forest and a spacious meadow which is stunning in the spring with wild grasses and beautiful flowers. During the summer you can take a break from the heat or just relax amongst the huge ferns, Douglas Fir, Western Cedar and Alder trees. You can also take in some fresh air and forest views while hiking around the trails on the property. ",
            },
            {
                id: 7,
                city: "Houston",
                title: "Art & Heart",
                image: artHeartBg,
                banner: artHeartBanner,
                price: 18,
                type: "In the Nature",
                features: ["Activities for group", "Photography", "Sports"],
                visited: 449,
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
                reservable: {
                    start: {
                        month: 11,
                        day: 19,
                    },
                    end: {
                        month: 12,
                        day: 28,
                    }
                },
                guests: {
                    adults: 2,
                    children: 2,
                    pets: 3,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "I moved a historic home to this property in 2005 and then realized that I missed the interaction with humanity, so I began hosting art events and bringing people onto the property to share my time and interests with. Hipcamp is just one more avenue that I will utilize to meet new people from around the area and around the world!I moved a historic home to this property in 2005 and then realized that I missed the interaction with humanity, so I began hosting art events and bringing people onto the property to share my time and interests with. Hipcamp is just one more avenue that I will utilize to meet new people from around the area and around the world! ",
            },
            {
                id: 8,
                city: "Maine",
                title: "Hidden Valley Nature Center",
                image: hiddenValleyBg,
                banner: hiddenValleyBanner,
                price: 29,
                type: "In the Nature",
                features: ["Photography"],
                visited: 73,
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
                reservable: {
                    start: {
                        month: 11,
                        day: 19,
                    },
                    end: {
                        month: 12,
                        day: 28,
                    }
                },
                guests: {
                    adults: 2,
                    children: 4,
                    pets: 0,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "Miles of multi-use trails great for hiking and biking, rolled and groomed XC ski trails, and several rustic huts and tent sites are waiting for you. Hidden Valley Nature Center (HVNC) is your forest. HVNC is part of Midcoast Conservancy, and a portion of the booking fees goes to support our mission to protect and restore vital lands and waters on a scale that matters. ",
            },
            {
                id: 9,
                city: "Colorado",
                title: "Rhize Mountain Retreat",
                image: rhizeBg,
                banner: rhizeBanner,
                price: 42,
                type: "In the Nature",
                features: ["Party Places"],
                visited: 73,
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
                reservable: {
                    start: {
                        month: 11,
                        day: 19,
                    },
                    end: {
                        month: 12,
                        day: 23,
                    }
                },
                guests: {
                    adults: 5,
                    children: 3,
                    pets: 2,
                },
                guestsWill: {
                    adults: 0,
                    children: 0,
                    pets: 0,
                },
                reserved: {
                    start: {
                        month: 0,
                        day: 0,
                    },
                    end: {
                        month: 0,
                        day: 0,
                    }
                },
                totalPrice: 0,
                about: "All of our cabins have comfy sleeping accommodations...you only need to bring your pillow and sleeping bag!  A-frames are set up with a solar light, 5 gallon igloos of fresh spring water, Indian blankets and deck chairs. If you need any additional camping equipment like single burner stoves, sleeping gear, camp heaters, etc., they are available under extras for a small fee. ",
            },
        ]
    },
reducers: {

}
})

export default eventsReducer.reducer;
