import { useEffect } from 'react';
import style from './about.module.scss';
import founder1 from './../../assets/images/founder1.webp';

export default function About({ setPageNav }) {
    useEffect(() => {
        setPageNav('about');
    }, [])

    return (
        <>
            <div className={style.aboutContainer}>
                <div className={style.aboutTop}>
                    <div className={`${style.aboutTopText} section-x padding-x`}>
                        <h1>Who we are?</h1>
                    </div>
                </div>

                <div className={`section-x padding-x ${style.aboutContent}`}>
                    <div className={style.aboutItem}>
                        <div className={style.aboutTitle}>
                            <h2>About us</h2>
                        </div>
                        <div className={style.aboutText}>
                            <h3>Creative Media – 2008 to 2010</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil accusantium, perferendis rem consequatur eum asperiores illum quam id reprehenderit autem corrupti possimus et dolorum commodi accusamus eos suscipit ratione aliquam consequuntur amet maxime temporibus laborum? Tempore iure tenetur in impedit, doloribus sint repellat dignissimos aliquam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos est quod nisi atque vel, voluptate optio ullam dolorem explicabo ea numquam inventore quos suscipit facilis praesentium nostrum illo magnam.</p>
                        </div>
                    </div>
                    <div className={style.aboutItem}>
                        <div className={style.aboutTitle}>
                            <h2>Our Mission</h2>
                        </div>
                        <div className={style.aboutText}>
                            <h3>Goal that we want to achive</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil accusantium, perferendis rem consequatur eum asperiores illum quam id reprehenderit autem corrupti possimus et dolorum commodi accusamus eos suscipit ratione aliquam consequuntur amet maxime temporibus laborum? Tempore iure tenetur in impedit, doloribus sint repellat dignissimos aliquam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos est quod nisi atque vel, voluptate optio ullam dolorem explicabo ea numquam inventore quos suscipit facilis praesentium nostrum illo magnam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laudantium. Nesciunt pariatur fugiat corrupti libero consectetur exercitationem sit blanditiis maiores et omnis ad architecto doloribus commodi, accusantium illum quis tempore voluptas, numquam ipsum labore? Ex accusamus molestias ipsa! Magni, saepe. Harum veniam, ullam impedit tempore nemo magni dolor accusamus, molestias maiores explicabo quisquam accusantium rerum commodi incidunt quaerat aperiam officiis maxime fugit? Quo, molestiae voluptate.</p>
                        </div>
                    </div>
                    <div className={style.aboutItem}>
                        <div className={style.aboutTitle}>
                            <h2>Our Experience</h2>
                        </div>
                        <div className={style.aboutText}>
                            <h3>9 Years of Experience</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil accusantium, perferendis rem consequatur eum asperiores illum quam id reprehenderit autem corrupti possimus et dolorum commodi accusamus eos suscipit ratione aliquam consequuntur amet maxime temporibus laborum? Tempore iure tenetur in impedit, doloribus sint repellat dignissimos aliquam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos est quod nisi atque vel, voluptate optio ullam dolorem explicabo ea numquam inventore quos suscipit facilis praesentium nostrum illo magnam.</p>
                        </div>
                    </div>
                    <div className={style.founders}>
                        <div className={style.aboutTitle}>
                            <h2>Founders</h2>
                        </div>
                        <div className={style.foundersContent}>
                            <div className={style.founderItem}>
                                <div className={`${style.founderImg} ${style.founder1}`}></div>
                                <h4>Michael Hemington</h4>
                                <p>Founder&CEO of the Travel</p>
                            </div>
                            <div className={style.founderItem}>
                                <div className={`${style.founderImg} ${style.founder2}`}></div>
                                <h4>Tamaki Fujiwara</h4>
                                <p>Co-Founder of the Travel</p>
                            </div>
                            <div className={style.founderItem}>
                                <div className={`${style.founderImg} ${style.founder3}`}></div>
                                <h4>Jessica Chann</h4>
                                <p>Co-Founder of the Travel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
