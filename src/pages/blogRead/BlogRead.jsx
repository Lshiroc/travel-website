import style from './blogread.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Images 
import linkIcon from './../../assets/images/link-icon.svg';
import doneIcon from './../../assets/icons/done-icon.svg';

export default function BlogRead() {
    // const [done, setDone] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        // setDone(true);

        // setTimeout(() => setDone(false), 4000);
    }

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
                            <div className={style.blogBtns}>
                                <div className={style.blogCopyBtn} onClick={() => copyLink()}>
                                    <img src={false ? doneIcon : linkIcon} alt="Copy Link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.blogContent}>
                    <div className={style.blogText}>
                        <h1>How it started?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam totam natus enim fugiat aliquid quo quos sequi esse odio consectetur molestiae aspernatur, porro, velit neque eius delectus! Ea, odio quod. Accusantium laboriosam dolor aspernatur tempore voluptatibus beatae error numquam voluptate eum, fugit repudiandae soluta dignissimos non asperiores vitae architecto doloribus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit. Aspernatur numquam itaque dolores impedit, at consequatur corporis fugit, eum ab et accusantium? Temporibus repellat magni at natus, deleniti sint neque laborum aut ipsa! Ipsam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum id quam harum dolore et, eius minus! Perferendis, possimus. Aut, quisquam repellendus suscipit consectetur sit cumque eos sint numquam ratione! Pariatur, voluptate ducimus necessitatibus quos voluptates beatae quasi odit dolor obcaecati officiis illo officia, commodi sed corrupti eius harum delectus a, fugiat distinctio repellat cumque dicta deleniti libero dignissimos. Dolores neque impedit tempore, esse alias, ipsa corrupti, quod expedita eum ab eius sequi eveniet earum odit cum. Repellendus omnis blanditiis placeat sapiente voluptate! Fugit eligendi blanditiis consectetur quaerat molestias quibusdam doloribus, ratione maiores. Expedita possimus natus culpa quia dignissimos quis nobis amet necessitatibus ex animi, vitae ducimus dolor, facere laudantium officia quam, laboriosam architecto dolores libero. Necessitatibus, architecto itaque dignissimos error pariatur quas temporibus ducimus illo debitis! Architecto voluptas rerum aut pariatur animi eum incidunt nostrum accusantium fugit, beatae, natus ducimus sit maiores ea, totam laboriosam explicabo sapiente aspernatur nesciunt!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facilis aut dolore, fuga blanditiis iure. Eligendi, perspiciatis voluptate? Itaque eveniet vel dignissimos molestiae, magnam sed, suscipit exercitationem et doloribus fugit reprehenderit. Quae veritatis saepe laboriosam architecto. Harum repellat vel cupiditate.</p>
                        <h1>Results changed everything</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem eaque placeat ratione quis molestiae ullam, perferendis aliquid, maxime, consectetur animi pariatur adipisci doloribus. Eligendi quos sit harum enim quia perferendis accusantium saepe ut omnis. Veritatis enim quaerat maiores, amet ex nulla quae a suscipit molestiae dolorem reiciendis maxime nemo incidunt laboriosam quibusdam corporis vitae fugit dicta laborum? Excepturi possimus nostrum nam ratione enim perspiciatis, explicabo dignissimos ab, illum laudantium ducimus aspernatur magnam esse! Suscipit nulla maiores quasi natus at voluptatibus dignissimos saepe eum optio maxime atque nam, tempora facilis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic voluptate, asperiores fugit provident repellat culpa magni, iusto sed quasi ipsum voluptatibus dolores inventore est itaque quidem nesciunt ipsa corporis nobis molestiae alias laudantium, a impedit quas? Vel, beatae impedit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui vel illum ea quos consequatur nihil tenetur officiis vitae, sit modi repellat culpa quibusdam animi aliquid ullam repellendus temporibus fugit quam nulla ab! Ab dignissimos quam praesentium nulla doloremque facilis quo dolores! Odit sequi, atque, molestiae corporis adipisci iure, voluptates rem vero aliquid deserunt quo quisquam necessitatibus alias amet vel tenetur dolorem? Quis tenetur, maxime assumenda eveniet ut pariatur perferendis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere harum explicabo error quibusdam aliquid! Commodi sint similique quisquam eligendi ex maiores quidem rem cum pariatur sapiente, illum voluptate ratione, aperiam porro debitis, perspiciatis rerum quia repudiandae ut repellat fugiat? Odio accusantium perspiciatis deleniti tenetur minima doloribus earum, aspernatur at! Ipsa adipisci libero modi blanditiis quis assumenda nemo dicta suscipit.</p>
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
