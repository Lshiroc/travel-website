import React, { useState } from "react";
// import '../assets/style/global.css'
import style from "./home.module.scss";
import CardType1 from "../../components/card1/CardType1";
import CardType2 from "../../components/card2/CardType2";
import BlogCard from "../../components/blogCard/BlogCard";
import searchIcon from './../../assets/icons/search.png';
import calendarIcon from './../../assets/icons/calendar-logo.svg';
import xMark from './../../assets/icons/x-mark.svg';
import guestsIcon from './../../assets/icons/guests-icon.svg';
import arrowDownIcon from './../../assets/icons/arrow-down.svg';

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
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// import { valueToPercent } from "@mui/base";


function Home() {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [input, setInput] = useState({});

  const takeInput = (e) => {
    setInput(e.selection);
    console.log(e.selection.startDate.getDate())
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const [openDateRange, setOpenDateRange] = useState(false);

  return (
    <>
      <nav className={style.navbar}>
        <div className={`section-x padding-x ${style.navbarContainer}`}>
          <div className="logo">
            <a href=".">logo</a>
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
          <div className={style.headerContent}>
            <form className={style.tripSearch}>
              <div className={style.whereTo}>
                <p className={style.tripSearchTitle}>Where To?</p>
                <div className={style.searchElementContainer}>
                  <div className={style.elementIcon}>
                    <img src={searchIcon} alt="search" />
                  </div>
                  <input className={style.tripElement} type="text" placeholder="Try California Park..." />
                </div>
              </div>
              <div className={style.datePick}>
                <p className={style.tripSearchTitle}>Dates</p>
                <div className={style.searchElementContainer}>
                  <div className={style.elementIcon}>
                    <img src={calendarIcon} alt="date" />
                  </div>
                  <div className={style.tripElement} type="text" onClick={() => setOpenDateRange(!openDateRange)}>{
                    input.startDate ?
                      `${months[input.startDate.getMonth()]} ${input.startDate.getDate()}
                    - ${months[input.endDate.getMonth()]} ${input.endDate.getDate()}`
                      : "choose smth else"
                  }</div>
                  <div className={`${style.popUpInput} ${openDateRange ? style.openRange : ""} `}>
                    <div className={style.popUpClose}>
                      <p>Date</p>
                      <div className={style.closeBtn} onClick={() => setOpenDateRange(!openDateRange)}>
                        <img src={xMark} alt="close" />
                      </div>
                    </div>
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => { setState([item.selection]); takeInput(item) }}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                  </div>
                </div>
              </div>
              <div className={style.whereTo}>
                <p className={style.tripSearchTitle}>Guests</p>
                <div className={style.searchElementContainer}>
                  <div className={style.elementLeft}>
                    <div className={style.elementIcon}>
                      <img src={guestsIcon} alt="search" />
                    </div>
                    <div className={style.tripElement}>Add Guests</div>
                  </div>
                  <img className={style.arrowDown} src={arrowDownIcon} alt="open" />
                </div>
              </div>
              <div className={style.searchBtn}>
                <img src={searchIcon} alt="search" />
              </div>
            </form>
            <div className={style.headerHero}></div>
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
            <h1 className='section-title'>Recommended Tours</h1>
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
            <h1 className='section-title'>Recommended items for camping</h1>
            <p>See More</p>
          </div>
          <div className={style.productsContainer}>
            <CardType2 />
            <CardType2 />
            <CardType2 />
            <CardType2 />
            <CardType2 />
            <CardType2 />
          </div>
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
            <h1 className='section-title'>Memories from our clients</h1>
            <p>See More</p>
          </div>
          <div className={style.blogContainer}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
