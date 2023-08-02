"use client"

import HeroImage from "@/components/common/heroImage/heroImage";
import {aboutContent, allTeamContent, heroImagePaths, learnMoreButtons} from "@/content/home/index.content";
import styles from "./page.module.scss"
import Link from "next/link";
import TeamCard from "@/components/home/TeamCard";
import Carousel from "react-material-ui-carousel";
import {PageWrapperAnimation} from "@/components/animations/common/PageWrapperAnimation";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";

const Page = () => {
    return (
        <section className={`${styles.homePage}`}>
            <PageWrapperAnimation>
                <Carousel
                    interval={6000}
                    animation={"slide"}
                    duration={850}
                >
                    {
                        heroImagePaths.map((imagePath, i) => {
                            return (
                                <HeroImage image={imagePath} key={i}>
                                    <section className={`flex flex-col gap-2 items-center justify-center`}>
                                        <section className={`flex flex-col`}>
                                            <h1 className={`font-cormorantSC | ${styles.heroTitle}`}>Balfolk</h1>
                                            <h3 className={`font-cormorantSC text-center | ${styles.heroSubtitle}`}>Aotearoa/NZ</h3>
                                        </section>
                                        <button className={`${styles.heroButton}`}>
                                            <Link href="/#gallery" className={`${styles.heroButton__text}`}>Learn
                                                more</Link>
                                        </button>
                                    </section>
                                </HeroImage>
                            )
                        })
                    }
                </Carousel>
                <section className={`flex flex-start flex-col items-center page w-full`}>

                    {/* About Us */}
                    <FadeInLeftAnimation>
                        <section className={`${styles.aboutUs} | flexStart flex-col gap-10`} id="about-us">
                            <section className={`${styles.aboutUs__description} ${styles.aboutUs__description__short}`}>
                                <h1 className={`title`}>About Us</h1>
                                <p>{aboutContent.shortDescription}</p>
                            </section>

                            <section
                                className={`${styles.aboutUs__description} ${styles.aboutUs__description__verbose}`}>
                                <h3 className={`text-left mb-3`}>What is Balfolk NZ?</h3>
                                <p>{aboutContent.verboseDescription}</p>
                            </section>
                        </section>
                    </FadeInLeftAnimation>

                    {/* Meet our team */}
                    <FadeInLeftAnimation>
                        <section className={`${styles.meetOurTeam}`} id="meet-our-team">
                            <h1 className={`title`}>Meet our Team!</h1>
                            <section
                                className={`flex gap-10 mt-5 flex-col md:flex-row md:gap-3 | ${styles.meetOurTeam__cards}`}>
                                {allTeamContent.allTeams.map((teamContent) => {
                                    return (
                                        <TeamCard
                                            image={teamContent.imagePath}
                                            job={teamContent.job}
                                            firstName={teamContent.firstName}
                                            lastName={teamContent.lastName}
                                            description={teamContent.description}
                                            key={teamContent.lastName}
                                        />
                                    )
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
                                    className={`flex gap-3 justify-center items-center w-full flex-col md:flex-row | ${styles.learnMore__links}`}>
                                    {learnMoreButtons.allButtons.map((buttonContent) => {
                                        return (
                                            <button className={`${styles.heroButton}`}>
                                                <Link href={buttonContent.path}>{buttonContent.name}</Link>
                                            </button>
                                        )
                                    })}
                                </section>
                                <button className={`${styles.heroButton}`}>
                                    <Link href={"/more#faq"}>FAQs</Link>
                                </button>
                            </section>
                        </section>
                    </FadeInLeftAnimation>

                </section>
            </PageWrapperAnimation>
        </section>
    )
}

export default Page