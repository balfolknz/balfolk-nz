"use client";

import styles from "./CityTemplate.module.scss";
import Iframe from "react-iframe";
import Image from "next/image";
import Link from "next/link";
import ScrollSpy from "react-ui-scrollspy";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";
import parse from "html-react-parser";
import Zoom from "react-medium-image-zoom";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";
import { InstagramFeed } from "@/components/common/instagram_feed/InstagramFeed";

type CityTemplateProps = {
  city: string;
  rootPath: string;
  galleryInfo: galleryInfo;
  mediaInfo: mediaInfo;
  allClassInfo: allClassInfo;
  contactInfo: contactInfo;
  instagramPreviewInfo: instagramPreviewInfo;
};

const CityTemplate = ({
  city,
  rootPath,
  mediaInfo,
  allClassInfo,
  contactInfo,
  galleryInfo,
  instagramPreviewInfo,
}: CityTemplateProps) => {
  return (
    <PageWrapperAnimation>
      <section className={`${styles.page} | flex flex-col px-3 md:flex-row`}>
        <section
          className={`${styles.page__left} | flex flex-col gap-2 items-center justify-center`}
        >
          <h1 className={`${styles.page__left__text} | text-center`}>{city}</h1>
        </section>

        <section className={`${styles.page__center} | flex flex-col w-full`}>
          <ScrollSpy offsetBottom={100} scrollThrottle={80} useBoxMethod>
            {/* Classes */}
            <section
              className={`${styles.classes} | flex flex-col gap-8 items-center justify-center | px-10 md:px-5`}
              id="classes"
            >
              {allClassInfo.allClasses.length != 0 && (
                <>
                  <section className={`${styles.text}`}>
                    <h2 className={`title`}>Classes</h2>
                    <section className={``}>
                      <p
                        className={`text-left ${styles.description} flex flex-column justify-center items-center`}
                      >
                        {parse(allClassInfo.description)}
                      </p>
                    </section>
                  </section>

                  <section className={`${styles.times} | ${styles.section}`}>
                    <TableContainer
                      component={Paper}
                      className={`${styles.table}`}
                    >
                      <Table stickyHeader aria-label="class times">
                        <TableHead>
                          <TableRow className={`${styles.table__header}`}>
                            <TableCell align="center">Style</TableCell>
                            <TableCell align="center">Day</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">$/Wk</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {allClassInfo.allClasses.map(
                            (classInfo: classInfo) => {
                              return (
                                <TableRow key={classInfo.style}>
                                  <TableCell align="center">
                                    {parse(classInfo.style)}
                                  </TableCell>
                                  <TableCell align="center">
                                    {classInfo.day}
                                  </TableCell>
                                  <TableCell align="center">
                                    {classInfo.time}
                                  </TableCell>
                                  <TableCell align="center">
                                    {parse(classInfo.address)}
                                  </TableCell>
                                  <TableCell align="center">
                                    {parse(classInfo.pricePerWeek)}
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </section>

                  <section className={`${styles.events} | ${styles.section}`}>
                    <section
                      className={`flex gap-3 justify-center flex-col md:flex-row`}
                    >
                      {allClassInfo.eventsLink && (
                        <button type={`button`} className={`${styles.button}`}>
                          <a href={allClassInfo.eventsLink} target={"_blank"}>
                            <p className={`text-center md:text-left`}>
                              View Events
                            </p>
                          </a>
                        </button>
                      )}

                      {contactInfo.facebookLink && (
                        <button type={`button`} className={`${styles.button}`}>
                          <a href={contactInfo.facebookLink} target={"_blank"}>
                            <p className={`text-center md:text-left`}>
                              Visit our Facebook Page
                            </p>
                          </a>
                        </button>
                      )}
                    </section>
                  </section>
                </>
              )}
            </section>

            {/* Contact Us */}
            <section id="contact-us">
              <FadeInLeftAnimation>
                <section className={`${styles.section} ${styles.contactUs} | `}>
                  <section
                    className={`flex flex-col gap-2 justify-center items-center`}
                  >
                    <h2 className={`title`}>Contact Us</h2>
                    <p className={`italic | text-left`}>
                      Feel free to reach out to us via our email address below,
                      or by visiting any of our socials. <br />
                      We're always happy to answer any questions you might have!{" "}
                      <br />
                      Swing by for a class as well if you want to give Balfolk
                      dancing a go
                    </p>
                  </section>
                  <section
                    className={`flex flex-row gap-6 | ${styles.socials}`}
                  >
                    {contactInfo.facebookLink && (
                      <a href={contactInfo.facebookLink} target={"_blank"}>
                        <FontAwesomeIcon icon={faFacebook} className={`icon`} />
                      </a>
                    )}

                    {contactInfo.facebookGroupLink && (
                      <a href={contactInfo.facebookGroupLink} target={"_blank"}>
                        <FontAwesomeIcon
                          icon={faUserGroup}
                          className={`icon`}
                        />
                      </a>
                    )}

                    {contactInfo.instagramLink && (
                      <a href={contactInfo.instagramLink} target={"_blank"}>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className={`icon`}
                        />
                      </a>
                    )}

                    {contactInfo.youtubeLink && (
                      <a href={contactInfo.youtubeLink} target={"_blank"}>
                        <FontAwesomeIcon icon={faYoutube} className={`icon`} />
                      </a>
                    )}

                    {contactInfo.email && (
                      <a href={`mailto:${contactInfo.email}`} target={"_blank"}>
                        <FontAwesomeIcon icon={faEnvelope} className={`icon`} />
                      </a>
                    )}
                  </section>
                </section>
              </FadeInLeftAnimation>
            </section>

            {/* Media */}
            <section id="media">
              {mediaInfo.allPlaylists.length != 0 &&
                mediaInfo.allVideos.length != 0 && (
                  <FadeInLeftAnimation>
                    <section
                      className={`${styles.media} | ${styles.section} | mt-10 px-8 w-full`}
                    >
                      <h2 className={`title`}>Media</h2>

                      {mediaInfo.allVideos.length != 0 && (
                        <section
                          className={`flex flex-col justify-start gap-5 w-full | ${styles.videos}`}
                        >
                          <h3 className={``}>Some of our favourite dances</h3>
                          <section className="flex gap-3 flex-col w-full md:flex-row">
                            {mediaInfo.allVideos.map((video: videoInfo) => {
                              return (
                                <section
                                  className={`flex flex-col gap-4 w-full`}
                                >
                                  <p className={`font-bold`}>{video.title}</p>
                                  <section
                                    className={`${styles.videos__video}`}
                                  >
                                    <Iframe
                                      url={video.url}
                                      id=""
                                      display="block"
                                      position="relative"
                                      width="100%"
                                    />
                                  </section>
                                </section>
                              );
                            })}
                          </section>
                        </section>
                      )}

                      {mediaInfo.allPlaylists.length != 0 && (
                        <section className="playlists flex flex-col justify-start gap-5 w-full mt-5">
                          <h3>
                            <a
                              href={mediaInfo.youtubeChannel}
                              target="_blank"
                              className={`link`}
                            >
                              <h3 className={``}>
                                See some of our other dances
                              </h3>
                            </a>
                          </h3>
                          <section className="flex flex-col gap-3 justify-center min-w-full md:flex-row">
                            {mediaInfo.allPlaylists.map(
                              (playlist: playlistInfo) => {
                                return (
                                  <a
                                    href={playlist.url}
                                    target="_blank"
                                    className={`w-full`}
                                  >
                                    <section
                                      className={`playlist__image | ${styles.playlist__image}`}
                                    >
                                      <Image
                                        priority
                                        src={playlist.thumbnailPath}
                                        fill={true}
                                        className={`playlist__image__photo w-full | ${styles.playlist__image__photo}`}
                                        alt={playlist.title}
                                      />
                                      <section
                                        className={`playlist__image__text | text-center`}
                                      >
                                        <section className="playlist__image__text__title">
                                          <p>{playlist.title}</p>
                                        </section>
                                        <section className="playlist__image__text__body">
                                          <p>{playlist.description}</p>
                                        </section>
                                      </section>
                                    </section>
                                  </a>
                                );
                              }
                            )}
                          </section>
                        </section>
                      )}
                    </section>
                  </FadeInLeftAnimation>
                )}
            </section>

            {/* Gallery */}
            <section id="gallery">
              <FadeInLeftAnimation>
                {galleryInfo.groupPhotoPaths.length != 0 && (
                  <section className={`${styles.section} ${styles.gallery}`}>
                    <h2 className={`title`}>Gallery</h2>
                    <section
                      className={`flex flex-col px-10 justify-center items-center w-full`}
                    >
                      <section
                        className={`${styles.about__images} | flex flex-col gap-3 md:flex-row`}
                      >
                        {galleryInfo.groupPhotoPaths.map((photoPath) => {
                          return (
                            <section className={`relative`}>
                              {/* <Zoom> */}
                              <Image
                                priority
                                width={480}
                                height={480}
                                src={photoPath}
                                className={`${styles.gallery__photo}`}
                                alt={"Photo"}
                              />
                              {/* </Zoom> */}
                            </section>
                          );
                        })}
                      </section>
                    </section>
                  </section>
                )}
              </FadeInLeftAnimation>
            </section>

            {/* Instagram preview */}
            {contactInfo.instagramLink && (
              <section
                id="instagram-preview"
                className={`${styles.section} ${styles.instagramPreview}`}
              >
                <a href={contactInfo.instagramLink} target="_blank">
                  <h2 className={`title`}>Our Instagram!</h2>
                </a>

                <InstagramFeed
                  tokenName={`NEXT_PUBLIC_${instagramPreviewInfo.apiEnvVariableName}`}
                  limit={instagramPreviewInfo.limit}
                />
              </section>
            )}
          </ScrollSpy>
        </section>

        <section className={`${styles.page__right}`}>
          <section
            className={`${styles.page__right__nav} | flex flex-col items-center justify-center`}
          >
            {allClassInfo.allClasses.length != 0 && (
              <section
                className={`${styles.page__right__nav__link} ${styles.page__right__nav__link__noBorder}`}
                data-to-scrollspy-id="classes"
              >
                <Link href={rootPath + "/#classes"}>
                  <p>Classes</p>
                </Link>
              </section>
            )}
            <Link
              href={rootPath + "/#contact-us"}
              className={`${styles.page__right__nav__link}`}
              data-to-scrollspy-id="contact-us"
            >
              <p>Contact Us</p>
            </Link>

            {mediaInfo.allPlaylists.length != 0 && (
              <Link
                href={rootPath + "/#media"}
                className={`${styles.page__right__nav__link}`}
                data-to-scrollspy-id="media"
              >
                <p>Media</p>
              </Link>
            )}

            {galleryInfo.groupPhotoPaths.length != 0 && (
              <Link
                href={rootPath + "/#gallery"}
                className={`${styles.page__right__nav__link}`}
                data-to-scrollspy-id="gallery"
              >
                <p>Gallery</p>
              </Link>
            )}

            {contactInfo.instagramLink && (
              <Link
                href={rootPath + "/#instagram-preview"}
                className={`${styles.page__right__nav__link}`}
                data-to-scrollspy-id="instagram-preview"
              >
                <p>Instagram</p>
              </Link>
            )}
          </section>
        </section>
      </section>
    </PageWrapperAnimation>
  );
};

export default CityTemplate;
