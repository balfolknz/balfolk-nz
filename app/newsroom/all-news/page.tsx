import styles from "./page.module.scss";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";
import PressMentionCard from "@/components/newsroom/pressMentionCard/pressMentionCard";

import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";
import { allPressMentions } from "@/content/newsroom/index.content";

const AllNewsPage = () => {
  return (
    <PageWrapperAnimation>
      <section className={`${styles.content} flex flex-col gap-5`}>
        <h1 className="title">News</h1>
        <section
          className={`${styles.pressMentions} w-100 flex flex-row gap-6 flex-wrap justify-center`}
        >
          {allPressMentions.allPressMentions.map(
            (pressMention: pressMention) => {
              return (
                <div className={`${styles.pressMentionCard}`} key={pressMention.link}>
                  <FadeInLeftAnimation>
                    <PressMentionCard
                      title={pressMention.title}
                      author={pressMention.author}
                      company={pressMention.company}
                      shortDescription={pressMention.shortDescription}
                      date={pressMention.date}
                      link={pressMention.link}
                    />
                  </FadeInLeftAnimation>
                </div>
              );
            }
          )}
        </section>
      </section>
    </PageWrapperAnimation>
  );
};

export default AllNewsPage;
