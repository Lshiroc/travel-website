import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeStateBool } from './../../Store/statesReducer';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "https://unpkg.com/aos@2.3.1/dist/aos.css";
import { Navigation, EffectFade, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
// import '../assets/style/global.css'
import style from "./home.module.scss";
import CardType1 from "../../components/card1/CardType1";
import CardType2 from "../../components/card2/CardType2";
import BlogCard from "../../components/blogCard/BlogCard";


// Images
import searchIcon from "./../../assets/icons/search.png";
import calendarIcon from "./../../assets/icons/calendar-logo.svg";
import xMark from "./../../assets/icons/x-mark.svg";
import guestsIcon from "./../../assets/icons/guests-icon.svg";
import arrowDownIcon from "./../../assets/icons/arrow-down.svg";
import forestIcon from "./../../assets/icons/forest-icon.svg";
import sliderImg from './../../assets/images/header-hero.jpg';
import sliderImg1 from './../../assets/images/header-hero1.jpg';
import sliderImg2 from './../../assets/images/header-hero2.jpg';
import brandLogo from './../../assets/images/logoVector/default-monochrome-white.svg'
import watchIcon from './../../assets/icons/watch-icon.svg';

// Date Range
// import { createRoot } from 'react-dom/client';
// import {
//   DatePicker,
//   DatePickerProvider,
//   useDatePickGetter,
//   useDatePickReset,
// } from '@bcad1591/react-date-picker';

// const container = document.getElementById('root');
// const root = createRoot(container);
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
// import { valueToPercent } from "@mui/base";

function Home({ setPageNav }) {

  const [result, setResult] = useState([]);
  const data = useSelector(state => state.eventsReducer.products);
  useEffect(() => {
    setResult(data);
    console.log("Data successfully copied to the state!");
    console.log("abc", result)
    console.log("cdf", data);
  }, [data]);


  const navigate = useNavigate();

  SwiperCore.use([Autoplay]);
  useEffect(() => {
    setPageNav('home');
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
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(changeStateBool({ toggleName: "toggleMenu", value: toggleMenu }));
    console.log("done", toggleMenu);

    toggleMenu ? document.body.classList.add(style.overflowHidden) : document.body.classList.remove(style.overflowHidden);
  }, [toggleMenu])


  // Click Watch Video Button Effect

  const [clickWatch, setClickWatch] = useState(false);

  const goWatch = () => {
    setClickWatch(!clickWatch);

    console.log("dsds", clickWatch);

    window.location.href = "https://google.com";
  }

  return (
    <main className={toggleMenu ? style.overflowHidden : ''}>

      <header className={style.header}>
        <div className={`section-x padding-x ${style.headerContent}`}>
          <div className={style.headerText}>
            <h1>Find yourself outside.</h1>
            <p>
              Discover and book tent camping, RV parks, cabins, treehouses, and
              glamping.
            </p>
          </div>

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
                  placeholder="Try California Park..."
                  onClick={(e) => { e.stopPropagation() }}
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
          <div className={style.headerSearchContent}>
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
              <div className={style.searchBtn2}>
                Search
              </div>
            </form>
            <div className={style.headerHero}>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{ delay: 3000 }}
                navigation={false}
                direction={'vertical'}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
                onClick={() => console.log('clicked')}
              >
                <SwiperSlide>
                  <div className={`${style.heroSlider} ${style.heroSlider0}`}>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${style.heroSlider} ${style.heroSlider1}`}>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${style.heroSlider} ${style.heroSlider2}`}>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${style.heroSlider} ${style.heroSlider3}`}>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </header>
      <main className={style.homeMain}>

        <section className={`section-x padding-x ${style.whyUs}`}>
          <h1 className="section-title">Why Campspot?</h1>
          <div className={style.whyUsContent}>
            <div className={`${style.whyUsItem} ${style.whyUsItem0}`}>
              <div className={`${style.whyUsImg}`}>
                <div className={`${style.blobBg} ${style.whyUsImg0}`}></div>
              </div>
              <h3>Your favorite campgrounds</h3>
              <p>
                Campspot lists top-rated camping destinations available for
                online booking in North America. Discover campgrounds big and
                small, RV parks, glamping, and more.
              </p>
            </div>
            <div className={`${style.whyUsItem} ${style.whyUsItem1}`}>
              <div className={`${style.whyUsImg}`}>
                <div className={`${style.blobBg} ${style.whyUsImg1}`}></div>
              </div>
              <h3>Your favorite campgrounds</h3>
              <p>
                Campspot lists top-rated camping destinations available for
                online booking in North America. Discover campgrounds big and
                small, RV parks, glamping, and more.
              </p>
            </div>
            <div className={`${style.whyUsItem} ${style.whyUsItem2}`}>
              <div className={`${style.whyUsImg}`}>
                <div className={`${style.blobBg} ${style.whyUsImg2}`}></div>
              </div>
              <h3>Your favorite campgrounds</h3>
              <p>
                Campspot lists top-rated camping destinations available for
                online booking in North America. Discover campgrounds big and
                small, RV parks, glamping, and more.
              </p>
            </div>
          </div>
        </section>
        <section className={`section-x padding-x ${style.tours}`}>
          <div className={style.sectionMore}>
            <h1 className="section-title">Recommended Tours</h1>
            <p>See More</p>
          </div>
          <div className={style.toursContent}>
            {
              data ? result.map((event, key) => (
                <CardType1 event={event} key={key} />
              )) : console.log("Events didn't load. L bozo hahaha")
            }
            {
              data ? result.map((event, key) => (
                <CardType1 event={event} key={key} />
              )) : console.log("Events didn't load. L bozo hahaha")
            }

          </div>
        </section>
        <section className={style.contactUs}>
          <div className={style.contactContainer}>
            <div className={`section-x padding-x ${style.contactContent}`}>
              <div className={style.contactText}>
                <h1>Still confused what to select & where to travel?</h1>
                <p>
                  Reach us for customizing the trip according to your
                  requirements.
                </p>
                <div className="btn">
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
              <div className={style.contactBrand}>
                <img
                  src={brandLogo}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section className={`section-x padding-x ${style.products}`}>
          <div className={style.sectionMore}>
            <h1 className="section-title">Recommended items for camping</h1>
            <p>See More</p>
          </div>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            autoplay={{ delay: 4500 }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
            <SwiperSlide>
              <CardType2 />
            </SwiperSlide>
          </Swiper>
        </section> */}
        <section className={style.quote}>
          <div className={`section-x padding-x ${style.quoteContainer}`}>
            <div className={style.quoteText}>
              “Made booking my trip super easy …<br /> A much needed addition to
              the camping industry.”
            </div>
            <div className={style.quoteAuthor}>
              <div className={style.quoteAuthorImg}></div>
              <div className={style.quoteAuthorName}>Zeke K. (@zkoozer)</div>
            </div>
          </div>
        </section>
        <section className={`section-x padding-x ${style.blog}`}>
          <div className={style.sectionMore}>
            <h1 className="section-title">Memories from our clients</h1>
            <p>See More</p>
          </div>
          {/* <div className={style.blogContainer}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                repeat: 0,
                delay: 0.2,
                ease: "easeOut",
                duration: 0.7,
              }}
            >
              <BlogCard />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                repeat: 0,
                delay: 0.5,
                ease: "easeOut",
                duration: 0.7,
              }}
            >
              <BlogCard />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                repeat: 0,
                delay: 0.8,
                ease: "easeOut",
                duration: 0.7,
              }}
            >
              <BlogCard />
            </motion.div>
          </div> */}
          <div className={style.fancyBlogComponent}>
            <div className={`${style.fbgElement} ${style.fbgMain}`}>
              {/* <Link to="/blog/read"> */}
              <div onClick={() => goWatch()} className={style.watchVideo}>
                <img className={clickWatch ? style.clickedWatch : ''} src={watchIcon} alt="watch" />
              </div>
              <div className={style.fbgImg}>
                <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
              </div>
              <div className={style.fbgInfo}>
                <div className={style.fbgText}>
                  <h2>Just a simple title Lmao :d</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repudiandae animi? Est nulla fugit nam, nemo cum odio! Alias, vero.</p>
                  <p className={style.date}>September 25, 2022</p>
                </div>
              </div>
              {/* </Link > */}
            </div>
            <div className={style.fbgElement}>
              <Link to="/blog/read">
                <div className={style.fbgImg}>
                  <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                </div>
                <div className={style.fbgInfo}>
                  <div className={style.fbgText}>
                    <h2>Just a simple title Lmao :d</h2>
                    <p className={style.date}>September 25, 2022</p>
                  </div>
                </div>
              </ Link>
            </div>
            <div className={style.fbgElement}>
              <Link to="/blog/read">
                <div className={style.fbgImg}>
                  <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                </div>
                <div className={style.fbgInfo}>
                  <div className={style.fbgText}>
                    <h2>Just a simple title Lmao :d</h2>
                    <p className={style.date}>September 25, 2022</p>
                  </div>
                </div>
              </ Link>
            </div>
            <div className={style.fbgElement}>
              <Link to="/blog/read">
                <div className={style.fbgImg}>
                  <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                </div>
                <div className={style.fbgInfo}>
                  <div className={style.fbgText}>
                    <h2>Just a simple title Lmao :d</h2>
                    <p className={style.date}>September 25, 2022</p>
                  </div>
                </div>
              </ Link>
            </div>
            <div className={style.fbgElement}>
              <Link to="/blog/read">
                <div className={style.fbgImg}>
                  <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                </div>
                <div className={style.fbgInfo}>
                  <div className={style.fbgText}>
                    <h2>Just a simple title Lmao :d</h2>
                    <p className={style.date}>September 25, 2022</p>
                  </div>
                </div>
              </Link >
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}

export default Home;
