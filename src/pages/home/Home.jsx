import React from 'react'
// import '../assets/style/global.css'
import style from './home.module.scss';
import CardType1 from '../../components/card1/CardType1';

function Home() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={`section-x padding-x ${style.navbarContainer}`}>
          <div className="logo"><a href=".">logo</a></div>
          <ul className="menu">
            <li className={style.menuItem}><a href="."><p>Home</p></a></li>
            <li className={style.menuItem}><a href="."><p>Events</p></a></li>
            <li className={style.menuItem}><a href="."><p>Store</p></a></li>
            <li className={style.menuItem}><a href="."><p>Blogs</p></a></li>
            <li className={style.menuItem}><a href="."><p>Contact</p></a></li>
            <li className="btn"><a href=".">Sign Up</a></li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className={`section-x padding-x ${style.headerContent}`}>
          <div className={style.headerText}>
            <h1>Find yourself outside.</h1>
            <p>Discover and book tent camping, RV parks, cabins, treehouses, and glamping.</p>
          </div>
          <div className={style.headerContent}>
            <div className={style.tripSearch}></div>
            <div className={style.headerHero}></div>
          </div>
        </div>
      </header>
      <main className={style.homeMain}>
        <section className={`section-x padding-x ${style.whyUs}`}>
          <h1 className='sectionTitle'>Why Campspot?</h1>
          <div className={style.whyUsContent}>
            <div className={style.whyUsItem}>
              <h3>Your favorite campgrounds</h3>
              <p>Campspot lists top-rated camping destinations available for online booking in North America. Discover campgrounds big and small, RV parks, glamping, and more.</p>
            </div>
            <div className={style.whyUsItem}>
              <h3>Your favorite campgrounds</h3>
              <p>Campspot lists top-rated camping destinations available for online booking in North America. Discover campgrounds big and small, RV parks, glamping, and more.</p>
            </div>
            <div className={style.whyUsItem}>
              <h3>Your favorite campgrounds</h3>
              <p>Campspot lists top-rated camping destinations available for online booking in North America. Discover campgrounds big and small, RV parks, glamping, and more.</p>
            </div>
          </div>
        </section>
        <section className={`section-x padding-x ${style.tours1}`}>
          <div className={style.toursMore}>
            <h1 className={style.sectionTitle}>Recommended Tours</h1>
            <p>See More</p>
          </div>
          <div className={style.toursContent}>
            <CardType1 />
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
                <p>Reach us for customizing the trip according to your requirements.</p>
                <div className="btn">
                  <a href=".">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="contact-brand">
                <img src="https://tentntrek.com/wp-content/uploads/2021/10/cropped-tentntrek-logo.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home