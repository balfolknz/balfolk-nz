import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia, allMusic} from "@/content/christchurch/media.content";
import {allClasses} from "@/content/christchurch/classes.content";
import {contactInfo} from "@/content/christchurch/contactUs.content";
import {galleryInfo} from "@/content/christchurch/gallery.content";
import { instagramPreviewInfo } from "@/content/christchurch/instagram.content";
import { allCityMentions } from "@/content/christchurch/mentions.content";


const ChristchurchPage = () => {
    return (
      <CityTemplate
        city="Christchurch"
        rootPath={"christchurch"}
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

export default ChristchurchPage;
