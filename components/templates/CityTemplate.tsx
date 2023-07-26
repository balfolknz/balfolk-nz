import styles from "./CityTemplate.module.scss"
import Iframe from "react-iframe";
import Image from "next/image";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

type CityTemplateProps = {
    city: string,
    mediaInfo: mediaInfo,
    allClassInfo: allClassInfo,
    contactInfo: contactInfo
}

const CityTemplate = ({city, mediaInfo, allClassInfo, contactInfo}: CityTemplateProps) => {
    return <section className={`${styles.page} | flex gap-6 | mt-6`}>
        <section className={`${styles.page__left}`}>
            {city}
        </section>
        <section className={`${styles.page__right} | flex flex-col gap-10 w-full`}>
            {/* About Us*/}
            <section className={`aboutUs | ${styles.section}`} id="about-us">
                <h2 className={`title`}>About us</h2>
            </section>

            {/* Class Times */}
            <section className={`${styles.classes}`} id="classes">
                <h2 className={`title`}>Classes</h2>

                <section className={`${styles.times} | ${styles.section}`}>
                    <TableContainer component={Paper} className={`${styles.table}`}>
                        <Table stickyHeader aria-label="class times">
                            <TableHead>
                                <TableRow className={`${styles.table__header}`}>
                                    <TableCell align="center">Style</TableCell>
                                    <TableCell align="center">Day</TableCell>
                                    <TableCell align="center">Time</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allClassInfo.allClasses.map((classInfo: classInfo) => {
                                    return (
                                        <TableRow
                                            key={classInfo.day}
                                        >
                                            <TableCell align="center">{classInfo.style}</TableCell>
                                            <TableCell align="center">{classInfo.day}</TableCell>
                                            <TableCell align="center">{classInfo.time}</TableCell>
                                            <TableCell align="center">{classInfo.address}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>

                <section className={`${styles.events} | ${styles.section}`}>
                    <section className={`flex gap-3 mt-5 justify-center`}>
                        <button className={`${styles.button}`}>
                            <a href={allClassInfo.eventsLink} target={"_blank"}>
                                <p>
                                    View Events
                                </p>
                            </a>
                        </button>

                        <button className={`${styles.button}`}>
                            <a href={contactInfo.facebookLink} target={"_blank"}>
                                <p>
                                    Visit our Facebook Page
                                </p>
                            </a>
                        </button>
                    </section>
                </section>

            </section>

            {/* Media */}
            <section className={`${styles.media} | ${styles.section}`} id="media">
                <h2 className={`title`}>Media</h2>

                <section className="videos flex flex-col items-center justify-start">
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

                <section className="playlists flex flex-col items-center justify-start w-10/12">
                    <h3>
                        <a href={mediaInfo.youtubeChannel} target="_blank" className={`link`}>
                            See some of our other dances
                        </a>
                    </h3>
                    <section className="flex flex-row gap-4 justify-center min-w-full">
                        {mediaInfo.allPlaylists.map((playlist: playlistInfo) => {
                            return (
                                <section className={`playlist__image | ${styles.playlist__image}`}>
                                    <Image
                                        priority
                                        src={playlist.thumbnailPath}
                                        fill={true}
                                        className={`playlist__image__photo | ${styles.playlist__image__photo}`}
                                        alt={playlist.title}
                                    />
                                    <section className={`playlist__image__text | text-center`}>
                                        <a href={playlist.url} target="_blank">
                                            <section className="playlist__image__text__title">
                                                <p>{playlist.title}</p>
                                            </section>
                                            <section className="playlist__image__text__body">
                                                <p>{playlist.description}</p>
                                            </section>
                                        </a>
                                    </section>
                                </section>
                            )
                        })}
                    </section>
                </section>
            </section>

            {/* Contact Us */}
            <section className={`${styles.section} ${styles.contactUs} | `} id="contact-us">
                <h2 className={`title`}>Contact Us</h2>
                <section className={`flex flex-row gap-6 mb-4 | ${styles.socials}`}>
                    <a href={contactInfo.facebookLink} target={"_blank"}>
                        <FontAwesomeIcon icon={faFacebook} className={`icon`}/>
                    </a>
                    <a href={contactInfo.youtubeLink} target={"_blank"}>
                        <FontAwesomeIcon icon={faYoutube} className={`icon`}/>
                    </a>
                    <a href={`mailto:${contactInfo.email}`} target={"_blank"}>
                        <FontAwesomeIcon icon={faEnvelope} className={`icon`}/>
                    </a>
                </section>
            </section>
        </section>
    </section>
}

export default CityTemplate;