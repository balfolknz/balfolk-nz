"use client";

import styles from "./CityTemplate.module.scss";
import Link from "next/link";
import ScrollSpy from "react-ui-scrollspy";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";

import Classes from "@/components/templates/sections/Classes/Classes";
import ContactUs from "@/components/templates/sections/ContactUs/ContactUs";
import Media from "@/components/templates/sections/Media/Media";
import Gallery from "@/components/templates/sections/Gallery/Gallery";
import InstagramPreview from "@/components/templates/sections/InstagramPreview/InstagramPreview";
import Mentions from "@/components/templates/sections/Mentions/Mentions";

import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";

type CityTemplateProps = {
  city: string;
  rootPath: string;
  galleryInfo: galleryInfo;
  mediaInfo: mediaInfo;
  musicInfo: musicInfo;
  allClassInfo: allClassInfo;
  contactInfo: contactInfo;
  instagramPreviewInfo: instagramPreviewInfo;
  allCityMentions: Array<cityMention>;
};

const CityTemplate = ({
  city,
  rootPath,
  mediaInfo,
  musicInfo,
  allClassInfo,
  contactInfo,
  galleryInfo,
  instagramPreviewInfo,
  allCityMentions,
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
          <ScrollSpy
            updateHistoryStack={false}
            scrollThrottle={100}
          >
            {/* Classes */}
            <section className={`${styles.classesWrapper}`} id="classes">
              {allClassInfo.allClasses.length != 0 && (
                <Classes
                  allClassInfo={allClassInfo}
                  musicInfo={musicInfo}
                  contactInfo={contactInfo}
                />
              )}
            </section>

            {/* Contact Us */}
            <section id="contact-us">
              <FadeInLeftAnimation>
                <ContactUs contactInfo={contactInfo} />
              </FadeInLeftAnimation>
            </section>

            {/* Media */}
            <section id="media">
              {mediaInfo.allPlaylists.length != 0 &&
                mediaInfo.allVideos.length != 0 && (
                  <FadeInLeftAnimation>
                    <Media mediaInfo={mediaInfo} />
                  </FadeInLeftAnimation>
                )}
            </section>

            {/* Gallery */}
            <section id="gallery">
              <FadeInLeftAnimation>
                {galleryInfo.photoPaths.length != 0 && (
                  <Gallery galleryInfo={galleryInfo} />
                )}
              </FadeInLeftAnimation>
            </section>

            {/* Instagram preview */}
            {contactInfo.instagramLink && (
              <section id="instagram-preview">
                <FadeInLeftAnimation>
                  <InstagramPreview
                    city={city}
                    contactInfo={contactInfo}
                    instagramPreviewInfo={instagramPreviewInfo}
                  />
                </FadeInLeftAnimation>
              </section>
            )}

            {/* Mentions from other websites */}
            {allCityMentions.length != 0 && (
              <section id="all-mentions">
                <FadeInLeftAnimation>
                  <Mentions allCityMentions={allCityMentions} />
                </FadeInLeftAnimation>
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

            {galleryInfo.photoPaths.length != 0 && (
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

            {allCityMentions.length != 0 && (
              <Link
                href={rootPath + "/#all-mentions"}
                className={`${styles.page__right__nav__link}`}
                data-to-scrollspy-id="all-mentions"
              >
                <p>Mentions</p>
              </Link>
            )}
          </section>
        </section>
      </section>
    </PageWrapperAnimation>
  );
};

export default CityTemplate;
