"use client";

import Link from "next/link";
import {NavLinks} from "@/constants/navbar.constants";

import styles from "./Navbar.module.scss"
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {NavbarAnimation} from "@/components/animations/NavbarAnimation";


function Navbar() {
    const currentRoute = usePathname();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 768) {
            setShowNavBar(true)
        }
    }, []);

    const toggleNavBarState = () => {
        if (window.innerWidth > 768) {
            setShowNavBar(true)
        } else {
            setShowNavBar(!showNavBar)

        }
    }


    return (
        <nav className={`flexBetween ${styles.navbar} flex-col md:flex-row`}>
            <section className={`flex justify-between items-center w-full`}>
                <Link href="/">
                    <p className="logo">Balfolk NZ</p>
                </Link>

                {/* Toggle navbar icon for small devices*/}
                <section className={`md:hidden flexEnd`}>
                    <button className={`p-2 text-gray-100 rounded-md outline-none focus:border-gray`}
                            onClick={() => setShowNavBar(!showNavBar)}
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

            <section
                className={`${styles.right__links} flex-1 flexEnd gap-10 flex-col w-full md:flex-row | ${showNavBar ? "" : "hidden"} w-full md:flex-row border-t-2 border-primary-dark md:border-none`}>
                <NavbarAnimation isVisible={showNavBar}>
                    <ul className={`flex w-full gap-5 flex-col items-center pt-5 md:pt-0 md:flex-row md:gap-10`}>
                        <li>
                            <p>
                                <Link href={NavLinks.home.href} key={NavLinks.home.key}
                                      onClick={toggleNavBarState}
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
                                                  onClick={toggleNavBarState}
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
                                      onClick={toggleNavBarState}
                                      className={`${currentRoute === NavLinks.more.href
                                          ? "activeLink"
                                          : "notActiveLink"}`}
                                >
                                    {NavLinks.more.text}
                                </Link>
                            </p>
                        </li>
                    </ul>
                </NavbarAnimation>
            </section>
        </nav>
    );
}

export default Navbar;