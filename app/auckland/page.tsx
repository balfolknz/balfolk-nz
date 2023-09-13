import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia, allMusic} from "@/content/auckland/media.content";
import {allClasses} from "@/content/auckland/classes.content";
import {contactInfo} from "@/content/auckland/contactUs.content";
import {galleryInfo} from "@/content/auckland/gallery.content";
import { instagramPreviewInfo } from "@/content/auckland/instagram.content";
import { allCityMentions } from "@/content/auckland/mentions.content";


const AucklandPage = () => {
    return (
      <CityTemplate
        city="Auckland"
        rootPath={"auckland"}
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

export default AucklandPage;
