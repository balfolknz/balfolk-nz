import styles from "./page.module.scss"
import {questions} from "@/content/more/questions.content";
import {PageWrapperAnimation} from "@/components/animations/PageWrapperAnimation";

const MorePage = () => {
    return (
        <PageWrapperAnimation>
            <section className={`${styles.page} `}>
                <section className={`${styles.faq} | flex flex-col gap-6 justify-center items-center`} id={"faqs"}>
                    <h2 className={`title`}>FAQs</h2>
                    <section className={`gridTwoCol | px-5`}>
                        {questions.questions.map((question: questionContent) => {
                            return (
                                <section className={`${styles.questionWrapper} gap-4 `}>
                                    <section
                                        className={`${styles.questionWrapper__question} | text-center md:text-left`}>
                                        <h3>{question.question}</h3>
                                    </section>
                                    <section className={`${styles.questionWrapper__answer} | text-center md:text-left`}>
                                        <p>{question.answer}</p>
                                    </section>
                                </section>
                            )
                        })}
                    </section>
                </section>
            </section>
        </PageWrapperAnimation>
    )
}

export default MorePage