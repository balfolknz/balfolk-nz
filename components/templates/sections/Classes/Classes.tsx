"use client";

import styles from "./Classes.module.scss";
import parse from "html-react-parser";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

type ClassesProps = {
  musicInfo: musicInfo;
  allClassInfo: allClassInfo;
  contactInfo: contactInfo;
};

const Classes = ({
  musicInfo,
  allClassInfo,
  contactInfo,
}: ClassesProps) => {
  return (
    <section
      className={`${styles.classes} | flex flex-col gap-8 items-center justify-center | px-10 md:px-5`}
    >
      <section className={`${styles.text}`}>
        <h2 className={`title`}>Classes</h2>
        <section className={``}>
          <p
            className={`text-left ${styles.description} flex flex-column justify-center items-center`}
          >
            {parse(allClassInfo.description)}
          </p>
        </section>
      </section>

      <section className={`${styles.times} | ${styles.section}`}>
        <TableContainer component={Paper} className={`${styles.table}`}>
          <Table stickyHeader aria-label="class times">
            <TableHead>
              <TableRow className={`${styles.table__header}`}>
                <TableCell align="center">Style</TableCell>
                <TableCell align="center">Day</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">$/Wk</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allClassInfo.allClasses.map((classInfo: classInfo) => {
                return (
                  <TableRow key={classInfo.style}>
                    <TableCell align="center">
                      {parse(classInfo.style)}
                    </TableCell>
                    <TableCell align="center">{parse(classInfo.day)}</TableCell>
                    <TableCell align="center">
                      {parse(classInfo.time)}
                    </TableCell>
                    <TableCell align="center">
                      {parse(classInfo.address)}
                    </TableCell>
                    <TableCell align="center">
                      {parse(classInfo.pricePerWeek)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </section>

      <section className={`${styles.events} | ${styles.section}`}>
        <section
          className={`flex gap-6 items-center justify-center flex-col md:flex-row`}
        >
          {allClassInfo.eventsLink && (
            <a href={allClassInfo.eventsLink} target={"_blank"}>
              <button type={`button`} className={`${styles.button}`}>
                <p className={`text-center md:text-left`}>View Events</p>
              </button>
            </a>
          )}

          {contactInfo.facebookLink && (
            <a href={contactInfo.facebookLink} target={"_blank"}>
              <button type={`button`} className={`${styles.button}`}>
                <p className={`text-center md:text-left`}>
                  Visit our Facebook Page
                </p>
              </button>
            </a>
          )}

          {musicInfo.spotifyGroup && (
            <a href={musicInfo.spotifyGroup} target={"_blank"}>
              <FontAwesomeIcon
                icon={faSpotify}
                className={`icon | ${styles.classes__icon}`}
              />
            </a>
          )}
        </section>
      </section>
    </section>
  );
};

export default Classes;
