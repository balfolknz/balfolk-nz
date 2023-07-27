"use client"

import HeroImage from "@/components/common/heroImage/heroImage";
import {aboutContent, allTeamContent, heroImagePaths, learnMoreButtons} from "@/content/home/index.content";
import styles from "./page.module.scss"
import Link from "next/link";
import TeamCard from "@/components/home/TeamCard";
import Carousel from "react-material-ui-carousel";

const Page = () => {
    return (
        <>
            <Carousel
                interval={4000}
                animation={"slide"}
                duration={750}
            >
                {
                    heroImagePaths.map((imagePath, i) => {
                        return (
                            <HeroImage image={imagePath} key={i}>
                                <section className={`flex flex-col gap-2 items-center justify-center`}>
                                    <section className={`flex flex-col`}>
                                        <h1 className={`font-cormorantSC | ${styles.heroTitle}`}>Balfolk</h1>
                                        <h3 className={`font-cormorantSC | ${styles.heroSubtitle}`}>Aotearoa/NZ</h3>
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
            <section className="flex flex-start flex-col items-center page">
                <section className={`${styles.aboutUs} | flexStart flex-col gap-10`} id="gallery">
                    <section className={`${styles.aboutUs__description} ${styles.aboutUs__description__short}`}>
                        <h1 className={`title`}>About Us</h1>
                        <p>{aboutContent.shortDescription}</p>
                    </section>

                    <section className={`${styles.aboutUs__description} ${styles.aboutUs__description__verbose}`}>
                        <h3 className={`text-left w-full`}>What is Balfolk NZ?</h3>
                        <p>{aboutContent.verboseDescription}</p>
                    </section>
                </section>

                <section className={`${styles.meetOurTeam}`} id="meet-our-team">
                    <h1 className={`title`}>Meet our Team!</h1>
                    <section className={`flex gap-3 mt-5 | ${styles.meetOurTeam__cards}`}>
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

                <section className={`${styles.learnMore} | w-8/12`} id="learn-more">
                    <h1 className={`title`}>Learn more</h1>
                    <section className="flex flex-col gap-5 justify-center items-center">
                        <section className={`flex gap-3 justify-center items-center w-full | ${styles.learnMore__links}`}>
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
            </section>
        </>
    )
}

export default Page