"use client";

import styles from "./Gallery.module.scss";
import Image from "next/image";

type GalleryProps = {
  galleryInfo: galleryInfo;
};

const Gallery = ({ galleryInfo }: GalleryProps) => {
  return (
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
                <Image
                  priority
                  width={480}
                  height={480}
                  src={photoPath}
                  className={`${styles.gallery__photo}`}
                  alt={"Photo"}
                />
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Gallery;
