import HeroImage from "@/components/common/heroImage/heroImage";
import {aboutContent, allTeamContent, learnMoreButtons} from "@/content/home/index.content";
import styles from "./page.module.scss"
import Link from "next/link";
import TeamCard from "@/components/home/TeamCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
    return (
        <>
            <HeroImage image={"/images/home/main2.jpg"}>
                <h1 className={`font-cormorantSC | ${styles.heroTitle}`}>Balfolk NZ</h1>
                <button className={`${styles.heroButton}`}>
                    <Link href="/#about-us">Learn more</Link>
                </button>
            </HeroImage>
            <section className="flex flex-start flex-col mb-16 page gap-20 mt-6">
                <section className="aboutUs | flexStart flex-col gap-5" id="about-us">
                    <section className={`${styles.aboutUs__description}`}>
                        <h1 className={`title`}>About Us</h1>
                        <p>{aboutContent.shortDescription}</p>
                    </section>

                    <section className={`${styles.aboutUs__description}`}>
                        <h3>What is Balfolk Dancing?</h3>
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
                                />
                            )
                        })}
                    </section>
                </section>

                <section className={`${styles.learnMore}`} id="learn-more">
                    <h1 className={`title`}>Learn more</h1>
                    <section className={`flex gap-3 mt-5 justify-center | ${styles.learnMore__links}`}>
                        {learnMoreButtons.allButtons.map((buttonContent) => {
                            return (
                                <button className={`${styles.heroButton}`}>
                                    <Link href={buttonContent.path}>{buttonContent.name}</Link>
                                </button>
                            )
                        })}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Page