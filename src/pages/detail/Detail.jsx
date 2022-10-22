import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

// Styles & Images
import style from './detail.module.scss';

export default function Detail({ setPageNav }) {

    const { id } = useParams();

    const [tour, setTour] = useState({});
    const [allTours, setAllTours] = useState([]);
    const data = useSelector(state => state.eventsReducer.products);
    useEffect(() => {
        setAllTours(data);
        console.log("Data successfully copied to the state!");
        console.log("abc", allTours);
        console.log("cdf", data);
    }, [data]);
    console.log(data);

    // Getting specific tour data
    useEffect(() => {
        setTour(allTours.filter(a => a.id == id));
        console.log(tour);
    }, [allTours]);

    useEffect(() => {
        setPageNav('events');
    }, []);

    return (
        <>
            <main className={`section-x padding-x ${style.detail}`}>
                <div className={style.detail2Column}>
                    <div className={style.detailContainer}>
                        <div className={style.tourSneakPeakInfo}>
                            <p>Berlin - {tour[0]?.title}</p>
                        </div>
                        <div className={style.tourInfo}>
                            <div className={style.tourImg}></div>
                            <div className={style.tourIntro}>
                                <h1 className={style.tourTitle}>{tour[0]?.title}</h1>
                                <p className={style.tourShortDescription}>Hike and camp among otherworldly rock formations at this Utah park.</p>
                            </div>
                        </div>

                        <div className={style.tourAbout}>
                                <h3>About</h3>
                            <p>
                                Set in the southwestern corner of Utah, Bryce Canyon National Park is famous for its shale and sandstone rock formations, known as hoodoos or fairy chimneys, which dominate the landscape. Hiking and photography, unsurprisingly, are particularly popular activities, and the park offers a variety of trails that range from easy walks along the rim to more challenging backcountry hikes. The visitor center also offers a variety of educational programs, from ranger-led horseback rides to an interpretive film about the park’s geological history. You can even camp among the hoodoos, either at one of two campgrounds or at one of 10 backcountry campsites.
                            </p>
                        </div>    
                    </div>
                    <div className={style.tourRecommendations}>recommendations</div>
                </div>
            </main>
        </>
    )
}
