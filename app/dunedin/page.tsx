import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia, allMusic} from "@/content/dunedin/media.content";
import {allClasses} from "@/content/dunedin/classes.content";
import {contactInfo} from "@/content/dunedin/contactUs.content";
import {galleryInfo} from "@/content/dunedin/gallery.content";
import {instagramPreviewInfo} from "@/content/dunedin/instagram.content";
import {allCityMentions} from "@/content/dunedin/mentions.content";

const DunedinPage = () => {
    return (
      <CityTemplate
        city="Dunedin"
        rootPath={"dunedin"}
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

export default DunedinPage;
