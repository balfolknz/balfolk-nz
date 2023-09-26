import styles from "./eventsFindaFeed.module.scss";
import $ from "jquery";

import { useEffect, useState } from "react";
import {
  CircularProgress,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";

type eventsFindaFeedProps = {
  cityName: string;
  limit: number;
};

type postConfig = {
  link: string;
  caption: string;
  src: string;
  mediaType: string;
};

type eventFindaCredentials = {
  username?: string;
  password?: string;
};

function getCredentials(cityName: string): eventFindaCredentials | null {
  let credentials: eventFindaCredentials = {
    username: "",
    password: "",
  };

  switch (cityName) {
    case "Dunedin":
      credentials.username =
        process.env.NEXT_PUBLIC_DUNEDIN_EVENTFINDA_USERNAME;
      credentials.password =
        process.env.NEXT_PUBLIC_DUNEDIN_EVENTFINDA_PASSWORD;
      break;
    case "Auckland":
      credentials.username =
        process.env.NEXT_PUBLIC_AUCKLAND_EVENTFINDA_USERNAME;
      credentials.password =
        process.env.NEXT_PUBLIC_AUCKLAND_EVENTFINDA_PASSWORD;
      break;
    case "Wellington":
      credentials.username =
        process.env.NEXT_PUBLIC_WELLINGTON_EVENTFINDA_USERNAME;
      credentials.password =
        process.env.NEXT_PUBLIC_WELLINGTON_EVENTFINDA_PASSWORD;
      break;
  }

  if (credentials.username != "") {
    return credentials;
  } else {
    return null;
  }
}

export const EventsFindaFeed = ({ cityName, limit }: eventsFindaFeedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<postConfig[]>([]);

  const matches = useMediaQuery("(min-width:768px)");

  useEffect(() => {
    setIsLoading(true);
    let credentials: eventFindaCredentials | null = getCredentials(cityName);

    if (credentials) {

      $.ajax({
        url: "https://api.eventfinda.co.nz/v/events.json",
        beforeSend: function (xhr) {
          xhr.setRequestHeader(
            "Authorization",
            "Basic " + btoa(credentials.username + ":" + credentials.password)
          );
        },
        success: function (response: any) {
          console.log(
            "--------------------------------------------------",
            response
          );
        },
        error: function (error: any) {
          console.log(error);
          setIsLoading(false);
        },
      });
    }
  }, []);

  return (
    <div
      id="events-feed1"
      className={`${styles.eventsFeed} | text-center w-full`}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {events.length != 0 ? (
            <ImageList variant="masonry" cols={matches ? 3 : 1} gap={8}>
              {events.map((post: postConfig) => {
                return (
                  <ImageListItem className={`${styles.instagramNew}`}>
                    {/* <a
                      className={`${styles.instagramNew__link} | hoverImage cursor-pointer`}
                      href={`${post.link}`}
                      rel="noopener"
                      target="_blank"
                    >
                      <img
                        src={`${post.src}`}
                        loading="lazy"
                        alt={`${post.caption}`}
                        className={`${styles.instagramNew__image} | hoverImage__photo`}
                      />
                      <p
                        className={`${styles.instagramNew__caption} | hoverImage__text`}
                      >
                        {post.caption.substring(0, 100)}...
                      </p>
                    </a> */}
                  </ImageListItem>
                );
              })}
            </ImageList>
          ) : (
            <div className={`${styles.noData}`}>
              <p>No events could be previewed yet</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
