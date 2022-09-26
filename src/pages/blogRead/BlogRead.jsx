import style from './blogread.module.scss';

// Images 
import linkIcon from './../../assets/images/link-icon.svg';

export default function BlogRead() {
    return (
        <>
            <main className={style.blogReadMain}>
                <div className={style.blogMainImg}>
                    <div className={style.blogLayer}>
                        <div className={`${style.blogInfoContainer} section-x padding-x`}>
                            <div className={style.blogShortInfo}>
                                <p className={style.blogDate}>09/21/22</p>
                                <h1 className={style.blogMainTitle}>How tell to use knife correctly in a camp lol Manda?</h1>
                            </div>
                            <div className={style.blogCopyLink}>
                                <img src={linkIcon} alt="Copy Link" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
