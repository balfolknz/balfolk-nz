"use client"

import CityTemplate from "@/components/templates/CityTemplate";

import {allMedia, allMusic} from "@/content/wellington/media.content";
import {allClasses} from "@/content/wellington/classes.content";
import {contactInfo} from "@/content/wellington/contactUs.content";
import {galleryInfo} from "@/content/wellington/gallery.content";
import { instagramPreviewInfo } from "@/content/wellington/instagram.content";
import { allCityMentions } from "@/content/wellington/mentions.content";

const WellingtonPage = () => {
    return (
      <CityTemplate
        city="Wellington"
        rootPath={"wellington"}
        galleryInfo={galleryInfo}
        mediaInfo={allMedia}
        musicInfo={allMusic}
        allClassInfo={allClasses}
        contactInfo={contactInfo}
        instagramPreviewInfo={instagramPreviewInfo}
        allCityMentions={allCityMentions}
      />
    );
}

export default WellingtonPage;
