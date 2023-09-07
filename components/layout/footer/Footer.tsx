"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

import { footerLinks } from "@/constants/footer.constants";
import { usePathname } from "next/navigation";

type ColumnProps = {
  title: footerLink;
  links: Array<footerLink>;
};

const FooterColumn = ({ title, links }: ColumnProps) => {
  const currentRoute = usePathname();

  return (
    <section className={`${styles.footerColumn}`} key={title.name}>
      <Link
        href={title.path}
        key={title.name}
        className={`${
          currentRoute === title.path ? "activeLink" : "notActiveLink"
        } | font-semibold text-primary-dark text-left`}
      >
        {title.name}
      </Link>
      <ul className={`flex flex-col gap-2 font-normal | ${styles.footerNav}`}>
        {links.map((link: footerLink) => {
          return (
            <p className={`text-left`} key={link.path}>
              <Link href={link.path} key={link.name} className={``}>
                {link.name}
              </Link>
            </p>
          );
        })}
      </ul>
    </section>
  );
};

function Footer() {
  return (
    <footer
      className={`flex flex-col items-center justify-center | ${styles.footer}`}
    >
      <section className="flex flex-col gap-12 w-full">
        <section className="flex flex-col md:items-start">
          <Link href="/">
            <Image
              priority
              src={"logo.svg"}
              className={``}
              alt={"logo"}
              width={150}
              height={100}
            />
          </Link>
          <p className="font-normal mt-5 md:text-start">
            New ways of dancing old dances
          </p>
        </section>
      </section>

      <section className={`${styles.footer__links}`}>
        <section className={` ${styles.footer__links__left}`}>
          <section className={` ${styles.footer__links__left__left}`}>
            {footerLinks.left.map((footerLink) => {
              return (
                <FooterColumn
                  title={footerLink.title}
                  links={footerLink.links}
                ></FooterColumn>
              );
            })}
          </section>

          <section className={` ${styles.footer__links__left__center}`}>
            {footerLinks.center.map((footerLink) => {
              return (
                <FooterColumn
                  title={footerLink.title}
                  links={footerLink.links}
                ></FooterColumn>
              );
            })}
          </section>

          <section className={` ${styles.footer__links__left__right}`}>
            {footerLinks.right.map((footerLink) => {
              return (
                <FooterColumn
                  title={footerLink.title}
                  links={footerLink.links}
                ></FooterColumn>
              );
            })}
          </section>
        </section>

        <p
          className={`${styles.footer__links__final} ${styles.footer__links__right}`}
        >
          Everyone of all ages, experience and skill levels are welcome to come
          along!
          <br />
          <br />
          We're always happy to see new faces :)
        </p>
      </section>

      <section className={`flexBetween ${styles.footerCopyright}`}>
        <p>© 2023 Balfolk Aotearoa/NZ. All rights reserved</p>
        <p className={`${styles.footerCopyright__right}`}>
          <span className="">Welcome!</span>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
