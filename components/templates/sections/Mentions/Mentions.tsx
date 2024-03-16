"use client";

import styles from "./Mentions.module.scss";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ImageList,
  useMediaQuery,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faNewspaper,
  faVideo,
  faFont,
} from "@fortawesome/free-solid-svg-icons";
import { MentionTypes, MediaTypes } from "@/enums/templates/mentions";

type MentionsProps = {
  allCityMentions: Array<cityMention>;
};

const Mentions = ({ allCityMentions }: MentionsProps) => {
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <div className={`${styles.section} ${styles.allMentions}`}>
      <h2 className={`title`}>Some Mentions</h2>
      <ImageList cols={matches ? 3 : 1} gap={15} className={``}>
        {allCityMentions.map((mention: cityMention) => (
          <a href={mention.link} target="_blank">
            <Card className={`${styles.allMentions__card} | my-4`}>
              <CardMedia
                sx={{
                  maxHeight: 400,
                  minHeight: 200,
                  maxWidth: 400,
                  minWidth: 200,
                }}
                image={mention.thumbnailPath}
                title={mention.title}
              />
              <div className="px-8 pt-4 pb-2 flex flex-col gap-3">
                <div
                  className={`flex flex-col gap-0 | ${styles.allMentions__card__header}`}
                >
                  <small className="">{mention.author}</small>
                  <div className="flex flex-row gap-3">
                    <small>{mention.date}</small>
                    <small>&#x2022;</small>
                    <small>{mention.readingtimeMins} mins</small>
                  </div>
                </div>
                <CardContent className="p-0 flex flex-col gap-2">
                  <h4 className="capitalize">{mention.title}</h4>
                  <p style={{ fontSize: "0.7rem" }}>
                    {mention.shortDescription}
                  </p>
                </CardContent>
                <hr className={`${styles.allMentions__card__divider}`} />
                <CardActions className="p-0 flex flex-row justify-between">
                  <div
                    className={`${styles.left} | flex flex-row gap-3 items-center`}
                  >
                    {/* Mention Type */}
                    {mention.mentionTypes.map((mentionType: MentionTypes) => {
                      switch (mentionType) {
                        case MentionTypes.News:
                          return (
                            <FontAwesomeIcon
                              icon={faNewspaper}
                              className={`text-primary-light`}
                            />
                          );
                          break;
                        case MentionTypes.Blog:
                          return (
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              className={`text-primary-light`}
                            />
                          );
                          break;
                        default:
                          return (
                            <FontAwesomeIcon
                              icon={faNewspaper}
                              className={`text-primary-light`}
                            />
                          );
                          break;
                      }
                    })}
                  </div>
                  <div
                    className={`${styles.right} | flex flex-row gap-3 items-center`}
                  >
                    {/* Media Type */}
                    {mention.mediaTypes.map((mediaType: MediaTypes) => {
                      switch (mediaType) {
                        case MediaTypes.Text:
                          return (
                            <FontAwesomeIcon
                              icon={faFont}
                              className={`text-primary-light`}
                            />
                          );
                          break;
                        case MediaTypes.Video:
                          return (
                            <FontAwesomeIcon
                              icon={faVideo}
                              className={`text-primary-light`}
                            />
                          );
                          break;
                        default:
                          return (
                            <FontAwesomeIcon
                              icon={faFont}
                              className={`text-primary-light`}
                            />
                          );
                          break;
                      }
                    })}
                  </div>
                </CardActions>
              </div>
            </Card>
          </a>
        ))}
      </ImageList>
    </div>
  );
};

export default Mentions;
