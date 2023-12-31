"use client";

import styles from "./global-error.module.scss";
import Link from "next/link";

import { PageWrapperAnimation } from "@/components/animations/common/PageWrapperAnimation";


export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);

  return (
    <html>
      <body>
        <PageWrapperAnimation>
          <section className={`${styles.errorPage}`}>
            <h1 className={`title`}> Something went wrong sorry :( </h1>
            <section
              className={`flex flex-col justify-center items-center gap-5 mt-10`}
            >
              <section
                className={`flex flex-col justify-center items-center gap-1`}
              >
                <p>
                  Please use the <strong>Home page</strong> below to go back to
                  the{" "}
                  <Link className={`link`} href={"/"}>
                    home page
                  </Link>
                </p>
                <p>
                  You can also use the <strong>Refresh</strong> button to reload
                  the page
                </p>
              </section>
              <section
                className={`flex flex-row justify-center items-center gap-3`}
              >
                <Link className={``} href={"/"}>
                  <button className={`${styles.button}`}>
                    <p>Home page</p>
                  </button>
                </Link>

                <button className={`${styles.button}`} onClick={() => reset()}>
                  <p>Refresh Page</p>
                </button>
              </section>
              <section>
                <ul>
                  <li>
                    <p>
                      If the issue continues, please contact us at
                      <a
                        className={`link text-primary-dark-500`}
                        href={`mailto:balfolkdunedni@gmail.com`}
                        target={"_blank"}
                      >
                        {" "}
                        Balfolk Dunedin{" "}
                      </a>
                      describing the issue.
                    </p>
                  </li>
                  <li>
                    <p>Please also include any screenshots if you can :)</p>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </PageWrapperAnimation>
      </body>
    </html>
  );
}
