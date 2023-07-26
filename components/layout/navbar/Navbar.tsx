"use client";

import Link from "next/link";
import {NavLinks} from "@/constants/navbar.constants";

import styles from "./Navbar.module.scss"
import {usePathname} from "next/navigation";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const currentRoute = usePathname();
    const [showNavBar, setNavbar] = useState(false)

    return (
        <nav className={`flexBetween ${styles.navbar} flex-col md:flex-row`}>
            <section className={`flex justify-between items-center w-full`}>
                <Link href="/">
                    <p className="logo">Balfolk NZ</p>
                </Link>

                {/* Toggle navbar icon for small devices*/}
                <section className={`md:hidden flexEnd`}>
                    <button className={`p-2 text-gray-100 rounded-md outline-none focus:border-gray`}
                            onClick={() => setNavbar(!showNavBar)}
                    >
                        {showNavBar ? (
                            <FontAwesomeIcon icon={faXmark} className={`icon`}/>
                        ) : (
                            <FontAwesomeIcon icon={faBars} className={`icon`}/>
                        )
                        }
                    </button>
                </section>
            </section>

            <section className={`${styles.right__links} flex-1 flexEnd gap-10 flex-col w-full md:flex-row`}>
                <ul className={`flex w-full gap-5 flex-col items-center ${showNavBar ? "" : "hidden"} border-t-2 border-primary-dark w-full pt-5 md:border-none md:pt-0 md:flex-row md:flex md:gap-10`}>
                    <li>
                        <p>
                            <Link href={NavLinks.home.href} key={NavLinks.home.key}
                                  onClick={() => setNavbar(!showNavBar)}
                                  className={`${currentRoute === NavLinks.home.href
                                      ? "activeLink"
                                      : "notActiveLink"}`}
                            >
                                {NavLinks.home.text}
                            </Link>
                        </p>
                    </li>
                    <section className="flex flex-col gap-3 md:flex-row items-center">
                        {NavLinks.centres.map((link: navlinkConfig) => {
                            return (
                                <li key={link.key}>
                                    <p>
                                        <Link href={link.href} key={link.key}
                                              onClick={() => setNavbar(!showNavBar)}
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
                                  onClick={() => setNavbar(!showNavBar)}
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