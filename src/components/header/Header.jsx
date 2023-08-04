import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Basket from './../../components/basket/Basket';
import { basketWindowChange, signWindowChange } from './../../Store/basketReducer.js';
import Sign from './../../components/sign/Sign';

//Style & images
import logo from './../../assets/images/logo-monochrome.svg';
import cartIcon from './../../assets/images/cart2.svg';
import menuIcon from './../../assets/images/menu-icon.svg';
import closeIcon from './../../assets/images/close-icon.svg';
import userIcon from './../../assets/icons/user-icon.png';
import style from './header.module.scss';
import { useEffect } from 'react';


export default function Header({ pageNav, setPageNav }) {

    const dispatch = useDispatch();

    const { badge } = useSelector(state => state.basketReducer);
    const { isOpen } = useSelector(state => state.basketReducer);
    const { isOpenSign } = useSelector(state => state.basketReducer);
    const [loginned, setLoginned] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("loginInfo") === null) {
            setLoginned(false);
        } else {
            setLoginned(true);
        }
    }, [])
    console.log("login info", loginned);
    const {basket} = useSelector(state => state.basketReducer);


    const [userPopup, setUserPopup] = useState(false);

    const logOut = () => {
        localStorage.removeItem("loginInfo");
        window.location.reload(false);
    }

    return (
        <>
            {
                isOpen ? <Basket /> : ''
            }
            {
                isOpenSign ? <Sign /> : ''
            }
            <nav className={style.navbar}>
                <div className={`section-x padding-x ${style.navbarContainer}`}>
                    <div className={style.menuLeft}>
                        {/* <div className={style.toggleMenuBtn} onClick={() => setToggleMenu(!toggleMenu)}>
                            <img src={menuIcon} alt="Menu" />
                        </div> */}
                        <div className={style.logo}>
                            <Link to="/" onClick={() => setShowMenu(false)}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className={style.menuRight}>
                        {/* <ul className={`${style.menu} ${toggleMenu ? style.openToggleMenu : style.closeToggleMenu}`}> */}
                        <ul className={`${style.menu} ${showMenu ? style.showMenu : ''}`}>
                            <li className={style.menuItem}>
                                <NavLink to="/" onClick={() => setShowMenu(false)}>
                                    <p className={pageNav === "home" ? style.activatedNav : ''}>Home</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/events" onClick={() => setShowMenu(false)}>
                                    <p className={pageNav === "events" ? style.activatedNav : ''}>Events</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/blog" onClick={() => setShowMenu(false)}>
                                    <p className={pageNav === "blog" ? style.activatedNav : ''}>Blog</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/contact" onClick={() => setShowMenu(false)}>
                                    <p className={pageNav === "contact" ? style.activatedNav : ''}>Contact</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/about" onClick={() => setShowMenu(false)}>
                                    <p className={pageNav === "about" ? style.activatedNav : ''}>About</p>
                                </NavLink>
                            </li>
                            {/* <div className={style.mobileMenuClose} onClick={() => setToggleMenu(!toggleMenu)}>
                                <img src={closeIcon} alt="Menu Close" />
                            </div> */}
                            <li className={style.menuItem}>
                                {
                                    loginned ? (
                                        <div className={style.userProfile} onClick={() => setUserPopup(!userPopup)}>
                                            <img src={userIcon} alt="User" />
                                            <div className={`${style.popUp} ${userPopup ? style.show : ''}`} onClick={() => logOut()}>Log out</div>
                                        </div>
                                    ) : (
                                        <div className={style.btn} onClick={() => dispatch(signWindowChange())}>
                                            Sign Up
                                        </div>
                                    )
                                }
                            </li>
                        </ul>
                        {/* {
                            loginned ? (
                                <div className={style.userProfile} onClick={() => setUserPopup(!userPopup)}>
                                    <img src={userIcon} alt="User" />
                                    <div className={`${style.popUp} ${userPopup ? style.show : ''}`}>Log out</div>
                                </div>
                            ) : (
                                <div className={style.btn} onClick={() => dispatch(signWindowChange())}>
                                    Sign Up
                                </div>
                            )
                        } */}
                        <div className={style.cartMenu} onClick={() => {basket.length !== 0 && dispatch(basketWindowChange())}}>
                            <div className={style.cartImg}>
                                <img src={cartIcon} alt="Cart" />
                            </div>
                            {
                                badge !== 0 && (<div className={style.badge}>{badge}</div>)
                            }
                        </div>
                        <div className={style.menuBtn} onClick={() => setShowMenu(!showMenu)}>
                            <img src={menuIcon} alt="Menu" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
