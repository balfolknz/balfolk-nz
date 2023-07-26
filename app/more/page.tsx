import styles from "./page.module.scss"
import {questions} from "@/content/more/questions.content";

const MorePage = () => {
    return (
        <section className={`${styles.page} `}>
            <section className={`${styles.faq} | flex flex-col gap-6 justify-center items-center`}>
                <h2 className={`title`}>FAQs</h2>
                <section className={`gridTwoCol | px-5`} id={"questions"}>
                    {questions.questions.map((question: questionContent) => {
                        return (
                            <section className={`${styles.questionWrapper}`}>
                                <section className={`${styles.questionWrapper__question}`}>
                                    <h3>{question.question}</h3>
                                </section>
                                <section className={`${styles.questionWrapper__answer}`}>
                                    <p>{question.answer}</p>
                                </section>
                            </section>
                        )
                    })}
                </section>
            </section>
        </section>
    )
}

export default MorePage