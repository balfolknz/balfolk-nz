import Image from "next/image";
import styles from "./teamCard.module.scss";

type teamCardProps = {
  image: string;
  job: string;
  firstName: string;
  lastName: string;
  description: string;
};

const TeamCard = ({
  image,
  job,
  firstName,
  lastName,
  description,
}: teamCardProps) => {
  return (
    <section
      className={`${styles.teamCard} w-full flex-1 | flex gap-8 flex-col md:flex-row justify-start items-center md:items-start`}
    >
      <div className={`${styles.teamCard__image} relative`}>
        <Image src={image} width={200} height={200} alt={job} />
      </div>

      <section className={`flex flex-col w-full`}>
        <h3 className={`pb-1`}>
          {firstName} {lastName}
        </h3>
        <p className={`italic`}>{description}</p>
      </section>
    </section>
  );
};

export default TeamCard;
