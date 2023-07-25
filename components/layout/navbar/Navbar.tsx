import Link from "next/link";
import {NavLinks} from "@/constants/navbar.constants";

import styles from "./Navbar.module.scss"


function Navbar() {
    return (
        <nav className={`flexBetween ${styles.navbar}`}>
            <Link href="/">
                <h1 className="font-cormorantSC">Balfork NZ</h1>
            </Link>
            <section className="flex-1 flexEnd gap-10">
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link: navlinkConfig) => {
                        return <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    })}
                </ul>
            </section>
        </nav>
    );
}

export default Navbar;