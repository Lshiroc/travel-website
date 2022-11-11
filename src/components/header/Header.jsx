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
import style from './header.module.scss';
import { useEffect } from 'react';


export default function Header({ pageNav, setPageNav }) {

    const dispatch = useDispatch();

    const { badge } = useSelector(state => state.basketReducer);
    const { isOpen } = useSelector(state => state.basketReducer);
    const { isOpenSign } = useSelector(state => state.basketReducer);

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
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className={style.menuRight}>
                        {/* <ul className={`${style.menu} ${toggleMenu ? style.openToggleMenu : style.closeToggleMenu}`}> */}
                        <ul className={style.menu}>
                            <li className={style.menuItem}>
                                <NavLink to="/">
                                    <p className={pageNav === "home" ? style.activatedNav : ''}>Home</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/events">
                                    <p className={pageNav === "events" ? style.activatedNav : ''}>Events</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/blog">
                                    <p className={pageNav === "blog" ? style.activatedNav : ''}>Blog</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/contact">
                                    <p className={pageNav === "contact" ? style.activatedNav : ''}>Contact</p>
                                </NavLink>
                            </li>
                            <li className={style.menuItem}>
                                <NavLink to="/about">
                                    <p className={pageNav === "about" ? style.activatedNav : ''}>About</p>
                                </NavLink>
                            </li>
                            {/* <div className={style.mobileMenuClose} onClick={() => setToggleMenu(!toggleMenu)}>
                                <img src={closeIcon} alt="Menu Close" />
                            </div> */}
                        </ul>
                        <div className={style.btn} onClick={() => dispatch(signWindowChange())}>
                            Sign Up
                        </div>
                        <div className={style.cartMenu} onClick={() => dispatch(basketWindowChange())}>
                            <div className={style.cartImg}>
                                <img src={cartIcon} alt="Cart" />
                            </div>
                            {
                                badge !== 0 && (<div className={style.badge}>{badge}</div>)
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
