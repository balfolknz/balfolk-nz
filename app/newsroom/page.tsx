"use client";

import styles from "./page.module.scss";
import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  aboutContent,
  allTeamContent,
  allPressMentions,
  kitData,
} from "@/content/newsroom/index.content";
import parse from "html-react-parser";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";
import TeamCard from "@/components/newsroom/teamCard/TeamCard";
import PressMentionCard from "@/components/newsroom/pressMentionCard/pressMentionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type navContent = {
  name: string;
  link: string;
};

const navLinks: Array<navContent> = [
  {
    name: "About",
    link: "/newsroom#about",
  },
  {
    name: "Team",
    link: "/newsroom#our-team",
  },
  {
    name: "Press Mentions",
    link: "/newsroom#press-mentions",
  },
  {
    name: "Kits",
    link: "/newsroom#kits",
  },
  {
    name: "Contact",
    link: "/newsroom#contact",
  },
];

const NewsroomPage = () => {
  const currentRoute = usePathname();

  return (
    <PageWrapperAnimation>
      <section className={`flex flex-col`}>
        <section
          className={`w-full bg-primary-dark ${styles.banner} flex flex-col items-center h-full`}
        >
          <div
            className={`w-full flex flex-col gap-0 justify-center items-center`}
          >
            <h1
              className={`text-white font-robotoFlex ${styles.banner__title}`}
            >
              Balfolk .
            </h1>
            <h2
              className={`text-white font-robotoFlex ${styles.banner__subtitle}`}
            >
              Newsroom
            </h2>
          </div>

          <div
            className={`${styles.banner__navbar} w-10/12 bg-primary-light pr-10 justify-self-end flex-row gap-6 hidden lg:flex `}
          >
            {navLinks.map((navItem: navContent) => {
              return (
                <p>
                  <Link
                    href={navItem.link}
                    key={navItem.link}
                    className={`text-white`}
                  >
                    {navItem.name}
                  </Link>
                </p>
              );
            })}
          </div>
        </section>

        <section
          className={`${styles.content} mb-10 flex flex-col mt-10`}
        >
          <FadeInLeftAnimation>
            <section className={`${styles.firstRow}`}>
              <section id="about" className="w-100 h-100">
                <h1 className={`title`}>About Us</h1>
                <p>{parse(aboutContent.description)}</p>
              </section>
              <section className={`${styles.meetOurTeam}`} id="our-team">
                <h1 className={`title`}>Our Team</h1>
                <section className={`flex gap-10 mt-5 flex-col md:gap-6`}>
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
                    );
                  })}
                </section>
              </section>
            </section>
          </FadeInLeftAnimation>

          <FadeInLeftAnimation>
            <section id="press-mentions" className={`${styles.pressMentions}`}>
              <div className={`${styles.pressMentions__content}`}>
                <h1 className={`${styles.title}`}>Press Mentions</h1>
                <section className={`${styles.posts} flex flex-col gap-6`}>
                  {allPressMentions.allPressMentions
                    .slice(0, 3)
                    .map((pressMention: pressMention) => {
                      return (
                        <PressMentionCard
                          title={pressMention.title}
                          author={pressMention.author}
                          shortDescription={pressMention.shortDescription}
                          date={pressMention.date}
                          link={pressMention.link}
                        />
                      );
                    })}

                  <button className={`${styles.allNewsButton}`}>
                    <Link
                      href="/newsroom/all-news/"
                      className={`${styles.allNewsButton__text}`}
                    >
                      See All News
                    </Link>
                  </button>
                </section>
              </div>
            </section>
          </FadeInLeftAnimation>
        </section>

        <FadeInLeftAnimation>
          <section id="kits" className={`w-100 ${styles.kits}`}>
            <section
              className={`w-full bg-primary-light-250 ${styles.kits__banner} flex flex-col justify-center md:flex-row items-center h-full gap-5 md:gap-12`}
            >
              <div
                className={`flex flex-col gap-0 justify-center items-center`}
              >
                <h2 className={`text-primary-dark`}>Press Kits</h2>
                <p className={`text-primary-dark`}>Grab our assets here!</p>
              </div>
              <div className="flex flex-row gap-3">
                {kitData.map((kit: kitData) => {
                  return (
                    <button className={`${styles.downloadButton}`}>
                      <a href={kit.downloadPath}>
                        <div className="flex flex-row gap-2 justify-center">
                          <FontAwesomeIcon
                            icon={faDownload}
                            className={`${styles.kit__icon}`}
                          />
                          <p className="whitespace-nowrap">{kit.name}</p>
                        </div>
                      </a>
                    </button>
                  );
                })}
              </div>
            </section>
          </section>
        </FadeInLeftAnimation>

        <FadeInLeftAnimation>
          <section id="contact" className={`${styles.contact}`}>
            <section
              className={`${styles.contact__banner} bg-primary-dark w-full h-full flex justify-center items-center`}
            >
              <div className="flex flex-row gap-12">
                <Image
                  priority
                  src={"/images/common/placeholder.svg"}
                  height={400}
                  width={400}
                  className={`hidden md:block`}
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  alt={""}
                />
                <div className="flex flex-col justify-center items-center gap-5">
                  <h2 className={`text-white text-center`}>For Media Inquiries</h2>
                  <a href={`mailto:balfolkdunedin@gmail.com`} target={"_blank"}>
                    <p className="text-lg text-white">balfolkdunedin@gmail.com</p>
                  </a>
                </div>
              </div>
            </section>
          </section>
        </FadeInLeftAnimation>
      </section>
    </PageWrapperAnimation>
  );
};

export default NewsroomPage;