import Image from 'next/image'
import styles from "./heroImage.module.scss"

const {heroContent, heroWrapper, imageWrapper, heroImage} = styles;

type heroImageProps = {
    image: string,
    children: any
}

const HeroImage = ({image, children}: heroImageProps) => (
    <section className={heroWrapper}>
        <section className={imageWrapper}>
            <Image
                priority
                src={image}
                layout="fill"
                className={`${heroImage}`}
                style={{
                    objectFit: "cover",
                    objectPosition: "top",

            }}
                alt={""}
            />
        </section>

        <div className={`${heroContent}`}>
            {children}
        </div>
    </section>
);

export default HeroImage;