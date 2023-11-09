import Image from "next/image";
import styles from "./heroImage.module.scss";
import Head from "next/head";

const { heroContent, heroWrapper, imageWrapper, heroImage } = styles;

type heroImageProps = {
  imagePaths: lowHighResImagePaths;
  children: any;
};

const HeroImage = ({ imagePaths, children }: heroImageProps) => {
  return (
    <section className={heroWrapper}>
      <Head>
        <link
          rel="preload"
          as="image"
          fetchpriority="high"
          href={imagePaths.lowResImagePath}
        />
      </Head>
      <section className={imageWrapper}>
        <Image
          priority
          src={imagePaths.highResImagePath}
          layout="fill"
          className={`${heroImage}`}
          style={{
            backgroundImage: `url(${imagePaths.lowResImagePath})`,
          }}
          alt={"Banner image"}
        />
      </section>

      <div className={`${heroContent}`}>{children}</div>
    </section>
  );
};

export default HeroImage;
