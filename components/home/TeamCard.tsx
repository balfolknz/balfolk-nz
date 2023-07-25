import Image from "next/image";
import styles from "./teamCard.module.scss"

type teamCardProps = {
    image: string,
    job: string,
    firstName: string,
    lastName: string,
    description: string
}

const TeamCard = ({image, job, firstName, lastName, description}: teamCardProps) => {
    return (
        <section className={`${styles.teamCard} max-w-full flex-1 | flex gap-3`}>
            <section className={`teamCard__image`}>
                <Image
                    priority
                    src={image}
                    width={300}
                    height={300}
                    className={`teamCard__image__photo`}
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
                    {firstName}
                    <br/>
                    {lastName}
                </h3>
                <p className={`italic`}>{description}</p>
            </section>
        </section>

    );
};

export default TeamCard;
