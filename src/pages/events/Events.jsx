import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import CardType1 from "../../components/card1/CardType1";

// Images & Styles
import style from './events.module.scss';
import searchIcon from "./../../assets/icons/search.png";
import calendarIcon from "./../../assets/icons/calendar-logo.svg";
import guestsIcon from "./../../assets/icons/guests-icon.svg";
import arrowDownIcon from "./../../assets/icons/arrow-down.svg";
import forestIcon from "./../../assets/icons/forest-icon.svg";
import brandLogo from './../../assets/images/logoVector/default-monochrome-white.svg'
import watchIcon from './../../assets/icons/watch-icon.svg';
import closeIcon from './../../assets/icons/x-mark.svg';


import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Events({ setPageNav }) {

    function valuetext(value) {
        return `${value}`;
    }

    const [value, setValue] = React.useState([0, 120]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    </div>
                </div>
                <div className={style.eventsContent}>
                    <div className={`section-x padding-x ${style.eventsContentWrapper}`}>
                        <div className={style.eventsFilter}>
                            <div className={style.filterContent}>
                                <h1 className={style.filterGeneralTitle}>Filter By</h1>
                                <div className={style.filterElement}>
                                    <h2 className={style.filterTitle}>Site types</h2>
                                    <div className={style.filterTypes}>
                                        <input checked type="radio" name="siteTypes" id="test" />
                                        <label htmlFor="test">All</label>
                                        <input type="radio" name="siteTypes" id="test2" />
                                        <label htmlFor="test2">In the Nature</label>
                                    </div>
                                </div>
                                <div className={style.filterDivider}></div>
                                <div className={style.filterElement}>
                                    <h2 className={style.filterTitle}>Price range</h2>
                                    <div className={style.filterPriceRange}>
                                        <div className={style.subTitle}>
                                            <p>Min</p>
                                            <p>Max</p>
                                        </div>
                                        <Slider
                                            className={style.priceRange}
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            max={375}
                                            getAriaValueText={valuetext}
                                        />
                                    </div>
                                </div>
                                <div className={style.filterDivider}></div>
                                <div className={style.filterElement}>
                                    <h2 className={style.filterTitle}>Tour Features</h2>
                                    <div className={style.filterFeatures}>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" name="ftest1" id="ftest1" />
                                            <label htmlFor="ftest1"><div className={style.custom}></div> Photography</label>
                                        </div>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" name="ftest2" id="ftest2" />
                                            <label htmlFor="ftest2"><div className={style.custom}></div> Sports</label>
                                        </div>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" name="ftest3" id="ftest3" />
                                            <label htmlFor="ftest3"><div className={style.custom}></div> Party places</label>
                                        </div>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" name="ftest4" id="ftest4" />
                                            <label htmlFor="ftest4"><div className={style.custom}></div> Activities for group</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.eventsResult}>
                            <div className={style.resultTop}>
                                <p className={style.found}>3 Campgrounds found</p>
                                <div className={style.resultExtraFilter}>
                                    <div className={style.tags}>
                                        <div className={style.tag}>
                                            <p>RV Sites</p>
                                            <div className={style.close}>
                                                <img src={closeIcon} alt="close" />
                                            </div>
                                        </div>
                                        <div className={style.tag}>
                                            <p>Camping</p>
                                            <div className={style.close}>
                                                <img src={closeIcon} alt="close" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.sorted}>
                                        <p>Sorted by: </p>
                                        <select name="sortBy" id="sortBy">
                                            <option value="popular">Popular</option>
                                            <option value="lowToHight">Price(Low to High)</option>
                                            <option value="highToLow">Price(High to Low)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={style.resultContainer}>
                                <CardType1 />
                                <CardType1 />
                                <CardType1 />
                                <CardType1 />
                                <CardType1 />
                                <CardType1 />
                                <CardType1 />
                                <CardType1 />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
