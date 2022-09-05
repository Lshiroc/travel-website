import style from "./footer.module.scss";
import facebookLogo from './../../assets/icons/facebook-logo.svg';
import instagramLogo from './../../assets/icons/instagram-logo.svg';
import pinterestLogo from './../../assets/icons/pinterest-logo.svg';
import githubLogo from './../../assets/icons/github-logo.svg';

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={`section-x padding-x ${style.footerSub}`}>
          <h3>Sign up to receive exclusive Campspot deals and updates!</h3>
          {/* <form className={style.footerSubForm}> */}
          <input
            type="text"
            className={style.footerSubInput}
            placeholder="Enter your email address"
          />
          <button className={style.footerSubBtn}>Subscribe</button>
          {/* </form> */}
        </div>
        <div className={style.footerContainer}>
          <div className={`section-x padding-x ${style.footerMain}`}>
            <div className={style.footerAbout}>
              <h4>ABOUT CAMPSPOT</h4>
              <p>
                Campspot is the leading online marketplace for premier RV res
                orts, family campgrounds, cabins, glamping options, and more. No
                matter how you choose to stay, Campspot makes it easy for you to
                create lifelong camping memories. Learn more
              </p>
              <p>
                Are you a campground or RV park owner? Visit
                software.campspot.com to learn how Campspot can help your
                business.
              </p>
            </div>
            <div className={style.footerSupport}>
              <h4>SUPPORT</h4>
              <p>
                Have a question? Our Customer Support team is here to help:
                <br />
                <br />
                <a href="mail:help@campspot.com">help@campspot.com</a>
              </p>
              <div className={style.footerPoweredBy}>
                <p>Ratings powered by ...</p>
                <img src="https://www.campspot.com/assets/img/trip-advisor-logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={`section-x padding-x ${style.footerInfo}`}>
          <ul className={style.footerInfoMenu}>
            <li>© 2022 Campspot</li>
            <li><a href=".">About Us</a></li>
            <li><a href=".">FAQ</a></li>
            <li><a href=".">Mobile App</a></li>
            <li><a href=".">Campground Software</a></li>
            <li><a href=".">Privacy Notice</a></li>
          </ul>
          <ul className={style.footerSocial}>
            <li>
              <a href=".">
                <img src={facebookLogo} alt="" />
              </a>
            </li>
            <li>
              <a href=".">
                <img src={instagramLogo} alt="" />
              </a>
            </li>
            <li>
              <a href=".">
                <img src={pinterestLogo} alt="" />
              </a>
            </li>
            <li>
              <a href=".">
                <img src={githubLogo} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
