"use client";

import Link from "next/link";
import {footerLinks} from "@/constants/footer.constants";

import styles from "./Footer.module.scss"
import {usePathname} from "next/navigation";


type ColumnProps = {
    title: footerLink,
    links: Array<footerLink>;
}

const FooterColumn = ({title, links}: ColumnProps) => {
    const currentRoute = usePathname();

    return (
        <section className={`${styles.footerColumn}`} key={title.name}>
            <Link href={title.path} key={title.name}
                  className={`${currentRoute === title.path ? "activeLink" : "notActiveLink"} | font-semibold text-primary-dark`}
            >
                {title.name}
            </Link>
            <ul className={`flex flex-col gap-2 font-normal | ${styles.footerNav}`}>
                {links.map((link: footerLink) => {
                    return (
                        <p className={`text-center`}>
                            <Link href={link.path} key={link.name}
                                  className={``}
                            >
                                {link.name}
                            </Link>
                        </p>
                    )
                })}
            </ul>
        </section>
    )
}

function Footer() {
    return (
        <footer className={`flex flex-col items-center justify-center | ${styles.footer}`}>
            <section className="flex flex-col gap-12 w-full">
                <section className="flex items-center flex-col md:items-start">
                    <Link href="/">
                        <h2 className="logo">Balfolk NZ</h2>
                    </Link>
                    <p className="text-center font-normal mt-5 md:text-start">
                        Balfolk NZ aims to revitalise the style of Balfolk dancing within NZ!
                    </p>
                </section>
            </section>
            <section className="flex justify-between gap-3 w-full items-center text-center flex-col md:flex-row md:items-start md:gap-12">
                {footerLinks.footerLinks.map((footerLink) => {
                    return <FooterColumn title={footerLink.title} links={footerLink.links}></FooterColumn>
                })}
            </section>
            <section className={`flexBetween ${styles.footerCopyright}`}>
                <p>© 2023 Balfolk NZ. All rights reserved</p>
                <p className={`${styles.footerCopyright__right}`}>
                    <span className="font-semibold">Welcome!</span>
                </p>
            </section>
        </footer>
    );
}

export default Footer;