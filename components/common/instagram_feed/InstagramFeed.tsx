import styles from "./InstagramFeed.module.scss";
import $ from "jquery";

import { useEffect, useState } from "react";
import { CircularProgress, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

type InstagramFeedProps = {
  tokenName: string;
  limit: number;
};

type postConfig = {
  link: string;
  caption: string;
  src: string;
  mediaType: string;
};

function getToken(tokenName: string) {
  switch (tokenName) {
    case "NEXT_PUBLIC_DUNEDIN_INSTAGRAM_BASIC_DISPLAY_TOKEN":
      return process.env.NEXT_PUBLIC_DUNEDIN_INSTAGRAM_BASIC_DISPLAY_TOKEN;
      break;
    case "NEXT_PUBLIC_AUCKLAND_INSTAGRAM_BASIC_DISPLAY_TOKEN":
      return process.env.NEXT_PUBLIC_AUCKLAND_INSTAGRAM_BASIC_DISPLAY_TOKEN;
      break;
    case "NEXT_PUBLIC_WELLINGTON_INSTAGRAM_BASIC_DISPLAY_TOKEN":
      return process.env.NEXT_PUBLIC_WELLINGTON_INSTAGRAM_BASIC_DISPLAY_TOKEN;
      break;

    default:
      return null;
      break;
  }
}

export const InstagramFeed = ({ tokenName, limit }: InstagramFeedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [instagramPosts, setInstagramPosts] = useState<postConfig[]>([]);

  const matches = useMediaQuery("(min-width:768px)");


  useEffect(() => {
    setIsLoading(true);
    let token = getToken(tokenName);

    if (token) {
      let fields =
        "id,media_type,media_url,thumbnail_url,timestamp,permalink,caption";

      $.ajax({
        url: `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=${limit}`,
        type: "GET",
        success: function (response: any) {
          for (let post of response.data) {
            let src = "";

            if (post["media_type"] == "VIDEO") {
              src = post["thumbnail_url"];
            } else {
              src = post["media_url"];
            }

            let postConfig: postConfig = {
              link: post["permalink"],
              caption: post["caption"],
              mediaType: post["media_type"],
              src: src,
            };
            instagramPosts.push(postConfig);
          }
          setIsLoading(false);
        },
        error: function(error:any) {
          console.log(error)
          setIsLoading(false);
        }
      });
    }
  }, []);

  return (
    <div
      id="instagram-feed1"
      className={`${styles.instagramFeed} | text-center w-full`}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {instagramPosts.length != 0 ? (
            <ImageList variant="masonry" cols={matches ? 3: 1} gap={8}>
              {instagramPosts.map((post: postConfig) => {
                return (
                  <ImageListItem className={`${styles.instagramNew}`}>
                    <a
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
                    </a>
                  </ImageListItem>
                );
              })}
            </ImageList>
          ) : (
            <div className={`${styles.noData}`}><p>No posts could be previewed yet</p></div>
          )}
        </>
      )}
    </div>
  );
};
