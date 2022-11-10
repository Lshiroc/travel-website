import { isSameDateError } from '@mui/x-date-pickers/internals/hooks/validation/useDateValidation';
import { useResetProjection } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// Styles & Images
import style from './sign.module.scss';

export default function Sign() {

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

        if (passwordInput.current.value.length > 8) {
            if (passwordInput.current.value === passwordAgainInput.current.value) {
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
                            setErr("Email already exists")
                        }
                    })

                    if (tester === 0) {
                        console.log("added")
                        localStorage.setItem("users", JSON.stringify([...users, {mail: mailInput.current.value, password: passwordInput.current.value}]));
                        setErr('');
                    }
                } else {
                    localStorage.setItem("users", JSON.stringify([{mail: mailInput.current.value, password: passwordInput.current.value}]));
                    tester2 = 1;
                }
            } else {
                console.log("not same");
            }
        } else {
            console.log("pass limit")
        }
    }

    // Log in part
    const mailInput2 = useRef();
    const passwordInput2 = useRef();
    const [err2, setErr2] = useState('');
    
    const logIn = (e) => {
        e.preventDefault();

        if(localStorage.getItem("users") !== null) {
            const users = JSON.parse(localStorage.getItem("users"));
            let logStatus = 0;
            users.map(user => {
                if(user.mail === mailInput2.current.value && user.password === passwordInput2.current.value) {
                    console.log("loginned!");
                    logStatus = 200;
                }
            })
            if(logStatus === 0) {
                console.log("check the info, not loginned!!");
            }
        } 

        console.log("login...");
    }


    return (
        <>
            <div className={style.signContainer}>
                {
                    signupWindow && (
                        <div className={style.signUpContainer}>
                            <div className={style.popTitle}>
                                <h1>Sign Up</h1>
                            </div>
                            <form onSubmit={(e) => checkSignUp(e)}>
                                <div className={style.signContent}>
                                    <input ref={mailInput} type="email" placeholder="email" />
                                    <input ref={passwordInput} type="password" placeholder="password" />
                                    <input ref={passwordAgainInput} type="password" placeholder="password again" />
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
                                <h1>Log in</h1>
                            </div>
                            <form onSubmit={(e) => logIn(e)}>
                                <div className={style.signContent}>
                                    <input ref={mailInput2} type="email" placeholder="email" />
                                    <input ref={passwordInput2} type="password" placeholder="password" />
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
