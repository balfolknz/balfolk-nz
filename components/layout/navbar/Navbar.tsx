import Link from "next/link";
import {NavLinks} from "@/constants/navbar.constants";

import styles from "./Navbar.module.scss"


function Navbar() {
    return (
        <nav className={`flexBetween ${styles.navbar}`}>
            <Link href="/">
                <p className="logo">Balfolk NZ</p>
            </Link>
            <section className="flex-1 flexEnd gap-10">
                <ul className="flex gap-7">
                    {NavLinks.map((link: navlinkConfig) => {
                        return (
                            <p>
                                <Link href={link.href} key={link.key}>
                                    {link.text}
                                </Link>
                            </p>
                        )
                    })}
                </ul>
            </section>
        </nav>
    );
}

export default Navbar;