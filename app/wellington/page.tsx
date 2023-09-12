"use client"

import CityTemplate from "@/components/templates/CityTemplate";

import {allMedia} from "@/content/wellington/media.content";
import {allClasses} from "@/content/wellington/classes.content";
import {contactInfo} from "@/content/wellington/contactUs.content";
import {galleryInfo} from "@/content/wellington/gallery.content";
import { instagramPreviewInfo } from "@/content/wellington/instagram.content";
import { useEffect } from "react";

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
      />
    );
}

export default WellingtonPage;
