import style from './blogCard.module.scss';

function blogCard() {
  return (
    <>
        <div className={style.card}>
            <div className={style.cardImg}></div>
            <div className={style.cardInfo}>
                <div className={style.cardTitle}>22 Camping Destinations for 2022</div>
                <div className={style.cardDescription}>The restorative power of the great outdoors is only a click away with this list of 22 camping destinations.</div>
                <div className={style.readMore}>read more</div>
            </div>
        </div>
    </>
  )
}

export default blogCard