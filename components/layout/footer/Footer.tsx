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
    console.log(currentRoute)

    return (
        <section className={`${styles.footerColumn}`} key={title.name}>
            <Link href={title.path} key={title.name}
                  className={`${currentRoute === title.path ? "activeLink" : "notActiveLink"} | font-semibold text-primary-dark`}
            >
                {title.name}
            </Link>
            <ul className="flex flex-col gap-2 font-normal">
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
        <footer className={`flexCenter | ${styles.footer}`}>
            <section className="flex flex-col gap-12 w-full">
                <section className="flex items-start flex-col">
                    <Link href="/">
                        <h2 className="logo">Balfolk NZ</h2>
                    </Link>
                    <p className="text-start font-normal mt-5">
                        Balfolk NZ aims to revitalise the style of Balfolk dancing within NZ!
                    </p>
                </section>
            </section>
            <section className="flex justify-between gap-12 w-full items-start text-center">
                {footerLinks.footerLinks.map((footerLink) => {
                    return <FooterColumn title={footerLink.title} links={footerLink.links}></FooterColumn>
                })}
            </section>
            <section className={`flexBetween ${styles.footerCopyright}`}>
                <p>© 2023 Balfolk NZ. All rights reserved</p>
                <p className="">
                    <span className="font-semibold">Welcome!</span>
                </p>
            </section>
        </footer>
    );
}

export default Footer;