"use client"

import styles from "./CityTemplate.module.scss"
import Iframe from "react-iframe";
import Image from "next/image";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import {PageWrapperAnimation} from "@/components/animations/common/PageWrapperAnimation";
import ScrollSpy from "react-ui-scrollspy";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";
import parse from 'html-react-parser';

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
        <PageWrapperAnimation>
            <section className={`${styles.page} | flex flex-col px-3 md:flex-row`}>
                <section className={`${styles.page__left} | flex flex-col gap-2 items-center justify-center`}>
                    <h1 className={`${styles.page__left__text} | text-center`}>
                        {city}
                    </h1>
                </section>


                <section className={`${styles.page__center} | flex flex-col w-full`}>
                    <ScrollSpy
                        offsetBottom={100}
                        scrollThrottle={80}
                        useBoxMethod
                    >

                        {/* Classes */}
                        <section
                            className={`${styles.classes} | flex flex-col gap-8 items-center justify-center | px-10 md:px-5`}
                            id="classes"
                        >
                            <section className={`${styles.text} w-full`}>
                                <h2 className={`title`}>Classes</h2>
                                <section className={``}>
                                    <p className={`text-left ${styles.description}`}>
                                        {parse(allClassInfo.description)}
                                    </p>
                                </section>
                            </section>

                            <section className={`${styles.times} | ${styles.section}`}>
                                <TableContainer component={Paper} className={`${styles.table}`}>
                                    <Table
                                        stickyHeader
                                        aria-label="class times"
                                    >
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
                                                        <TableCell align="left">{classInfo.style}</TableCell>
                                                        <TableCell align="left">{classInfo.day}</TableCell>
                                                        <TableCell align="left">{classInfo.time}</TableCell>
                                                        <TableCell align="left">{classInfo.address}</TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </section>

                            <section className={`${styles.events} | ${styles.section}`}>
                                <section className={`flex gap-3 justify-center flex-col md:flex-row`}>
                                    <button type={`button`} className={`${styles.button}`}>
                                        <a href={allClassInfo.eventsLink} target={"_blank"}>
                                            <p className={`text-center md:text-left`}>
                                                View Events
                                            </p>
                                        </a>
                                    </button>

                                    <button type={`button`} className={`${styles.button}`}>
                                        <a href={contactInfo.facebookLink} target={"_blank"}>
                                            <p className={`text-center md:text-left`}>
                                                Visit our Facebook Page
                                            </p>
                                        </a>
                                    </button>
                                </section>
                            </section>
                        </section>

                        {/* Contact Us */}
                        <section id="contact-us">
                            <FadeInLeftAnimation>
                                <section className={`${styles.section} ${styles.contactUs} | `}>
                                    <section className={`flex flex-col gap-2 justify-center items-center`}>
                                        <h2 className={`title`}>Contact Us</h2>
                                        <p className={`italic | text-left`}>
                                            Feel free to reach out to us via our email address below, or by visiting any
                                            of
                                            our
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
                            </FadeInLeftAnimation>
                        </section>

                        {/* Media */}
                        <section id="media">
                            <FadeInLeftAnimation>
                                <section className={`${styles.media} | ${styles.section} | mt-10 px-8 w-full`}>
                                    <h2 className={`title`}>Media</h2>
                                    <section
                                        className={`flex flex-col justify-start gap-5 w-full | ${styles.videos}`}>
                                        <h3 className={``}>Some of our favourite dances</h3>
                                        <section className="flex gap-3 flex-col w-full md:flex-row">
                                            {mediaInfo.allVideos.map((video: videoInfo) => {
                                                return (
                                                    <section className={`flex flex-col gap-4 w-full`}>
                                                        <p className={`font-bold`}>{video.title}</p>
                                                        <section className={`${styles.videos__video}`}>
                                                            <Iframe url={video.url}
                                                                    id=""
                                                                    display="block"
                                                                    position="relative"
                                                                    width="100%"
                                                            />
                                                        </section>
                                                    </section>
                                                )
                                            })}
                                        </section>
                                    </section>

                                    <section className="playlists flex flex-col justify-start gap-5 w-full mt-5">
                                        <h3>
                                            <a href={mediaInfo.youtubeChannel} target="_blank" className={`link`}>
                                                <h3 className={``}>See some of our other dances</h3>
                                            </a>
                                        </h3>
                                        <section className="flex flex-col gap-3 justify-center min-w-full md:flex-row">
                                            {mediaInfo.allPlaylists.map((playlist: playlistInfo) => {
                                                return (
                                                    <a href={playlist.url} target="_blank" className={`w-full`}>
                                                        <section
                                                            className={`playlist__image | ${styles.playlist__image}`}>
                                                            <Image
                                                                priority
                                                                src={playlist.thumbnailPath}
                                                                fill={true}
                                                                className={`playlist__image__photo w-full | ${styles.playlist__image__photo}`}
                                                                alt={playlist.title}
                                                            />
                                                            <section className={`playlist__image__text | text-center`}>
                                                                <section className="playlist__image__text__title">
                                                                    <p>{playlist.title}</p>
                                                                </section>
                                                                <section className="playlist__image__text__body">
                                                                    <p>{playlist.description}</p>
                                                                </section>
                                                            </section>
                                                        </section>
                                                    </a>
                                                )
                                            })}
                                        </section>
                                    </section>
                                </section>
                            </FadeInLeftAnimation>
                        </section>

                        {/* Gallery */}
                        <section id="gallery">
                            <FadeInLeftAnimation>
                                <section className={`${styles.section} ${styles.gallery}`}>
                                    <h2 className={`title`}>Gallery</h2>
                                    <section className={`flex flex-col px-10 justify-center items-center w-full`}>
                                        <section
                                            className={`${styles.about__images} | flex flex-col gap-3 md:flex-row`}>
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
                            </FadeInLeftAnimation>
                        </section>
                    </ScrollSpy>

                </section>

                <section className={`${styles.page__right}`}>
                    <section className={`${styles.page__right__nav} | flex flex-col items-center justify-center`}>
                        <section
                            className={`${styles.page__right__nav__link} ${styles.page__right__nav__link__noBorder}`}
                            data-to-scrollspy-id="classes"
                        >
                            <Link href={rootPath + "/#classes"}>
                                <p
                                >
                                    Classes
                                </p>
                            </Link>
                        </section>
                        <section
                            className={`${styles.page__right__nav__link}`}
                            data-to-scrollspy-id="contact-us"
                        >
                            <Link href={rootPath + "/#contact-us"}
                            >
                                <p
                                >
                                    Contact Us
                                </p>
                            </Link>
                        </section>
                        <Link href={rootPath + "/#media"}
                              className={`${styles.page__right__nav__link}`}
                              data-to-scrollspy-id="media"
                        >
                            <p>
                                Media
                            </p>
                        </Link>
                        <Link href={rootPath + "/#gallery"}
                              className={`${styles.page__right__nav__link}`}
                              data-to-scrollspy-id="gallery"
                        >
                            <p>
                                Gallery
                            </p>
                        </Link>
                    </section>
                </section>
            </section>
        </PageWrapperAnimation>
    )
        ;
}

export default CityTemplate;