import style from './blogCard.module.scss';
import { Link } from 'react-router-dom';

function blogCard() {
  return (
    <>
      <div className={style.card}>
        <Link to="/blog/read">
        <div className={style.cardImg}>
          <img src="https://tentntrek.com/wp-content/uploads/2016/11/photo-1441716844725-09cedc13a4e7-600x700.jpg" alt="Amazing Wonderful Crazzy Blog Image" />
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardText}>
            <h2>This is a simple title, u better like this</h2>
            <p>September 25, 2022</p>
          </div>
        </div>
        </ Link>
      </div>
    </>
  )
}

export default blogCard