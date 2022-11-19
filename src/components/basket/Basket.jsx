import { React, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { edit, basketWindowChange, removeFromCart, payWindowChange, paid, signWindowChange } from './../../Store/basketReducer.js';

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
import removeIcon from './../../assets/icons/remove-icon2.svg';

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Swal from 'sweetalert2';

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
  const [err, setErr] = useState(false);

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
      if ((guests.adults - 1) === 0) {
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
  const [payWindow, setPayWindow] = useState(false);
  const [tempTour, setTempTour] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [allPrice, setAllPrice] = useState(0);

  useEffect(() => {
    let check = 0;
    let total = 0;
    basket.filter(tour => {
      if (tour.totalPrice !== 0) {
        total = total + tour.totalPrice;
        console.log(total, tour.totalPrice);
      } else {
        check = 1;
      }
    })

    if (check !== 1) {
      setAllPrice(total)
    }
  }, [payWindow])

  const openSetTour = (tour) => {
    console.log(tour);
    setBasketWindow(false);
    setTourWindow(true);
    setPayWindow(false);
    setTempTour(tour);
  }

  const saveInfo = (id) => {
    console.log("First one", input);
    console.log("second one", guests);

    if (input.startDate !== undefined) {
      // console.log(tempTour.reservable.start.month - 1)
      // console.log(input.startDate.getMonth())
      // console.log(tempTour.reservable.start.day)
      // console.log(input.startDate.getDate())
      // console.log(tempTour.reservable.end.month - 1)
      // console.log(input.endDate.getMonth())
      // console.log(tempTour.reservable.end.day)
      // console.log(input.endDate.getDate())
      if (tempTour.reservable.start.month - 1 <= input.startDate.getMonth() && tempTour.reservable.start.day <= input.startDate.getDate() && tempTour.reservable.end.month - 1 >= input.endDate.getMonth() && tempTour.reservable.end.day >= input.endDate.getDate()) {
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
        }, guests, totalPrice]));

        setInput({});
        setTourWindow(false);
        setBasketWindow(true);
        setErr(false);
      } else {
        console.log("not accepted!! bitctcctc");
        setErr(true);
      }
    } else {
      console.log("get pack")
      dispatch(edit([id, tempTour.reserved, guests]));

      setInput({});
      setTourWindow(false);
      setBasketWindow(true);
      setPayWindow(false);
    }

  }

  const cancel = () => {
    setTourWindow(false);
    setBasketWindow(true);
    setPayWindow(false);
    setInput({});
  }

  // opening basket window

  const { isOpen } = useSelector(state => state.basketReducer);

  // useEffect(() => {
  //   setBasketWindow(isOpen);
  // }, [isOpen])


  const dateRanges = useRef();

  useEffect(() => {
    setTotalPrice(tempTour.totalPrice);
    if (tempTour.guests !== undefined) {
      setGuests(tempTour.guestsWill);
    }
    console.log("guests updated");
  }, [tempTour])

  useEffect(() => {
    if (input.startDate !== undefined) {
      // if(input.startDate.getMonth() === input.endDate.getMonth()) {
      //   setTotalPrice((input.endDate.getDate() - input.startDate.getDate())*tempTour.price);
      // } else {
      if (tempTour.totalPrice !== 0) {
        setTotalPrice(tempTour.totalPrice);
      }
      setTotalPrice(Math.ceil((input.endDate.getTime() - input.startDate.getTime()) / (1000 * 3600 * 24)) * tempTour.price)
      console.log("dammmmm time is gold", (Math.ceil(input.endDate.getTime() - input.startDate.getTime())) / (1000 * 3600 * 24))
      console.log("sas", input.startDate.getTime(), input.endDate.getTime())
      // }
    }
  }, [input]);


  const removeTour = (tour) => {
    dispatch(removeFromCart(tour));

    if (basket.length === 1) {
      dispatch(basketWindowChange(true))
      setPayWindow(false);
      setBasketWindow(false);
      setTourWindow(false);
    }
    console.log("removed")
  }

  // Go to payment

  const goPayment = () => {
    console.log("going to pay....");
  }

  const nameSurname = useRef();
  const cardNumber = useRef();
  const expirationDate = useRef();
  const cvcNumber = useRef();

  const [warn, setWarn] = useState('');

  const openPayWindow = () => {
    console.log(basket);
    let check = 0;
    basket.filter((tour) => {
      if (tour.reserved.start.month === 0 || tour.reserved.start.day === 0 || tour.reserved.end.month === 0 || tour.reserved.end.day === 0) {
        check = 1;
        setWarn("Edit " + tour.title + " correctly");
      }
    })
    if (check === 0) {
      if (localStorage.getItem("loginInfo") !== null) {
        setWarn('');
        setPayWindow(true);
        setBasketWindow(false);
        setTourWindow(false);
      } else {
        dispatch(signWindowChange());
      }
    }
  }

  const cancelPayment = () => {
    setPayWindow(false);
    setBasketWindow(true);
    setTourWindow(false);
  }

  const handleCardNumber = (e) => {
    if (!/^\d+$/.test(e.target.value.replaceAll(" ", ""))) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1)
    }

    if (e.target.value.replaceAll(" ", "").length % 4 === 0 && e.target.value.length < 19) {
      e.target.value = e.target.value.concat(" ");
      if (e.target.value.length === 1 && e.target.value === " ") {
        e.target.value = "";
      }
    }
  }

  const handleExpiration = (e) => {
    console.log(e.target.value);
    if (e.target.value.length === 2) {
      e.target.value = e.target.value.concat("/");
    }
  }

  const pay = () => {
    if (cardNumber.current.value.replace(" ", "") !== "" && expirationDate.current.value.replace(" ", "") !== "" && cvcNumber.current.value.replace(" ", "") !== "" && nameSurname.current.value.replace(" ", "") !== "") {
      console.log("paid on the way");
      Swal.fire(
        'Paid succesfully',
        'You have successfully completed payment.',
        'success'
      )
      setPayWindow(false);
      setBasketWindow(false);
      setTourWindow(false);
      dispatch(basketWindowChange());
      localStorage.removeItem("basket");
      dispatch(paid());

    } else {
      console.log("L bozo");
    }
  }

  return (
    <>
      <div className={style.basket}>
        <div className={style.content}>
          <div className={`${basketWindow ? (style.appear) : style.disappear}`}>
            <div className={style.top}>
              <div className={style.process}>Basket</div>
              <div className={style.closeBtn} onClick={() => dispatch(basketWindowChange())}>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero" /></svg>
              </div>
            </div>
            <div className={style.main}>
              <div className={style.tours}>
                {
                  basket.map(tour => (
                    <div className={style.tour}>
                      <div className={style.tourLeft} onClick={() => openSetTour(tour)}>
                        <div className={style.tourImg} style={{ backgroundImage: `url(${tour.image})` }}></div>
                        <div className={style.tourInfo}>
                          <h3 className={style.tourTitle}>{tour.title}</h3>
                          <p className={style.tourDate}>Date: {months[tempTour?.reserved?.start.month - 1]} {tempTour?.reserved?.start.day} - {months[tempTour?.reserved?.end.month - 1]} {tempTour?.reserved?.end.day}</p>
                        </div>
                      </div>
                      <div className={style.tourRight}>
                        <div className={style.removeBtn} onClick={() => removeTour(tour)}>
                          <img src={removeIcon} alt="Remove" />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className={style.basketBottom}>
                <p className={style.warnMe}>{warn}</p>
                <div className={style.payBtn} onClick={() => openPayWindow()}>Pay</div>
              </div>
            </div>
          </div>
          <div className={`${tourWindow ? (style.appear, style.tourSettings) : style.disappear}`}>
            <div className={style.top}>
              <div className={style.process}>Tour Edit</div>
              <div className={style.closeBtn} onClick={() => dispatch(basketWindowChange())}>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero" /></svg>
              </div>
            </div>
            <div className={style.main}>
              <div className={style.settings}>
                <div className={style.tourTitle}>{tempTour.title}</div>
                <div className={style.tourReserve}>Reservable: {months[tempTour?.reservable?.start.month - 1]} {tempTour.reservable?.start.day} - {months[tempTour.reservable?.end.month - 1]} {tempTour.reservable?.end.day}</div>
                <div className={style.tourReserve}>Reserved: {months[tempTour?.reserved?.start.month - 1]} {tempTour.reserved?.start.day} - {months[tempTour.reserved?.end.month - 1]} {tempTour.reserved?.end.day}</div>
                <div className={style.tourTotalPrice}>Price: {totalPrice !== 0 ? totalPrice : ''}</div>
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
                {err ? <p>please fill correctly</p> : ''}
                <div className={style.btns}>
                  <div className={style.cancelBtn} onClick={() => cancel()}>Cancel</div>
                  <div className={style.saveBtn} onClick={() => saveInfo(tempTour?.id)}>Save</div>
                </div>
              </div>
              <div className={style.tourImg} style={{ backgroundImage: `url(${tempTour.image})` }}></div>
            </div>
          </div>
          <div className={`${payWindow ? (style.appear, style.paymentWindow) : style.disappear}`}>
            <div className={style.top}>
              <div className={style.process}>Payment</div>
              <div className={style.closeBtn} onClick={() => dispatch(basketWindowChange())}>
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero" /></svg>
              </div>
            </div>
            <div className={style.main}>
              <form className={style.paymentForm}>
                <div className={style.formItem}>
                  <p>Name: </p>
                  <input type="text" onInput={(e) => { e.target.value = e.target.value.toUpperCase() }} ref={nameSurname} placeholder="NAME SURNAME" />
                </div>
                <div className={style.formItem}>
                  <p>Card number: </p>
                  <input type="text" ref={cardNumber} maxLength={19} onKeyUp={(e) => handleCardNumber(e)} placeholder="**** **** **** ****" />
                </div>
                <div className={style.formItem}>
                  <p>Expiration: </p>
                  <input type="text" ref={expirationDate} maxLength={5} onKeyUp={(e) => handleExpiration(e)} placeholder="01/23" />
                </div>
                <div className={style.formItem}>
                  <p>CVC: </p>
                  <input type="text" maxLength={3} ref={cvcNumber} placeholder="123" />
                </div>
                <div className={style.paymentBottom}>
                  <p className={style.totalPrice}>{allPrice}$</p>
                  <div className={style.btns}>
                    <div className={style.cancelBtn} onClick={() => cancelPayment()}>Cancel</div>
                    <div className={style.payBtn} onClick={() => pay()}>Pay</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
