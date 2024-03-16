"use client";

import styles from "./ContactUs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

type ConatctUsProps = {
  contactInfo: contactInfo;
};

const ContactUs = ({
  contactInfo,
}: ConatctUsProps) => {

  return (
    <section className={`${styles.section} ${styles.contactUs} | `}>
      <section className={`flex flex-col gap-2 justify-center items-center`}>
        <h2 className={`title`}>Contact Us</h2>
        <p className={`italic | text-left`}>
          Feel free to reach out to us via our email address below, or by
          visiting any of our socials. <br />
          We're always happy to answer any questions you might have! <br />
          Swing by for a class as well if you want to give Balfolk dancing a go
        </p>
      </section>
      <section className={`flex flex-row gap-6 | ${styles.socials}`}>
        {contactInfo.facebookLink && (
          <a href={contactInfo.facebookLink} target={"_blank"}>
            <FontAwesomeIcon icon={faFacebook} className={`icon`} />
          </a>
        )}

        {contactInfo.facebookGroupLink && (
          <a href={contactInfo.facebookGroupLink} target={"_blank"}>
            <FontAwesomeIcon icon={faUserGroup} className={`icon`} />
          </a>
        )}

        {contactInfo.instagramLink && (
          <a href={contactInfo.instagramLink} target={"_blank"}>
            <FontAwesomeIcon icon={faInstagram} className={`icon`} />
          </a>
        )}

        {contactInfo.youtubeLink && (
          <a href={contactInfo.youtubeLink} target={"_blank"}>
            <FontAwesomeIcon icon={faYoutube} className={`icon`} />
          </a>
        )}

        {contactInfo.email && (
          <a href={`mailto:${contactInfo.email}`} target={"_blank"}>
            <FontAwesomeIcon icon={faEnvelope} className={`icon`} />
          </a>
        )}
      </section>
    </section>
  );
};

export default ContactUs;
