import { useEffect, useState } from 'react';

// Images & Styles
import style from './events.module.scss';
import searchIcon from "./../../assets/icons/search.png";
import calendarIcon from "./../../assets/icons/calendar-logo.svg";
import guestsIcon from "./../../assets/icons/guests-icon.svg";
import arrowDownIcon from "./../../assets/icons/arrow-down.svg";
import forestIcon from "./../../assets/icons/forest-icon.svg";
import brandLogo from './../../assets/images/logoVector/default-monochrome-white.svg'
import watchIcon from './../../assets/icons/watch-icon.svg';


import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Events({ setPageNav }) {
    useEffect(() => {
        setPageNav('events');
    }, [])

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
        console.log(e.selection.startDate.getDate());
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

        console.log("increased");
        console.log(guests);
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
            <main className={style.events}>
                <div className={`section-x padding-x ${style.eventsTop}`}>
                    <div className={`section-x ${style.eventMainFilter}`}>
                        <form className={style.tripSearch}>
                            <div className={style.whereTo}>
                                <p className={style.tripSearchTitle}>Where To?</p>
                                <div className={style.searchElementContainer}>
                                    <div
                                        className={style.searchInput}
                                        onClick={() => setOpenSearch(!openSearch)}
                                    >
                                        <div className={style.elementIcon}>
                                            <img src={searchIcon} alt="search" />
                                        </div>
                                        <input
                                            className={style.tripElement}
                                            type="text"
                                            placeholder="Try California Park..."
                                            onClick={(e) => { setOpenSearch(!openSearch); e.stopPropagation() }}
                                        />
                                    </div>
                                    <div
                                        className={`${style.searchResults} ${openSearch ? style.openElement : ""
                                            }`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className={style.searchRecommendation}>
                                            <div className={style.searchIcon}>
                                                <img src={forestIcon} alt="icon" />
                                            </div>
                                            <p>Forests</p>
                                        </div>
                                        <div className={style.searchRecommendation}>
                                            <div className={style.searchIcon}>
                                                <img src={forestIcon} alt="icon" />
                                            </div>
                                            <p>Forests</p>
                                        </div>
                                        <div className={style.searchRecommendation}>
                                            <div className={style.searchIcon}>
                                                <img src={forestIcon} alt="icon" />
                                            </div>
                                            <p>Forests</p>
                                        </div>
                                        <div className={style.searchRecommendation}>
                                            <div className={style.searchIcon}>
                                                <img src={forestIcon} alt="icon" />
                                            </div>
                                            <p>Forests</p>
                                        </div>
                                        <div className={style.searchRecommendation}>
                                            <div className={style.searchIcon}>
                                                <img src={forestIcon} alt="icon" />
                                            </div>
                                            <p>Forests</p>
                                        </div>
                                        <div className={style.searchRecommendation}>
                                            <div className={style.searchIcon}>
                                                <img src={forestIcon} alt="icon" />
                                            </div>
                                            <p>Forests</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            : "choose smth else"}
                                    </div>
                                    <div
                                        className={`${style.popUpInput} ${openDateRange ? style.openElement : ""
                                            } `}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* <div className={style.popUpClose}>
                      <p>Date</p>
                      <div
                        className={style.closeBtn}
                        onClick={() => setOpenDateRange(!openDateRange)}
                      >
                        <img src={xMark} alt="close" />
                      </div>
                    </div> */}
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
                    </div>
                </div>
                <div className={style.eventsContent}>
                    <div className={`section-x padding-x ${style.eventsContentWrapper}`}>
                        <div className={style.eventsFilter}>
                            <h1>fucking Filter</h1>
                        </div>
                        <div className={style.eventsResult}>
                            <h1>Fucking event results</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
