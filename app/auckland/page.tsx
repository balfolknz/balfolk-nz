import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/auckland/media.content";
import {allClasses} from "@/content/auckland/classes.content";
import {contactInfo} from "@/content/auckland/contactUs.content";
import {galleryInfo} from "@/content/auckland/gallery.content";
import { instagramPreviewInfo } from "@/content/auckland/instagram.content";

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
      />
    );
}

export default AucklandPage;
