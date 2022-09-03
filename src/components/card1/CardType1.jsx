import React from 'react';
import style from './cardtype1.module.scss';

function CardType1() {
    return (
        <div className={style.cardType1}>
            <div className={style.ct1Img}>
                <div className={style.ct1ImgTop}>
                    <div className={style.ct1ImgVerified}>Verified</div>
                    <div className={style.ct1ImgLiked}>
                        <svg className="i-icon" viewBox="0 0 28 28" width="16" height="16" style={{ width: "16px", height: "16px", verticalAlign: "middle" }}>
                            <title>Save</title>
                            <path d="M26 9.312c0-4.391-2.969-5.313-5.469-5.313-2.328 0-4.953 2.516-5.766 3.484-0.375 0.453-1.156 0.453-1.531 0-0.812-0.969-3.437-3.484-5.766-3.484-2.5 0-5.469 0.922-5.469 5.313 0 2.859 2.891 5.516 2.922 5.547l9.078 8.75 9.063-8.734c0.047-0.047 2.938-2.703 2.938-5.563zM28 9.312c0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281s-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313z"></path>
                        </svg>
                    </div>
                </div>
                <div className={style.ct1ImgBottom}>
                    <div className={style.ct1ImPrice}>from $ 34</div>
                </div>
            </div>
            <div className={style.ct1Info}>
                <div className={style.ct1InfoName}>Naturia and inspiring place</div>
                <div className={style.ct1InfoRating}>
                    <svg className="i-icon" viewBox="0 0 32 32" width="16" height="16">
                        <path fill="#FDB000" d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                    </svg> 4.67</div>
                <div className={style.ct1InfoLocation}>Belgium, Netherlands</div>
            </div>
        </div>
    )
}

export default CardType1;