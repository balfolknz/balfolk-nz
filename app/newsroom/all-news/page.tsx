import styles from "./page.module.scss";
import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";
import { allPressMentions } from "@/content/newsroom/index.content";
import FadeInLeftAnimation from "@/components/animations/common/FadeInLeftAnimation";
import TeamCard from "@/components/newsroom/teamCard/TeamCard";
import PressMentionCard from "@/components/newsroom/pressMentionCard/pressMentionCard";

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
                <div className={`${styles.pressMentionCard}`}>
                  <FadeInLeftAnimation>
                    <PressMentionCard
                      title={pressMention.title}
                      author={pressMention.author}
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
