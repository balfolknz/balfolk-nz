import styles from "./CityTemplate.module.scss"
import Iframe from "react-iframe";
import Image from "next/image";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";

type CityTemplateProps = {
    city: string,
    rootPath: string,
    galleryInfo: galleryInfo,
    mediaInfo: mediaInfo,
    allClassInfo: allClassInfo,
    contactInfo: contactInfo
}

const CityTemplate = ({city, rootPath, mediaInfo, allClassInfo, contactInfo, galleryInfo}: CityTemplateProps) => {
    return (
        <section className={`${styles.page} | flex flex-col md:flex-row`}>
            <section className={`${styles.page__left}`}>
                <h1 className={`${styles.page__left__text}`}>
                    {city}
                </h1>
            </section>


            <section className={`${styles.page__center} | flex flex-col w-full`}>

                {/* Classes */}
                <section className={`${styles.classes} | flex flex-col gap-8 items-center justify-center | px-5`}
                         id="classes">
                    <section className={`${styles.text}`}>
                        <h2 className={`title`}>Classes</h2>
                        <section className={``}>
                            <p>{allClassInfo.description}</p>
                        </section>
                    </section>

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
                        <section className={`flex gap-3 justify-center`}>
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

                {/* Contact Us */}
                <section className={`${styles.section} ${styles.contactUs} | `} id="contact-us">
                    <section className={`flex flex-col gap-2 justify-center items-center text-center`}>
                        <h2 className={`title`}>Contact Us</h2>
                        <p className={`italic`}>
                            Feel free to reach out to us via our email address below, or by visiting any of our
                            socials. <br/>
                            We're always happy to answer any questions you might have! <br/>
                            Swing by for a class as well if you want to give Balfolk dancing a go
                        </p>
                    </section>
                    <section className={`flex flex-row gap-6 | ${styles.socials}`}>
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

                {/* Media */}
                <section className={`${styles.media} | ${styles.section}`} id="media">
                    <h2 className={`title`}>Media</h2>
                    <section className={`videos flex flex-col items-center justify-start gap-5 | ${styles.videos}`}>
                        <h3>Some of our favourite dances</h3>
                        <section className="flex flex-row gap-5 justify-center">
                            {mediaInfo.allVideos.map((video: videoInfo) => {
                                return (
                                    <section className={`flex flex-col items-center gap-2`}>
                                        <p className={`font-bold`}>{video.title}</p>
                                        <section className={`${styles.videos__video}`}>
                                            <Iframe url={video.url}
                                                    id=""
                                                    display="block"
                                                    position="relative"/>
                                        </section>
                                    </section>
                                )
                            })}
                        </section>
                    </section>

                    <section className="playlists flex flex-col items-center justify-start gap-5 w-10/12">
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

                {/* Gallery */}
                <section className={`${styles.section} ${styles.gallery}`} id="gallery">
                    <h2 className={`title`}>Gallery</h2>
                    <section className={`flex flex-col px-10 justify-center items-center w-full`}>
                        <section className={`${styles.about__images} | flex flex-row gap-3`}>
                            {galleryInfo.groupPhotoPaths.map(photoPath => {
                                return (
                                    <section className={`relative`}>
                                        <Image
                                            priority
                                            width={300}
                                            height={300}
                                            src={photoPath}
                                            className={`${styles.gallery__photo}`}
                                            alt={"Group photo"}
                                        />
                                    </section>
                                )
                            })}
                        </section>
                    </section>
                </section>

            </section>

            <section className={`${styles.page__right}`}>
                <section className={`${styles.page__right__nav} | flex flex-col gap-2 items-center justify-center`}>
                    <p className={`${styles.page__right__nav__link}`}><Link href={rootPath + "/#classes"}>Classes</Link>
                    </p>
                    <p className={`${styles.page__right__nav__link}`}><Link href={rootPath + "/#contact-us"}>Contact
                        Us</Link></p>
                    <p className={`${styles.page__right__nav__link}`}><Link href={rootPath + "/#media"}>Media</Link></p>
                    <p className={`${styles.page__right__nav__link}`}><Link href={rootPath + "/#gallery"}>Gallery</Link>
                    </p>
                </section>
            </section>
        </section>
    )
}

export default CityTemplate;