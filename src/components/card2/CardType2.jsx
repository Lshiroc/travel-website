import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import style from './cardtype2.module.scss';

function CardType2() {
    return (
        <>
            <div className={style.card}>
                <div className={style.cardImg}>
                    <img src="https://productimages.hepsiburada.net/s/236/320-320/110000219575891.jpg"/>
                </div>
                <div className={style.cardInfo}>
                    <div className={style.cardTitle}>Gündoğdu Taze Kaşar Peynir 3 x 500 gr</div>
                    <div className={style.cardRating}>
                        <Stack spacing={1}>
                            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                            <Rating className={style.star} name="half-rating-read" defaultValue={2.6} precision={0.5} readOnly />
                        </Stack>
                        <p className={style.cardRatingCount}>23</p>
                    </div>
                    <div className={style.cardPrice}>$ 23,62</div>
                    <button className={style.cardAddBtn}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CardType2;