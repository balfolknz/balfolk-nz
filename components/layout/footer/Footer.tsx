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
                  className={`${currentRoute === title.path ? "activeLink" : "notActiveLink"} | font-semibold text-primary-dark text-left`}
            >
                {title.name}
            </Link>
            <ul className={`flex flex-col gap-2 font-normal | ${styles.footerNav}`}>
                {links.map((link: footerLink) => {
                    return (
                        <p className={`text-left`}>
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
                <section className="flex flex-col md:items-start">
                    <Link href="/">
                        <h2 className="logo">Balfolk NZ</h2>
                    </Link>
                    <p className="font-normal mt-5 md:text-start">
                        Balfolk NZ aims to revitalise the style of Balfolk dancing within NZ!
                    </p>
                </section>
            </section>
            <section
                className="flex justify-between gap-3 w-full text-left flex-col h-full md:flex-row md:items-start md:gap-12 md:justify-center">
                {footerLinks.footerLinks.map((footerLink) => {
                    return <FooterColumn title={footerLink.title} links={footerLink.links}></FooterColumn>
                })}
                <p className={`${styles.footer__links__final}`}>
                    Everyone of all ages, skill levels and experiences are welcome to come along!
                    <br/><br/>
                    We're always happy to see new faces :)
                </p>
            </section>
            <section className={`flexBetween ${styles.footerCopyright}`}>
                <p>© 2023 Balfolk NZ. All rights reserved</p>
                <p className={`${styles.footerCopyright__right}`}>
                    <span className="">Welcome!</span>
                </p>
            </section>
        </footer>
    );
}

export default Footer;