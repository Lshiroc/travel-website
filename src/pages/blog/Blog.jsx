import style from './blog.module.scss';
import BlogCard from './../../components/blogCard/BlogCard';

export default function Blog() {

    return (
        <>
            <main className={`section-x padding-x ${style.blogMain}`}>
                <div className={style.blogSectionTitle}>
                    <h1>Travel Blog</h1>
                </div>

                <div className={style.blogContent}>
                    <div className={style.fancyBlogComponent}>
                        <div className={`${style.fbgElement} ${style.fbgMain}`}>
                            <div className={style.fbgImg}>
                                <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                            </div>
                            <div className={style.fbgInfo}>
                                <div className={style.fbgText}>
                                    <h2>Just a simple title Lmao :d</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repudiandae animi? Est nulla fugit nam, nemo cum odio! Alias, vero.</p>
                                    <p className={style.date}>September 25, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.fbgElement}>
                            <div className={style.fbgImg}>
                                <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                            </div>
                            <div className={style.fbgInfo}>
                                <div className={style.fbgText}>
                                    <h2>Just a simple title Lmao :d</h2>
                                    <p className={style.date}>September 25, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.fbgElement}>
                            <div className={style.fbgImg}>
                                <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                            </div>
                            <div className={style.fbgInfo}>
                                <div className={style.fbgText}>
                                    <h2>Just a simple title Lmao :d</h2>
                                    <p className={style.date}>September 25, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.fbgElement}>
                            <div className={style.fbgImg}>
                                <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                            </div>
                            <div className={style.fbgInfo}>
                                <div className={style.fbgText}>
                                    <h2>Just a simple title Lmao :d</h2>
                                    <p className={style.date}>September 25, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.fbgElement}>
                            <div className={style.fbgImg}>
                                <img src="https://www.adventuretreks.com/wp-content/uploads/2020/01/LS-IMG_0012-1280x960-home-640x480.jpg" alt="Fancy Image" />
                            </div>
                            <div className={style.fbgInfo}>
                                <div className={style.fbgText}>
                                    <h2>Just a simple title Lmao :d</h2>
                                    <p className={style.date}>September 25, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.blogRegularComponent}>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />

                    </div>
                </div>
            </main>
        </>
    )
}