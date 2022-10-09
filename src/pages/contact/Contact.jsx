import React, { useState, useEffect } from "react";
import style from './contact.module.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Images
import locationIcon from './../../assets/icons/location-icon.svg';
import phoneIcon from './../../assets/icons/phone-icon.svg';
import mailIcon from './../../assets/icons/mail-icon.svg';
import websiteIcon from './../../assets/icons/website-icon.svg';

export default function Contact({ setPageNav }) {
    // const [color, setColor] = useState("");

    useEffect(() => {
        setPageNav("contact");
    }, [])

    const handleInput = (e) => {
        console.log(e.target.name);
    }

    return (
        <>
            <main className={style.contactMain}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
                <div className={style.contactContainer}>
                    <div className={style.contactLeftPart}>
                        <h1>Send us a message</h1>
                        <Box
                            className={style.contactForm}
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <TextField className={style.textArea} onChange={(e) => handleInput(e)} id="standard-basic" label="Name" variant="standard" />
                            <TextField className={style.textArea} id="standard-basic" label="Email" variant="standard" />
                            <TextField className={style.textArea} id="standard-basic" label="Subject" variant="standard" />
                            <TextField
                                className={style.textArea}
                                id="standard-multiline-flexible"
                                label="Message"
                                rows={7}
                                maxRows={7}
                                multiline
                                variant="standard"
                            />
                            <Button onClick={() => toast.success("Message sent succesfully!")} variant="contained">Send</Button>
                        </ Box>

                    </div>
                    <div className={style.contactRightPart}>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestions or just to have a chat</p>

                        <div className={style.contactAdContent}>
                            <div className={style.adElement}>
                                <div className={style.adImg}>
                                    <img src={locationIcon} alt="Location" />
                                </div>
                                <div className={style.adText}><strong>Address:</strong> 198 West 21th Street, Suite 721 New York NY 10016</div>
                            </div>
                            <div className={style.adElement}>
                                <div className={style.adImg}>
                                    <img src={phoneIcon} alt="Phone" />
                                </div>
                                <div className={style.adText}><strong>Phone:</strong>+ 1235 2355 98</div>
                            </div>
                            <div className={style.adElement}>
                                <div className={style.adImg}>
                                    <img src={mailIcon} alt="Mail" />
                                </div>
                                <div className={style.adText}><strong>Email:</strong> info@yoursite.com</div>
                            </div>
                            <div className={style.adElement}>
                                <div className={style.adImg}>
                                    <img src={websiteIcon} alt="Website" />
                                </div>
                                <div className={style.adText}><strong>Website:</strong> travel.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
                <div className={style.locationMap} style={{width: '100%'}}><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>
        </>
    )
}
