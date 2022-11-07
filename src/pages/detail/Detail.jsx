import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import CardType1 from './../../components/card1/CardType1';

// Styles & Images
import style from './detail.module.scss';
import community from './../../assets/images/community-icon.svg';
import searchIcon from "./../../assets/icons/search.png";
import calendarIcon from "./../../assets/icons/calendar-logo.svg";
import guestsIcon from "./../../assets/icons/guests-icon.svg";
import arrowDownIcon from "./../../assets/icons/arrow-down.svg";
import forestIcon from "./../../assets/icons/forest-icon.svg";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Detail({ setPageNav }) {

    const { id } = useParams();
    console.log("Got it", id);


    const [tour, setTour] = useState({});
    const [allTours, setAllTours] = useState([]);
    const data = useSelector(state => state.eventsReducer.products);
    useEffect(() => {
        setAllTours(data);
        console.log("Data successfully copied to the state!");
        console.log("abc", allTours);
        console.log("cdf", data);
    }, [data]);
    console.log(data);

    // Getting specific tour data
    useEffect(() => {
        setTour(allTours.filter(a => a.id == id));
        console.log(tour);
    }, [allTours, id]);

    useEffect(() => {
        setPageNav('events');
    }, []);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const [input, setInput] = useState({});

    const takeInput = (e) => {
        setInput(e.selection);
        // console.log(e.selection.startDate.getDate());
    };

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

    const [openDateRange, setOpenDateRange] = useState(false);
    const [openGuests, setOpenGuests] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    // Guests Choosing
    const [guests, setGuests] = useState({ adults: 0, children: 0, pets: 0 });
    const increaseGuest = (guestType) => {
        if (
            (guestType === "children" || guestType === "pets") &&
            guests.adults === 0
        ) {
            guests[guestType]++;
            guests.adults++;
        } else {
            guests[guestType]++;
        }
        setGuests({ ...guests, guestType: guests[guestType] });

        // console.log("increased");
        // console.log(guests);
    };
    const decreaseGuest = (guestType) => {
        if (guests[guestType] > 0) {
            guests[guestType]--;
            if (guests.adults === 0) {
                guests.children = 0;
                guests.pets = 0;
            }
            setGuests({ ...guests, guestType: guests[guestType] });
        }
    };

    window.addEventListener('click', () => {
        setOpenDateRange(false);
        setOpenGuests(false);
        setOpenSearch(false);
    })

    return (
        <>
            <main className={`section-x padding-x ${style.detail}`}>
                <div className={style.detail2Column}>
                    <div className={style.detailContainer}>
                        <div className={style.tourSneakPeakInfo}>
                            <p>{tour[0]?.city} - {tour[0]?.title}</p>
                        </div>
                        <div className={style.tourInfo}>
                            <div className={style.tourImg} style={{backgroundImage: `url(${tour[0]?.banner})`}}></div>
                            <div className={style.tourIntro}>
                                <h1 className={style.tourTitle}>{tour[0]?.title}</h1>
                                <p className={style.tourShortDescription}>Hike and camp among otherworldly rock formations at this Utah park.</p>
                                <div className={style.visitedBy}>
                                    <img src={community} alt="community like it tho" />
                                    <p>visited by <span>{tour[0]?.visited}</span> people</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.tourAbout}>
                            <h3>About</h3>
                            <p>
                                Set in the southwestern corner of Utah, Bryce Canyon National Park is famous for its shale and sandstone rock formations, known as hoodoos or fairy chimneys, which dominate the landscape. Hiking and photography, unsurprisingly, are particularly popular activities, and the park offers a variety of trails that range from easy walks along the rim to more challenging backcountry hikes. The visitor center also offers a variety of educational programs, from ranger-led horseback rides to an interpretive film about the park’s geological history. You can even camp among the hoodoos, either at one of two campgrounds or at one of 10 backcountry campsites.
                            </p>
                        </div>
                        <div className={style.tourActivities}>
                            <h3>Activities</h3>
                            <div className={style.activitiesContainer}>
                                {
                                    tour[0]?.activities.map((activity, key) => (
                                        <div className={style.tourActivity} key={key}>
                                            <div className={style.actImg} style={{ backgroundImage: `url(${activity.image})` }}></div>
                                            <p>{activity.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={style.tourInternetInfos}>
                            <h3>Internet Information</h3>
                            <div className={style.internetContainer}>
                                {
                                    tour[0]?.internet.map((internet, key) => (
                                        <div className={style.internetInfo}>
                                            <div className={style.internetImg} style={{ backgroundImage: `url(${internet.image})` }}></div>
                                            <div className={style.intDetail}>
                                                <p className={style.intName}>{internet.name}</p>
                                                {internet.status ? (
                                                    <p className={style.usable}>&#8226; Availabe</p>
                                                ) : (
                                                    <p className={style.unusable}>Not Available</p>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        {/* <div className={style.add}>
                            <form className={style.tripSearch}>

                                <div className={style.datePick}>
                                    <p className={style.tripSearchTitle}>Dates</p>
                                    <div className={style.searchElementContainer}>
                                        <div className={style.elementIcon}>
                                            <img src={calendarIcon} alt="date" />
                                        </div>
                                        <div
                                            className={style.tripElement}
                                            type="text"
                                            onClick={(e) => { setOpenDateRange(!openDateRange); e.stopPropagation() }}
                                        >
                                            {input.startDate
                                                ? `${months[input.startDate.getMonth()]
                                                } ${input.startDate.getDate()}
                    - ${months[input.endDate.getMonth()]
                                                } ${input.endDate.getDate()}`
                                                : "Choose Date"}
                                        </div>
                                        <div
                                            className={`${style.popUpInput} ${openDateRange ? style.openElement : ""
                                                } `}
                                            onClick={(e) => e.stopPropagation()}
                                        >

                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={(item) => {
                                                    setState([item.selection]);
                                                    takeInput(item);
                                                }}
                                                moveRangeOnFirstSelection={false}
                                                ranges={state}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.whereTo}>
                                    <p className={style.tripSearchTitle}>Guests</p>
                                    <div className={style.searchElementContainer}>
                                        <div
                                            className={style.guestsInput}
                                            onClick={(e) => { setOpenGuests(!openGuests); e.stopPropagation() }}
                                        >
                                            <div className={style.elementLeft}>
                                                <div className={style.elementIcon}>
                                                    <img src={guestsIcon} alt="search" />
                                                </div>
                                                <div className={style.tripElement}>
                                                    {guests.adults + guests.children > 0
                                                        ? `${guests.adults + guests.children} guests ${guests.pets > 0 ? `, ${guests.pets} pets` : ""
                                                        }`
                                                        : "Add Guests"}
                                                </div>
                                            </div>
                                            <img
                                                className={style.arrowDown}
                                                src={arrowDownIcon}
                                                alt="open"
                                            />
                                        </div>
                                        <div
                                            className={`${style.guestsContainer} ${openGuests ? style.openElement : ""
                                                }`}
                                            onClick={(e) => { e.stopPropagation(); console.log("clickedd") }}
                                        >
                                            <div className={style.guestsItem} >
                                                <div className={style.guestsLeft}>
                                                    <p>ADULTS</p>
                                                    <p>Ages 13 or above</p>
                                                </div>
                                                <div className={style.guestsRight}>
                                                    <div
                                                        className={style.countBtn}
                                                        onClick={() => decreaseGuest("adults")}
                                                    >
                                                        -
                                                    </div>
                                                    <div className={style.guestCount}>
                                                        {guests && guests.adults}
                                                    </div>
                                                    <div
                                                        className={style.countBtn}
                                                        onClick={() => increaseGuest("adults")}
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.guestsItem}>
                                                <div className={style.guestsLeft}>
                                                    <p>CHILDREN</p>
                                                    <p>Ages 12 or below</p>
                                                </div>
                                                <div className={style.guestsRight}>
                                                    <div
                                                        className={style.countBtn}
                                                        onClick={() => decreaseGuest("children")}
                                                    >
                                                        -
                                                    </div>
                                                    <div className={style.guestCount}>
                                                        {guests && guests.children}
                                                    </div>
                                                    <div
                                                        className={style.countBtn}
                                                        onClick={() => increaseGuest("children")}
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.guestsItem}>
                                                <div className={style.guestsLeft}>
                                                    <p>Any Pets?</p>
                                                </div>
                                                <div className={style.guestsRight}>
                                                    <div
                                                        className={style.countBtn}
                                                        onClick={() => decreaseGuest("pets")}
                                                    >
                                                        -
                                                    </div>
                                                    <div className={style.guestCount}>
                                                        {guests && guests.pets}
                                                    </div>
                                                    <div
                                                        className={style.countBtn}
                                                        onClick={() => increaseGuest("pets")}
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.searchBtn}>
                                    <img src={searchIcon} alt="search" />
                                </div>
                            </form>
                        </div> */}
                    </div>
                    <div className={style.tourRecommendations}>
                        <p className={style.recTitle}>Other Recommendations</p>
                        {
                            data ? data.map((event, key) => (
                                <CardType1 title={event.title} image={event.image} price={event.price} id={event.id} key={key} />
                            )) : console.log("Events didn't load. L bozo hahaha")
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
