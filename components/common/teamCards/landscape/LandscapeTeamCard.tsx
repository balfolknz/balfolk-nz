import Image from "next/image";
import styles from "./LandscapeTeamCard.module.scss";
import parse from "html-react-parser";

type teamCardProps = {
    image: string,
    job: string,
    firstName: string,
    lastName: string,
    description: string
}

const LandscapeTeamCard = ({image, job, firstName, lastName, description}: teamCardProps) => {
    return (
        <section className={`${styles.teamCard} max-w-full flex-1 | flex gap-3 flex-col`}>
            <section className={`teamCard__image | ${styles.teamCard__image}`}>
                <Image
                    priority
                    src={image}
                    fill={true}
                    className={`teamCard__image__photo | ${styles.teamCard__image__photo}`}
                    alt={job}
                />
                <section className={`teamCard__image__text`}>
                    <section className="teamCard__image__text__title">
                        {job}
                    </section>
                </section>
            </section>

            <section className={`teamcard__content | flex flex-col`}>
                <h3 className={`pb-1`}>
                    {firstName} {lastName}
                </h3>
                <p className={``}>{parse(description)}</p>
            </section>
        </section>

    );
};

export default LandscapeTeamCard;
