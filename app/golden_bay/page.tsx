import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia, allMusic} from "@/content/golden_bay/media.content";
import {allClasses} from "@/content/golden_bay/classes.content";
import {contactInfo} from "@/content/golden_bay/contactUs.content";
import {galleryInfo} from "@/content/golden_bay/gallery.content";
import { instagramPreviewInfo } from "@/content/golden_bay/instagram.content";
import { allCityMentions } from "@/content/golden_bay/mentions.content";


const GoldenBayPage = () => {
    return (
      <CityTemplate
        city="GoldenBay"
        rootPath={"golden_bay"}
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

export default GoldenBayPage;
