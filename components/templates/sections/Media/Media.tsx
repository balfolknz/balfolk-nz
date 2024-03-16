"use client";

import styles from "./Media.module.scss";
import Iframe from "react-iframe";
import Image from "next/image";

type MediaProps = {
  mediaInfo: mediaInfo;
};

const Media = ({ mediaInfo }: MediaProps) => {
  return (
    <section
      className={`${styles.media} | mt-10 px-8 w-full`}
    >
      <h2 className={`title`}>Media</h2>

      {mediaInfo.allVideos.length != 0 && (
        <section
          className={`flex flex-col justify-start gap-5 w-full | ${styles.videos}`}
        >
          <h3 className={``}>Some of our favourite dances</h3>
          <section className="flex gap-3 flex-col w-full md:flex-row">
            {mediaInfo.allVideos.map((video: videoInfo) => {
              return (
                <section className={`flex flex-col gap-4 w-full`}>
                  <p className={`font-bold`}>{video.title}</p>
                  <section className={`${styles.videos__video}`}>
                    <Iframe
                      url={video.url}
                      id=""
                      display="block"
                      position="relative"
                      width="100%"
                    />
                  </section>
                </section>
              );
            })}
          </section>
        </section>
      )}

      {mediaInfo.allPlaylists.length != 0 && (
        <section className="playlists flex flex-col justify-start gap-5 w-full mt-5">
          <h3>
            <a
              href={mediaInfo.youtubeChannel}
              target="_blank"
              className={`link`}
            >
              <h3 className={``}>See some of our other dances</h3>
            </a>
          </h3>
          <section className="flex flex-col gap-3 justify-center min-w-full md:flex-row">
            {mediaInfo.allPlaylists.map((playlist: playlistInfo) => {
              return (
                <a href={playlist.url} target="_blank" className={``}>
                  <section className={`hoverImage | ${styles.playlist__image}`}>
                    <Image
                      priority
                      src={playlist.thumbnailPath}
                      width={200}
                      height={200}
                      className={`hoverImage__photo | ${styles.playlist__image__photo}`}
                      alt={playlist.title}
                    />
                    <section className={`hoverImage__text | text-center`}>
                      <section className="">
                        <p>{playlist.title}</p>
                      </section>
                      <section className="">
                        <p>{playlist.description}</p>
                      </section>
                    </section>
                  </section>
                </a>
              );
            })}
          </section>
        </section>
      )}
    </section>
  );
};

export default Media;
