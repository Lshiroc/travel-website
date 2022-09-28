import { Link, NavLink } from 'react-router-dom';


//Style & images
import logo from './../../assets/images/logo-monochrome.svg';
import cartIcon from './../../assets/images/cart2.svg';
import menuIcon from './../../assets/images/menu-icon.svg';
import closeIcon from './../../assets/images/close-icon.svg';
import style from './header.module.scss';


export default function Header() {
    return (
        <>


            <nav className={style.navbar}>
                <div className={`section-x padding-x ${style.navbarContainer}`}>
                    <div className={style.menuLeft}>
                        {/* <div className={style.toggleMenuBtn} onClick={() => setToggleMenu(!toggleMenu)}>
                            <img src={menuIcon} alt="Menu" />
                        </div> */}
                        <div className={style.logo}>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className={style.menuRight}>
                        {/* <ul className={`${style.menu} ${toggleMenu ? style.openToggleMenu : style.closeToggleMenu}`}> */}
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
                                <NavLink to="/blog">
                                    <p>Blog</p>
                                </ NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/contact">
                                    <p>Contact</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <a href=".">
                                    <p>About</p>
                                </a>
                            </li>
                            {/* <div className={style.mobileMenuClose} onClick={() => setToggleMenu(!toggleMenu)}>
                                <img src={closeIcon} alt="Menu Close" />
                            </div> */}
                        </ul>
                        <div className="btn">
                            <a href=".">Sign Up</a>
                        </div>
                        <div className={style.cartMenu}>
                            <div className={style.cartImg}>
                                <img src={cartIcon} alt="Cart" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
