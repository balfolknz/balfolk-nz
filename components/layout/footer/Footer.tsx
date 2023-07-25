import Link from "next/link";
import {footerLinks} from "@/constants/footer.constants";

import styles from "./Footer.module.scss"


type ColumnProps = {
    title: string,
    links: Array<string>;
}

const FooterColumn = ({title, links}: ColumnProps) => {
    return <section className={`${styles.footerColumn}`}>
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link: string) => {
                return <Link href={`/`} key={link}>
                    {link}
                </Link>
            })}
        </ul>
    </section>
}

function Footer() {
    return (
        <footer className={`flexStart | ${styles.footer}`}>
            <section className="flex flex-col gap-12 w-full">
                <section className="flex items-start flex-col">
                    <Link href="/">
                        <h1 className="font-cormorantSC">Balfork NZ</h1>
                    </Link>
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        Balfork NZ aims to revitalise the style of Balfork dancing within NZ!
                    </p>
                </section>
            </section>
            <section className="flex justify-between gap-12 w-full items-start">
                {footerLinks.map((footerLink) => {
                    return <FooterColumn title={footerLink.title} links={footerLink.links}></FooterColumn>
                })}
            </section>
            <section className={`flexBetween ${styles.footerCopyright}`}>
                <p>© 2023 Balfork NZ. All rights reserved</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">Welcome!</span>
                </p>
            </section>
        </footer>
    );
}

export default Footer;