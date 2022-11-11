import style from './blogread.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Images 
import linkIcon from './../../assets/images/link-icon.svg';
import doneIcon from './../../assets/icons/done-icon.svg';
import { getStepConnectorUtilityClass } from '@mui/material';

export default function BlogRead({ setPageNav }) {
    const [done, setDone] = useState(false);
    const [post, setPost] = useState({});

    const {id} = useParams();
    const {posts} = useSelector(state => state.blogReducer);

    useEffect(() => {
        posts.map((e) => {
            if(e.id == id) {
                setPost(e);
                console.log("saved");
            }
        })
    }, [])

    useEffect(() => {
        setPageNav("blog");
    }, []);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setDone(true);

        setTimeout(() => setDone(false), 4000);
    }


    return (
        <>
            <main className={style.blogReadMain}>
                <div className={style.blogMainImg}>
                    <div className={style.blogLayer}>
                        <div className={`${style.blogInfoContainer} section-x padding-x`}>
                            <div className={style.blogShortInfo}>
                                <p className={style.blogDate}>09/21/22</p>
                                <h1 className={style.blogMainTitle}>{post?.title}</h1>
                            </div>
                            <div className={style.blogBtns}>
                                <div className={style.blogCopyBtn} onClick={() => copyLink()}>
                                    <img src={done ? doneIcon : linkIcon} alt="Copy Link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.blogContent}>
                    <div className={style.blogText}>
                        <h1>{post?.title}</h1>
                        <p>{post?.content}</p>
                    </div>
                    <div className={style.blogPostInfo}>
                        <p>Posted by <Link to="/">Travel</Link></p>
                        <p>05.13.22</p>
                    </div>
                </div>
            </main>
        </>
    )
}
