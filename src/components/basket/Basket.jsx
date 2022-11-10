import { React, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit, basketWindowChange } from './../../Store/basketReducer.js';

// Styles & Images
import style from './basket.module.scss';
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

export default function Basket() {

  function valuetext(value) {
    return `${value}`;
  }

  const [value, setValue] = useState([0, 120]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [input, setInput] = useState({});

  const takeInput = (e) => {
    setInput(e.selection);
    console.log("Lmaooooooo its mt timeee", e.selection);
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
    console.log(guests);
    console.log("tempTour", tempTour);

    if ((guestType === "children" || guestType === "pets") && guests.adults === 0) {
      setGuests({ ...guests, adults: guests.adults + 1, [guestType]: guests[guestType] + 1 });
    } else if (tempTour.guests[guestType] > guests[guestType]) {
      setGuests({ ...guests, [guestType]: guests[guestType] + 1 })
      console.log("increased", guestType);
    } else {
      console.log("F")
    }
    // setGuests({ ...guests, guestType: guests[guestType] });


    // console.log("increased");
    // console.log(guests);
  };
  const decreaseGuest = (guestType) => {
    // setGuests({ ...guests, [guestType]: guests[guestType] - 1 });

    if (guests[guestType] > 0) {
      if((guests.adults - 1) === 0) {
        console.log("thanks god");
        guests.pets = 0;
        guests.children = 0;
      }
      setGuests({ ...guests, [guestType]: guests[guestType] - 1 });
      console.log("decreased");
      // setGuests({...guests, guestType: guests[guestType]})
    }
  };

  window.addEventListener('click', () => {
    setOpenDateRange(false);
    setOpenGuests(false);
    setOpenSearch(false);
  })

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];


  const { basket } = useSelector(state => state.basketReducer);
  const dispatch = useDispatch();
  const [tourWindow, setTourWindow] = useState(false);
  const [basketWindow, setBasketWindow] = useState(true);
  const [tempTour, setTempTour] = useState({});

  const openSetTour = (tour) => {
    console.log(tour);
    setBasketWindow(false);
    setTourWindow(true);
    setTempTour(tour);
  }

  const saveInfo = (id) => {
    console.log("First one", input);
    console.log("second one", guests);

    if(input.startDate !== undefined) {
      console.log(tempTour.reservable.start.month-1)
      console.log(input.startDate.getMonth())
      console.log(tempTour.reservable.start.day)
      console.log(input.startDate.getDate())
      console.log(tempTour.reservable.end.month-1)
      console.log(input.endDate.getMonth())
      console.log(tempTour.reservable.end.day)
      console.log(input.endDate.getDate())
      if(tempTour.reservable.start.month-1 <= input.startDate.getMonth() && tempTour.reservable.start.day <= input.startDate.getDate() && tempTour.reservable.end.month-1 >= input.endDate.getMonth() && tempTour.reservable.end.day >= input.endDate.getDate()) {
        console.log("acceped")
        dispatch(edit([id, {
          start: {
            month: input.startDate.getMonth(),
            day: input.startDate.getDate(),
          },
          end: {
            month: input.endDate.getMonth(),
            day: input.endDate.getDate(),
          }
        }, guests]));
    
        setInput({});
        setTourWindow(false);
        setBasketWindow(true);
      } else {
        console.log("not accepted!! bitctcctc");
      }
    } else  {
      console.log("get pack")
      dispatch(edit([id, tempTour.reserved, guests]));
  
      setInput({});
      setTourWindow(false);
      setBasketWindow(true);
    }

  }

  const cancel = () => {
    setTourWindow(false);
    setBasketWindow(true);
    setInput({});
  }

  // opening basket window

  const { isOpen } = useSelector(state => state.basketReducer);

  // useEffect(() => {
  //   setBasketWindow(isOpen);
  // }, [isOpen])


  const dateRanges = useRef();

  useEffect(() => {
    console.log(tempTour);
    if(tempTour.reserved !== undefined) {
      console.log("inputs",input);
    }
  }, [tempTour])

  return (
    <>
      <div className={style.basket}>
        <div className={style.content}>
          <div className={`${basketWindow ? (style.appear) : style.disappear}`}>
            <div className={style.top}>
              <div className={style.process}>Basket</div>
              <div className={style.close} onClick={() => dispatch(basketWindowChange())}>x</div>
            </div>
            <div className={style.main}>
              <div className={style.tours}>
                {
                  basket.map(tour => (
                    <div className={style.tour} onClick={() => openSetTour(tour)}>
                      <div className={style.tourImg} style={{ backgroundImage: `url(${tour.image})` }}></div>
                      <div className={style.tourInfo}>
                        <h3 className={style.tourTitle}>{tour.title}</h3>
                        <p className={style.tourDate}>Date: {tour.reserved ? '' : "Haven't chosen"}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={`${tourWindow ? (style.appear, style.tourSettings) : style.disappear}`}>
            <div className={style.top}>
              <div className={style.process}>back to basket</div>
              <div className={style.close}>x</div>
            </div>
            <div className={style.main}>
              <div className={style.settings}>
                <div className={style.tourTitle}>{tempTour.title}</div>
                <div className={style.tourReserve}>Reservable: {months[tempTour?.reservable?.start.month - 1]} {tempTour.reservable?.start.day} - {months[tempTour.reservable?.end.month - 1]} {tempTour.reservable?.end.day}</div>
                <div className={style.tourReserve}>Reservable: {months[tempTour?.reserved?.start.month - 1]} {tempTour.reserved?.start.day} - {months[tempTour.reserved?.end.month - 1]} {tempTour.reserved?.end.day}</div>
                <div className={style.datePick}>
                  <p className={style.tripSearchTitle}>Reserve: </p>
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
                        ref={dateRanges}
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
                <div className={style.btns}>
                  <div className={style.cancelBtn} onClick={() => cancel()}>Cancel</div>
                  <div className={style.saveBtn} onClick={() => saveInfo(tempTour?.id)}>Save</div>
                </div>
              </div>
              <div className={style.tourImg} style={{ backgroundImage: `url(${tempTour.image})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
