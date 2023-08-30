import styles from "./page.module.scss"
import {PageWrapperAnimation} from "@/components/animations/common/PageWrapperAnimation";

const NewsroomPage = () => {
    return (
        <PageWrapperAnimation>
            <section className={`${styles.page} `}>
                Newsroom
            </section>
        </PageWrapperAnimation>
    )
}

export default NewsroomPage;
