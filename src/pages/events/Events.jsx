import React, { useEffect, useState, useRef } from 'react';
import CardType1 from "../../components/card1/CardType1";
import { useSelector } from 'react-redux';

// Images & Styles
import style from './events.module.scss';
import searchIcon from "./../../assets/icons/search.png";
import calendarIcon from "./../../assets/icons/calendar-logo.svg";
import guestsIcon from "./../../assets/icons/guests-icon.svg";
import arrowDownIcon from "./../../assets/icons/arrow-down.svg";
import forestIcon from "./../../assets/icons/forest-icon.svg";
import closeIcon from './../../assets/icons/x-mark.svg';
import xMark from './../../assets/icons/x-mark.svg';

// External Components
import Slider from '@mui/material/Slider';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Events({ setPageNav }) {

    const data = useSelector(state => state.eventsReducer.products);
    const [backupData, setData] = useState([]);
    useEffect(() => {
        setResult(data);
        setData(data);
        console.log("Data successfully copied to the state!");
        console.log("abc", result)
        console.log("cdf", data);
    }, [data]);

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
        console.log("Lmaooooooo its mt timeee", e.selection);
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

    // Function for Filtering 

    // Here we go.. right into the hell
    // God bless me and give luck to me

    const sortFilter = (sort) => {
        console.log(sort);
        switch (sort) {
            case "highToLow":
                console.log("hmm");
                setResult([...result].sort((a, b) => b.price - a.price));
                break;
            case "lowToHigh":
                setResult([...result].sort((a, b) => a.price - b.price));
                break;
        }
    }

    const typeFilter = (type) => {

    }


    const [errmsg, setErrMsg] = useState(false);
    const [result, setResult] = useState([]);

    const [filterSettings, setFilterSettings] = useState({});

    const rangeInput = useRef();
    const [priceRange, setPriceRange] = useState(230);

    const [tourType, setTourType] = useState('All');

    const [features, setFeatures] = useState([]);
    const featuresTotal = useRef();
    const feature1 = useRef();
    const feature2 = useRef();
    const feature3 = useRef();
    const feature4 = useRef();
    // const getFeatures = (e) => {

    //     if(!features.includes(e.target.value)) {
    //         setFeatures([...features, e.target.value]);
    //     }

    //     console.log("Features pulled: ", features);
    // }

    const [featuresResult, setFeaturesResult] = useState([]);
    const [priceResult, setPriceResult] = useState([]);
    const [typeResult, setTypeResult] = useState([]);
    const [startFilter, setStartFilter] = useState(false);

    const handleFeatures = (e) => {
        console.log(e.target.checked);
        if (features.includes(e.target.value)) {
            console.log(features.indexOf(e.target.value));
            setFeatures(features.filter(a => a !== e.target.value).sort());
        } else {
            setFeatures([...features, e.target.value].sort());
        }

        console.log("version2", features);
    }

    const removeTag = (tagValue) => {
        setFeatures(features.filter(a => a != tagValue));
        console.log("REMOVED", tagValue);
        console.log(features);
        setFeatures[features.filter(a => a !== tagValue)];
        for (let i = 0; i < featuresTotal.current.children.length; i++) {
            if (featuresTotal.current.children[i].children[0].value === tagValue) {
                featuresTotal.current.children[i].children[0].checked = false;
            }
        }
    }

    useEffect(() => {
        console.log(features);
    }, [features])

    const filterAll = () => {
        // setResult([]);
        // Getting Tour Types: 

        // Getting Features:

        // setFeatures([]);
        // if (!features.includes(feature1.current.value) && feature1.current.checked) {
        //     setFeatures([...features, feature1.current.value]);
        // }
        // if (!features.includes(feature2.current.value) && feature2.current.checked) {
        //     setFeatures([...features, feature2.current.value]);
        // }
        // if (!features.includes(feature3.current.value) && feature3.current.checked) {
        //     setFeatures([...features, feature3.current.value]);
        // }
        // if (!features.includes(feature4.current.value) && feature4.current.checked) {
        //     setFeatures([...features, feature4.current.value]);
        // }

        console.log("pulled features: ", features);
        // console.log("got the types: ", tourType);

        // // Filtering

        // /// Filtering the types
        // setTypeResult(data.filter(a => a.type === tourType))
        // // .then(() => {
        //     // console.log(result, features, tourType);
        //     console.log("typeResult", typeResult);
        //     // if(features !== null) {
        //     //     setFeaturesResult([...result].filter(a => a.features === features));
        //     //     console.log("ffs", featuresResult);
        //     // }
        // // })
        // // .then(() => {
        //     console.log("priceRange:", priceRange);
        //     setPriceResult([...typeResult].filter(a => a.price <= priceRange));
        //     console.log("price", priceResult);
        //     // })
        // // .then(() => {
        //     setResult(priceResult);
        // // })
        // // if (features[0] !== undefined) {
        // //     setResult([...result].filter(a => a.features === features));
        // // }
        // // console.log("test: ", priceRange);
        // // setResult([...result].filter(a => a.price <= priceRange));
        // console.log("****DONE****");

        console.log(" ");
        console.log("*************************");

        setResult((tourType === "All" ? (primaryFilter ? primaryResult : data) : (primaryFilter ? primaryResult : data).filter(a => a.type === tourType)).filter(a => a.price <= priceRange).filter((a) => {
            console.log("dsds a features", a.features);
            console.log("features", features);

            if (features.length !== 0) {
                if (JSON.stringify(a.features) == JSON.stringify(features)) {
                    console.log("found");
                    return a;
                }
            } else {
                console.log("denied")
                return a;
            }
        }));
        console.log("*************************");
        console.log(" ");
        setStartFilter(!startFilter);
        console.log("tour type", tourType);
    }

    // useEffect(() => {
    //     console.log(" ");
    //     console.log("*************************");
    //     setFeatures([]);
    //     setTypeResult(data.filter(a => a.type === tourType));
    //     console.log("typeResult", typeResult);
    //     console.log("priceRange:", priceRange);
    //     setPriceResult([...typeResult].filter(a => a.price <= priceRange));
    //     console.log("price", priceResult);
    //     setResult(priceResult);
    //     console.log("Done!");
    //     console.log("*************************");
    //     console.log(" ");
    // }, [startFilter])


    // rangeInput.current.addEventListener('change', (e) => {
    //     console.log("changed mffffs")
    // })


    // useEffect(() => {
    //     rangeInput.current.addEventListener("click", (e) => {
    //         console.log("clicked to slider mffff2",e.target);
    //     })
    // }, [rangeInput.current])


    // const getRangeValue = (e) => {
    //     setFilterSettings({...filterSettings, priceRange: e});
    // }


    // useEffect(() => {
    //     console.log(filterSettings);
    // }, [filterSettings]);

    // Search by Search Bar
    const [openMobileFilter, setOpenMobileFilter] = useState(false);
    const [primaryResult, setPrimaryResult] = useState([]);
    const [primaryFilter, setPrimaryFilter] = useState(false);
    const searchBy = () => {
        // Working on it....
        console.log(guests);
        console.log("cheeky filter worked!");
        // console.log(input.startDate.getMonth(), input.startDate.getDate(), input.endDate.getMonth(), input.endDate.getDate());
        if (input.startDate === undefined || guests.adults === 0) {
            setErrMsg(true)
        } else {
            // setResult((cities !== "" ? backupData.filter(a => a.city === cityInput) : backupData).filter((tour) => ((tour.reservable.start.month - 1) <= input.startDate.getMonth()) && ((tour.reservable.end.month - 1) >= input.endDate.getMonth()) && (tour.reservable.start.day <= input.startDate.getDate()) && (tour.reservable.end.day >= input.endDate.getDate())).filter((tour) => tour.guests.adults >= guests.adults && tour.guests.children >= guests.children && tour.guests.pets >= guests.pets));
            setResult((cityInput !== "" ? backupData.filter(a => a.city === cityInput) : [...backupData]).filter((tour) => ((tour.reservable.start.month - 1) <= input.startDate.getMonth()) && ((tour.reservable.end.month - 1) >= input.endDate.getMonth()) && (tour.reservable.start.day <= input.startDate.getDate()) && (tour.reservable.end.day >= input.endDate.getDate())).filter((tour) => tour.guests.adults >= guests.adults && tour.guests.children >= guests.children && tour.guests.pets >= guests.pets));
            setPrimaryResult((cityInput !== "" ? backupData.filter(a => a.city === cityInput) : backupData).filter((tour) => ((tour.reservable.start.month - 1) <= input.startDate.getMonth()) && ((tour.reservable.end.month - 1) >= input.endDate.getMonth()) && (tour.reservable.start.day <= input.startDate.getDate()) && (tour.reservable.end.day >= input.endDate.getDate())).filter((tour) => tour.guests.adults >= guests.adults && tour.guests.children >= guests.children && tour.guests.pets >= guests.pets));
            console.log("cities", cities)
            console.log("data filtered", data);
            console.log("****", result);
            setErrMsg(false);
        }

        setPrimaryFilter(true);
    }

    // Searching for places (manual)
    const [cities, setCities] = useState([]);
    const searchCity = (e) => {
        console.log("Intitial Value: ", cities);
        console.log("typed", e.target.value);
        setCities(backupData.filter((a) => a.city.toLowerCase().includes(e.target.value.toLowerCase())));

        console.log("Exp Value: ", cities);
    }

    const [cityInput, setCityInput] = useState("");
    const cityInputElement = useRef();
    const chooseCity = (city) => {
        cityInputElement.current.value = city;
        setCityInput(city);
        console.log("City has chosed");
    }

    const defaultRadio = useRef();
    const cancelAll = () => {
        setPrimaryFilter(false);
        setInput([]);
        setCityInput("");
        cityInputElement.current.value = "";
        setGuests({ adults: 0, children: 0, pets: 0 });
        console.log(featuresTotal);
        for (let i = 0; i < featuresTotal.current.children.length; i++) {
            featuresTotal.current.children[i].children[0].checked = false;
        }
        setFeatures([]);
        setTourType("All");
        defaultRadio.current.checked = true;
        setPriceRange(230);
        setResult(data);
    }

    return (
        <>
            <main className={style.events}>

                <div onClick={(e) => e.stopPropagation()} className={`${style.whereTo} ${style.tripSearchNone} ${openSearch ? style.mobileWhereTo : style.tripSearchNone}`}>
                    <div className={style.tripSearchTop}>
                        <p className={style.tripSearchTitle}>Where To?</p>
                        <div className={style.searchCloseBtn} onClick={() => setOpenSearch(false)}>
                            <img src={xMark} alt="Close" />
                        </div>
                    </div>
                    <div className={style.searchElementContainer} onClick={(e) => e.preventDefault()}>
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
                                ref={cityInputElement}
                                placeholder="Try California Park..."
                                onClick={(e) => { e.stopPropagation() }}
                                onChange={(e) => searchCity(e)}
                            />
                        </div>
                        <div
                            className={`${style.searchResults} ${openSearch ? style.openElement : ""
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {
                                cities.map((city, key) => (
                                    <div className={style.searchRecommendation} key={key} onClick={() => {chooseCity(city.city); setOpenSearch(false)}}>
                                        <div className={style.searchIcon}>
                                            <img src={forestIcon} alt="icon" />
                                        </div>
                                        <p>{city.city}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={`${style.datePick} ${style.tripSearchNone} ${openDateRange ? style.mobileWhereTo : style.tripSearchNone}`} onClick={(e) => e.stopPropagation()}>
                    <div className={style.tripSearchTop}>
                        <p className={style.tripSearchTitle}>Dates</p>
                        <div className={style.searchCloseBtn} onClick={() => setOpenDateRange(false)}>
                            <img src={xMark} alt="Close" />
                        </div>
                    </div>
                    <div className={style.searchElementContainer}>
                        <div className={style.elementIcon}>
                            <img src={calendarIcon} alt="date" />
                        </div>
                        <div
                            className={style.tripElement}
                            type="text"
                        // onClick={(e) => { setOpenDateRange(!openDateRange); e.stopPropagation() }}
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
                                className={style.datePickerStyle}
                                moveRangeOnFirstSelection={false}
                                ranges={state}
                            />
                        </div>
                    </div>
                </div>
                <div onClick={(e) => e.stopPropagation()} className={`${style.whereTo} ${style.tripSearchNone} ${openGuests ? style.mobileGuests : style.tripSearchNone}`}>
                    <div className={style.tripSearchTop}>
                        <p className={style.tripSearchTitle}>Guests</p>
                        <div className={style.searchCloseBtn} onClick={() => setOpenGuests(false)}>
                            <img src={xMark} alt="Close" />
                        </div>
                    </div>
                    <div className={style.searchElementContainer}>
                        <div
                            className={style.guestsInput}
                            onClick={(e) => { e.stopPropagation() }}
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
                                            ref={cityInputElement}
                                            value={cityInputElement?.current?.value}
                                            placeholder="Try California Park..."
                                            onClick={(e) => { setOpenSearch(!openSearch); e.stopPropagation() }}
                                            onChange={(e) => searchCity(e)}
                                        />
                                    </div>
                                    <div
                                        className={`${style.searchResults} ${openSearch ? style.openElement : ""
                                            }`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {
                                            cities.map((city, key) => (
                                                <div className={style.searchRecommendation} key={key} onClick={() => chooseCity(city.city)}>
                                                    <div className={style.searchIcon}>
                                                        <img src={forestIcon} alt="icon" />
                                                    </div>
                                                    <p>{city.city}</p>
                                                </div>
                                            ))
                                        }
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
                            <div className={style.searchBtn} onClick={() => searchBy()}>
                                <img src={searchIcon} alt="search" />
                            </div>
                            <div className={style.searchBtn2} onClick={() => searchBy()}>
                                Search
                            </div>
                        </form>
                        {errmsg && (<p className={style.fillMsg}>*Please fill the required spaces</p>)}
                    </div>
                </div>
                <div className={style.eventsContent}>
                    <div className={`section-x padding-x ${style.eventsContentWrapper}`}>
                        <div className={`${style.eventsFilter} ${openMobileFilter && style.showFilter}`}>
                            <div className={style.filterContent}>
                                <div className={style.filterTop}>
                                    <h1 className={style.filterGeneralTitle}>Filter By</h1>
                                    <div className={style.closeBtn} onClick={() => setOpenMobileFilter(false)}>
                                        <img src={xMark} alt="Close Filter" />
                                    </div>
                                </div>
                                <div className={style.filterElement}>
                                    <h2 className={style.filterTitle}>Site types</h2>
                                    <div className={style.filterTypes}>
                                        <input type="radio" name="siteTypes" ref={defaultRadio} id="test" defaultChecked value="All" onClick={(e) => setTourType(e.target.value)} />
                                        <label htmlFor="test">All</label>
                                        <input type="radio" name="siteTypes" id="test2" value="In the Nature" onClick={(e) => setTourType(e.target.value)} />
                                        <label htmlFor="test2">In the Nature</label>
                                        <input type="radio" name="siteTypes" id="test3" value="City" onClick={(e) => setTourType(e.target.value)} />
                                        <label htmlFor="test3">City</label>
                                    </div>
                                </div>
                                <div className={style.filterDivider}></div>
                                <div className={style.filterElement}>
                                    <h2 className={style.filterTitle}>Price range</h2>
                                    <div className={style.filterPriceRange}>
                                        <div className={style.subTitle}>
                                            <div className={style.minmaxText}>
                                                <p>Min</p>
                                                <input type="text" disabled value="0" />
                                            </div>
                                            <div className={style.minmaxText}>
                                                <p>Max</p>
                                                <input type="text" disabled value={priceRange} />
                                            </div>
                                        </div>
                                        {/* <Slider
                                            className={style.priceRange}
                                            getAriaLabel={() => 'Price range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            max={375}
                                            ref={rangeInput}
                                            getAriaValueText={valuetext}
                                            
                                        /> */}
                                        <input className={style.priceRangeInput} onChange={(e) => setPriceRange(e.target.value)} ref={rangeInput} type="range" min="0" max="230" />
                                    </div>
                                </div>
                                <div className={style.filterDivider}></div>
                                <div className={style.filterElement}>
                                    <h2 className={style.filterTitle}>Tour Features</h2>
                                    <div className={style.filterFeatures} ref={featuresTotal}>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" onChange={(e) => handleFeatures(e)} name="ftest1" id="ftest1" value="Photography" ref={feature1} />
                                            <label htmlFor="ftest1"><div className={style.custom}></div> Photography</label>
                                        </div>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" onChange={(e) => handleFeatures(e)} name="ftest2" value="Sports" id="ftest2" ref={feature2} />
                                            <label htmlFor="ftest2"><div className={style.custom}></div> Sports</label>
                                        </div>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" onChange={(e) => handleFeatures(e)} name="ftest3" value="Party Places" id="ftest3" ref={feature3} />
                                            <label htmlFor="ftest3"><div className={style.custom}></div> Party places</label>
                                        </div>
                                        <div className={style.featureItem}>
                                            <input type="checkbox" onChange={(e) => handleFeatures(e)} name="ftest4" value="Activities for group" id="ftest4" ref={feature4} />
                                            <label htmlFor="ftest4"><div className={style.custom}></div> Activities for group</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.filterDivider}></div>
                                <div className={style.filterElement}>
                                    <button onClick={() => { filterAll(); setOpenMobileFilter(false) }} className={style.showResultBtn}>Show Results</button>
                                </div>
                                <div className={style.filterElement}>
                                    <button onClick={() => { cancelAll(); setOpenMobileFilter(false) }} className={style.cancelBtn}>Cancel All Filters</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.eventsResult}>
                            <div className={style.resultTop}>
                                <p className={style.found}>{result.length} Campgrounds found</p>
                                <div className={style.resultExtraFilter}>
                                    <div className={style.tags}>
                                        <div className={style.filterBtn} onClick={() => setOpenMobileFilter(true)}>Filter</div>
                                        {tourType ?
                                            (
                                                <div className={style.tag}>
                                                    <p>{tourType}</p>
                                                </div>
                                            ) : ''
                                        }
                                        {
                                            features ? (
                                                features.map((a, index) => (
                                                    <div className={style.tag} key={index}>
                                                        <p>{a}</p>
                                                        <div className={style.close} onClick={() => removeTag(a)}>
                                                            <img src={closeIcon} alt="close" />
                                                        </div>
                                                    </div>
                                                ))
                                            ) : ''
                                        }
                                    </div>

                                    <div className={style.sorted}>
                                        <p>Sorted by: </p>
                                        <select name="sortBy" id="sortBy" onChange={(e) => sortFilter(e.target.value)}>
                                            <option value="highToLow">Price(High to Low)</option>
                                            {/* <option value="popular">Popular</option> */}
                                            <option value="lowToHigh">Price(Low to High)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={style.resultContainer}>
                                {
                                    data ? result.map((event, key) => (
                                        <CardType1 event={event} key={key} />
                                    )) : console.log("Events didn't load. L bozo hahaha")
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
