import { useEffect } from 'react';
import style from './blog.module.scss';
import BlogCard from './../../components/blogCard/BlogCard';
import { Link } from 'react-router-dom';
export default function Blog({ setPageNav }) {
    setPageNav("blog");

    return (
        <>
            <main className={`section-x padding-x ${style.blogMain}`}>
                <div className={style.blogSectionTitle}>
                    <h1>Travel Blog</h1>
                </div>

                <div className={style.blogContent}>
                    
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