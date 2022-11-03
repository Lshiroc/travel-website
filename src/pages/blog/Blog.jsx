import { useEffect, useState } from 'react';
import style from './blog.module.scss';
import BlogCard from './../../components/blogCard/BlogCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Blog({ setPageNav }) {
    setPageNav("blog");

    const data = useSelector(state => state.blogReducer.posts);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(data);
        console.log("Posts successfully copied to the state!");
    }, [data]);


    return (
        <>
            <main className={`section-x padding-x ${style.blogMain}`}>
                <div className={style.blogSectionTitle}>
                    <h1>Travel Blog</h1>
                </div>

                <div className={style.blogContent}>
                    
                    <div className={style.blogRegularComponent}>
                        {
                            posts && posts.map((post) => (
                                <BlogCard id={post.id} title={post.title} image={post.image} description={post.description} />
                            ))
                        }
                        {
                            posts && posts.map((post) => (
                                <BlogCard id={post.id} title={post.title} image={post.image} description={post.description} />
                            ))
                        }
                        {/* <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard /> */}

                    </div>
                </div>
            </main>
        </>
    )
}