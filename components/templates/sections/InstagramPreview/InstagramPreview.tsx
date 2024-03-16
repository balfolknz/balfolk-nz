"use client";

import styles from "./InstagramPreview.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { InstagramFeed } from "@/components/common/instagramFeed/InstagramFeed";

type InstagramPreviewProps = {
  city: string;
  contactInfo: contactInfo;
  instagramPreviewInfo: instagramPreviewInfo;
};

const InstagramPreview = ({
  city,
  contactInfo,
  instagramPreviewInfo,
}: InstagramPreviewProps) => {
  return (
    <div className={`${styles.instagramPreview}`}>
      <a href={contactInfo.instagramLink} target="_blank">
        <h2
          className={`${styles.instagramPreview__title} | title flex justify-center`}
        >
          Our Instagram
          <span className="hidden md:block">
            <FontAwesomeIcon icon={faInstagram} className={`ml-2`} /> !
          </span>
        </h2>
      </a>

      <InstagramFeed cityName={`${city}`} limit={instagramPreviewInfo.limit} />
    </div>
  );
};

export default InstagramPreview;
