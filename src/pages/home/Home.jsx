import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
import logo from './../../assets/images/logo-monochrome.svg';
import cartIcon from './../../assets/images/cart2.svg';

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

function Home() {
  SwiperCore.use([Autoplay]);

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
      <nav className={style.navbar}>
        <div className={`section-x padding-x ${style.navbarContainer}`}>
          <div className={style.logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={style.menu}>
            <li className={style.menuItem}>
              <a href=".">
                <p>Home</p>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href=".">
                <p>Events</p>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href=".">
                <p>Store</p>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href=".">
                <p>Blogs</p>
              </a>
            </li>
            <li className={style.menuItem}>
              <a href=".">
                <p>Contact</p>
              </a>
            </li>
            <li className="btn">
              <a href=".">Sign Up</a>
            </li>
            <li className={style.cartMenu}>
              <div className={style.cartImg}>
                <img src={cartIcon} alt="Cart" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <header className={style.header}>
        <div className={`section-x padding-x ${style.headerContent}`}>
          <div className={style.headerText}>
            <h1>Find yourself outside.</h1>
            <p>
              Discover and book tent camping, RV parks, cabins, treehouses, and
              glamping.
            </p>
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
                  <img src={sliderImg} alt="just an img" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
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
            <div className={style.whyUsItem}>
              <h3>Your favorite campgrounds</h3>
              <p>
                Campspot lists top-rated camping destinations available for
                online booking in North America. Discover campgrounds big and
                small, RV parks, glamping, and more.
              </p>
            </div>
            <div className={style.whyUsItem}>
              <h3>Your favorite campgrounds</h3>
              <p>
                Campspot lists top-rated camping destinations available for
                online booking in North America. Discover campgrounds big and
                small, RV parks, glamping, and more.
              </p>
            </div>
            <div className={style.whyUsItem}>
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
            <CardType1 />
            <CardType1 />
            <CardType1 />
            <CardType1 />
            <CardType1 />
            <CardType1 />
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
                  <a href=".">Contact Us</a>
                </div>
              </div>
              <div className={style.contactBrand}>
                <img
                  src="https://tentntrek.com/wp-content/uploads/2021/10/cropped-tentntrek-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`section-x padding-x ${style.products}`}>
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
          {/* <div className={style.productsContainer}>
            <CardType2 />
            <CardType2 />
            <CardType2 />
            <CardType2 />
            <CardType2 />
            <CardType2 />
          </div> */}
        </section>
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
          <div className={style.blogContainer}>
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
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
