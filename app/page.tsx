import HeroImage from "@/components/common/heroImage/heroImage";
import {aboutContent} from "@/content/home/index.content";
import styles from "./page.module.scss"
import Link from "next/link";

const Page = () => {
    return (
        <>
            <HeroImage image={"/images/home/main2.jpg"}>
                <h1 className={`font-cormorantSC | ${styles.heroTitle}`}>Balfork NZ</h1>
                <button className={`${styles.heroButton}`}>
                    <Link href="/#about-us">Learn more</Link>
                </button>
            </HeroImage>
            <section className="flex flex-start flex-col mb-16 page gap-3 mt-3">
                <section className="aboutUs | flexStart flex-col gap-5" id="about-us">
                    <section className={`${styles.aboutUs__description}`}>
                        <h1 className={`title`}>About Us</h1>
                        {aboutContent.shortDescription}
                    </section>

                    <section className={`${styles.aboutUs__description}`}>
                        <h3>What is Balfork Dancing?</h3>
                        {aboutContent.verboseDescription}
                    </section>
                </section>
                <h1>Meet our team!</h1>
            </section>
        </>
    )
}

export default Page