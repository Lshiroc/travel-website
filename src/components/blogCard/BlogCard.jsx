import style from './blogCard.module.scss';
import { Link } from 'react-router-dom';
import { selectUnstyledClasses } from '@mui/base';

function blogCard({id, image, title, description}) {
  return (
    <>
      <div className={style.card}>
          <div className={style.top} style={{backgroundImage: `url(${image})`}}></div>
          <div className={style.bottom}>
            <div className={style.info}>
              <h2 className={style.title}>{title}</h2>
              <p className={style.description}>{description}</p>
            </div>
            <Link to={`/blog/read/${id}`} className={style.readMoreBtn}>Read More</Link>
          </div>
      </div>
    </>
  )
}

export default blogCard