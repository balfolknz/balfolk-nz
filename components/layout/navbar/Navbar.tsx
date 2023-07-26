"use client";

import Link from "next/link";
import {NavLinks} from "@/constants/navbar.constants";

import styles from "./Navbar.module.scss"
import {usePathname} from "next/navigation";


function Navbar() {
    const currentRoute = usePathname();

    return (
        <nav className={`flexBetween ${styles.navbar}`}>
            <Link href="/">
                <p className="logo">Balfolk NZ</p>
            </Link>
            <section className="flex-1 flexEnd gap-10">
                <ul className="flex gap-10">
                    <li>
                        <p>
                            <Link href={NavLinks.home.href} key={NavLinks.home.key}
                                  className={`${currentRoute === NavLinks.home.href
                                      ? "activeLink"
                                      : "notActiveLink"}`}
                            >
                                {NavLinks.home.text}
                            </Link>
                        </p>
                    </li>
                    <section className="flex gap-3">
                        {NavLinks.centres.map((link: navlinkConfig) => {
                            return (
                                <li>
                                    <p>
                                        <Link href={link.href} key={link.key}
                                              className={`${currentRoute === link.href
                                                  ? "activeLink"
                                                  : "notActiveLink"}`}
                                        >
                                            {link.text}
                                        </Link>
                                    </p>
                                </li>
                            )
                        })}
                    </section>
                    <li>
                        <p>
                            <Link href={NavLinks.more.href} key={NavLinks.more.key}
                                  className={`${currentRoute === NavLinks.more.href
                                      ? "activeLink"
                                      : "notActiveLink"}`}
                            >
                                {NavLinks.more.text}
                            </Link>
                        </p>
                    </li>
                </ul>
            </section>
        </nav>
    );
}

export default Navbar;