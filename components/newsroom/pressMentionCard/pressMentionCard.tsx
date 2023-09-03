import styles from "./pressMentionCard.module.scss";

const PressMentionCard = ({
  title,
  author,
  company,
  date,
  shortDescription,
  link,
}: pressMention) => {
  return (
    <section
      className={`${styles.card} w-full flex-1 | flex gap-3 flex-col justify-start items-start`}
    >
      <a className={``} href={`${link}`} target={"_blank"}>
        <h3 className={`pb-3 ${styles.title}`}>{title}</h3>
        <p>
          By <strong>{author}</strong> - <span className="italic">{company}</span>
        </p>
        <p>On {date}</p>
        <p className="pt-2">{shortDescription}</p>
      </a>
    </section>
  );
};

export default PressMentionCard;
