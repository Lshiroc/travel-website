import { isSameDateError } from '@mui/x-date-pickers/internals/hooks/validation/useDateValidation';
import { useResetProjection } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signWindowChange } from '../../Store/basketReducer';


// Styles & Images
import style from './sign.module.scss';

export default function Sign() {
    const dispatch = useDispatch();

    const [signupWindow, setSignupWindow] = useState(true);
    const [loginWindow, setLoginWindow] = useState(false);
    const [err, setErr] = useState('');

    const mailInput = useRef();
    const passwordInput = useRef();
    const passwordAgainInput = useRef();

    const changeWindows = () => {
        setSignupWindow(!signupWindow);
        setLoginWindow(!loginWindow);
        console.log("windows chagned");
    }

    const checkSignUp = (e) => {
        e.preventDefault();

        if (passwordInput.current.value.length > 7) {
            if (passwordInput.current.value === passwordAgainInput.current.value && mailInput.current.value.trim() !== "") {
                console.log("mhm");
                let tester = 0;
                let tester2 = 0;
                if (localStorage.getItem("users") !== null) {
                    const users = JSON.parse(localStorage.getItem("users"));
                    console.log("getted")
                    console.log(users);
                    users.map(user => {
                        if (user.mail === mailInput.current.value) {
                            tester = 1;
                            setErr("Email already exists!")
                        }
                    })

                    if (tester === 0) {
                        console.log("added")
                        localStorage.setItem("users", JSON.stringify([...users, { mail: mailInput.current.value, password: passwordInput.current.value }]));
                        setErr('');
                    }
                } else {
                    localStorage.setItem("users", JSON.stringify([{ mail: mailInput.current.value, password: passwordInput.current.value }]));
                    tester2 = 1;
                }
            } else {
                console.log("not same");
                setErr("Incorrect information!");
            }
        } else {
            setErr("Password should contain at least 8 character!")
        }
    }

    // Log in part
    const mailInput2 = useRef();
    const passwordInput2 = useRef();
    const [err2, setErr2] = useState('');

    const logIn = (e) => {
        e.preventDefault();

        if (mailInput2.current.value.trim() !== "" && passwordInput2.current.value.trim() !== "") {
            if (localStorage.getItem("users") !== null) {
                const users = JSON.parse(localStorage.getItem("users"));
                console.log("userss", users);
                let logStatus = 0;
                users.map(user => {
                    console.log("aha user", user.mail.replace(' ', ''), mailInput2.current.value.replace(' ', ''), passwordInput2.current.value);
                    console.log(user.mail.replace(mailInput2.current.value));
                    if (user.mail.replace(/\s+/g, "") === mailInput2.current.value.replace(/\s+/g, "")) {
                        console.log("yeppppp");
                    } else {
                        console.log("wtff");
                    }
                    if (user.password === passwordInput2.current.value) {
                        console.log("yepppp2");
                    } else {
                        console.log("wtff2");
                    }
                    if ((user.mail.replace(/\s+/g, "") === mailInput2.current.value.replace(/\s+/g, "") && user.mail.length === mailInput2.current.value.length) && user.password === passwordInput2.current.value) {
                        console.log("loginned!");
                        logStatus = 200;
                        localStorage.setItem("loginInfo", JSON.stringify(mailInput2.current.value));
                        window.location.reload(false);
                    }
                })
                if (logStatus === 0) {
                    console.log("check the info, not loginned!!");
                    setErr2("Incorrect email or password");
                }
            }

            console.log("login...");
        } else {
            setErr2("Please fill the required places.");
        }
    }


    return (
        <>
            <div className={style.signContainer}>
                {
                    signupWindow && (
                        <div className={style.signUpContainer}>
                            <div className={style.popTitle}>
                                <h1>Sign Up</h1>
                                <div className={style.closeBtn} onClick={() => dispatch(signWindowChange())}>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                            <form onSubmit={(e) => checkSignUp(e)}>
                                <div className={style.signContent}>
                                    <input ref={mailInput} type="email" placeholder="Email" />
                                    <input ref={passwordInput} type="password" placeholder="Password" />
                                    <input ref={passwordAgainInput} type="password" placeholder="Password repeat" />
                                    <p>{err}</p>
                                </div>
                                <div className={style.popBottom}>
                                    <p className={style.reminder} onClick={() => changeWindows()}>U already have an account?</p>
                                    <input className={style.sendBtn} value="Sign up" type="submit" />
                                </div>
                            </form>
                        </div>
                    )
                }
                {
                    loginWindow && (
                        <div className={style.logInContainer}>
                            <div className={style.popTitle}>
                                <h1>Log In</h1>
                                <div className={style.closeBtn} onClick={() => dispatch(signWindowChange())}>
                                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero" /></svg>
                                </div>
                            </div>
                            <form onSubmit={(e) => logIn(e)}>
                                <div className={style.signContent}>
                                    <input ref={mailInput2} type="email" placeholder="Email" />
                                    <input ref={passwordInput2} type="password" placeholder="Password" />
                                    <p>{err2}</p>
                                </div>
                                <div className={style.popBottom}>
                                    <p className={style.reminder} onClick={() => changeWindows()}>U dont have an account yet? ara ara..</p>
                                    <input className={style.sendBtn} value="Log In" type="submit" />
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        </>
    )
}
