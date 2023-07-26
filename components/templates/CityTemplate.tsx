import styles from "./CityTemplate.module.scss"
import Iframe from "react-iframe";

type CityTemplateProps = {
    city: string,
    mediaInfo: mediaInfo
}

const CityTemplate = ({city, mediaInfo}: CityTemplateProps) => {
    return <section className={`${styles.page} | flex gap-6 | mt-6`}>
        <section className={`${styles.page__left}`}>
            {city}
        </section>
        <section className={`${styles.page__right} | flex flex-col gap-3 w-full`}>
            {/* About Us*/}
            <section className={`aboutUs | ${styles.section}`} id="about-us">
                <h2 className={`title`}>About us</h2>
            </section>

            {/* Class Times */}
            <section className={`classTimes | ${styles.section}`} id="class-times">
                <h2 className={`title`}>Class Times</h2>
            </section>

            {/* Media */}
            <section className={`media | ${styles.section}`} id="media">
                <h2 className={`title`}>Media</h2>

                <h3>Some of our favourite dances</h3>
                <section className="flex flex-row gap-4 justify-center">
                    {mediaInfo.allVideos.map((video: videoInfo) => {
                        return (
                            <section className={`flex flex-col items-center`}>
                                <p className={`font-bold`}>{video.title}</p>
                                <Iframe url={video.url}
                                        id=""
                                        className=""
                                        display="block"
                                        position="relative"/>
                            </section>
                        )
                    })}
                </section>
            </section>

            {/* Contact Us */}
            <section className={`contactUs | ${styles.section}`} id="contact-us">
                <h2 className={`title`}>Contact Us</h2>
            </section>
        </section>
    </section>
}

export default CityTemplate;