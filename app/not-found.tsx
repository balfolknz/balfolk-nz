'use client'

import styles from "./not-found.module.scss";
import {PageWrapperAnimation} from "@/components/animations/common/PageWrapperAnimation";
import Link from "next/link";

export default function NotFound() {
    return (
        <PageWrapperAnimation>
            <section className={`${styles.notFoundPage}`}>
                <h1 className={`title`}> We can't find your page sorry :( </h1>
                <section className={`flex flex-col justify-center items-center gap-5 mt-10`}>
                    <section className={`flex flex-col justify-center items-center gap-1`}>
                        <p>Please use the button below to go back to the <Link className={`link`} href={"/"}>home
                            page</Link>
                        </p>
                        <p>You can also use the navigation bar or footer to find a specific page</p>
                    </section>
                    <button className={`${styles.button}`}>
                        <p>Home page</p>
                    </button>
                </section>
            </section>
        </PageWrapperAnimation>
    )
}