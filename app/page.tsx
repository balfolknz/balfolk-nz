"use client";

import HeroImage from "@/components/common/heroImage/heroImage";
import styles from "./page.module.scss";
import Link from "next/link";
import PortraitTeamCard from "@/components/common/teamCards/portrait/PortraitTeamCard";
import Carousel from "react-material-ui-carousel";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";
import parse from "html-react-parser";
import Image from "next/image";

import {
  aboutContent,
  allTeamContent,
  heroImagePaths,
  learnMoreButtons,
  galleryInfo,
} from "@/content/home/index.content";
import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";

const Page = () => {
  return (
    <section className={`${styles.homePage}`}>
      <PageWrapperAnimation>
        <Carousel interval={6000} animation={"slide"} duration={1000}>
          {heroImagePaths.map((imagePaths, index) => {
            return (
              <HeroImage imagePaths={imagePaths} key={index}>
                <section
                  className={`flex flex-col gap-2 items-center justify-center`}
                >
                  <section className={`flex flex-col`}>
                    <h1 className={`font-cormorantSC | ${styles.heroTitle}`}>
                      Balfolk
                    </h1>
                    <h3
                      className={`font-cormorantSC text-center | ${styles.heroSubtitle}`}
                    >
                      Aotearoa/NZ
                    </h3>
                  </section>
                  <Link href="/#gallery" className={``}>
                    <button className={`${styles.heroButton}`}>
                      <p className={`${styles.heroButton__text}`}>Learn more</p>
                    </button>
                  </Link>
                </section>
              </HeroImage>
            );
          })}
        </Carousel>
        <section
          className={`flex flex-start flex-col items-center page w-full`}
        >
          {/* About Us */}
          <FadeInLeftAnimation>
            <section
              className={`${styles.aboutUs} | flexStart flex-col gap-10`}
              id="about-us"
            >
              <section
                className={`${styles.aboutUs__description} ${styles.aboutUs__description__short}`}
              >
                <h1 className={`title`}>About Us</h1>
                <p>{parse(aboutContent.shortDescription)}</p>
              </section>

              <section
                className={`${styles.aboutUs__description} ${styles.aboutUs__description__verbose}`}
              >
                <h3 className={`text-left mb-3`}>What is Balfolk?</h3>
                <p>{parse(aboutContent.verboseDescription)}</p>
              </section>
            </section>
          </FadeInLeftAnimation>

          {/* Meet our team */}
          <FadeInLeftAnimation>
            <section className={`${styles.meetOurTeam}`} id="meet-our-team">
              <h1 className={`title`}>Meet our Team!</h1>
              <section
                className={`flex gap-10 mt-5 flex-col md:flex-row md:gap-3 | ${styles.meetOurTeam__cards}`}
              >
                {allTeamContent.allTeams.map((teamContent) => {
                  return (
                    <PortraitTeamCard
                      image={teamContent.imagePath}
                      job={teamContent.job}
                      firstName={teamContent.firstName}
                      lastName={teamContent.lastName}
                      description={teamContent.description}
                      key={teamContent.lastName}
                    />
                  );
                })}
              </section>
            </section>
          </FadeInLeftAnimation>

          {/* Learn More */}
          <FadeInLeftAnimation>
            <section className={`${styles.learnMore}`} id="learn-more">
              <h1 className={`title`}>Learn more</h1>
              <section className="flex flex-col gap-5 justify-center items-center">
                <section
                  className={`flex gap-3 justify-center items-center w-full flex-col md:flex-row | ${styles.learnMore__links}`}
                >
                  {learnMoreButtons.allButtons.map((buttonContent) => {
                    return (
                      <Link
                        href={buttonContent.path}
                        className="w-full"
                        key={buttonContent.path}
                      >
                        <button className={`${styles.heroButton}`}>
                          <p className={`${styles.heroButton__text}`}>
                            {buttonContent.name}
                          </p>
                        </button>
                      </Link>
                    );
                  })}
                </section>
                <Link href={"/more#faq"} className="w-full md:w-1/3">
                  <button className={`${styles.heroButton}`}>
                    <p className={`${styles.heroButton__text}`}>FAQs</p>
                  </button>
                </Link>
              </section>
            </section>
          </FadeInLeftAnimation>

          {/* Gallery */}
          <section id="gallery">
            <FadeInLeftAnimation>
              {galleryInfo.photoPaths.length != 0 && (
                <section className={`${styles.section} ${styles.gallery}`}>
                  <h2 className={`title`}>Gallery</h2>
                  <section
                    className={`flex flex-col px-10 justify-center items-center w-full`}
                  >
                    <section
                      className={`${styles.about__images} | flex flex-col gap-3 md:flex-row`}
                    >
                      {galleryInfo.photoPaths.map((photoPath) => {
                        return (
                          <section className={`relative`}>
                            {/* <Zoom> */}
                            <Image
                              priority
                              width={300}
                              height={300}
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
        </section>
      </PageWrapperAnimation>
    </section>
  );
};

export default Page;
