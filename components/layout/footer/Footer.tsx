import Link from "next/link";
import {footerLinks} from "@/constants/footer.constants";

import styles from "./Footer.module.scss"


type ColumnProps = {
    title: string,
    links: Array<footerLink>;
}

const FooterColumn = ({title, links}: ColumnProps) => {
    return (
        <section className={`${styles.footerColumn}`} key={title}>
            <h3 className="font-semibold">{title}</h3>
            <ul className="flex flex-col gap-2 font-normal">
                {links.map((link: footerLink) => {
                    return (
                        <p>
                            <Link href={link.path} key={link.name}>
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
        <footer className={`flexStart | ${styles.footer}`}>
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
            <section className="flex justify-between gap-12 w-full items-start">
                {footerLinks.footerLinks.map((footerLink) => {
                    return <FooterColumn title={footerLink.title} links={footerLink.links}></FooterColumn>
                })}
            </section>
            <section className={`flexBetween ${styles.footerCopyright}`}>
                <p>© 2023 Balfolk NZ. All rights reserved</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">Welcome!</span>
                </p>
            </section>
        </footer>
    );
}

export default Footer;