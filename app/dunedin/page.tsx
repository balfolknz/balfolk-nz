import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/dunedin/media.content";
import {allClasses} from "@/content/dunedin/classes.content";
import {contactInfo} from "@/content/dunedin/contactUs.content";
import {galleryInfo} from "@/content/dunedin/gallery.content";
import {instagramPreviewInfo} from "@/content/dunedin/instagram.content";

const DunedinPage = () => {
    return (
        <CityTemplate
            city="Dunedin"
            rootPath={"dunedin"}
            galleryInfo={galleryInfo}
            mediaInfo={allMedia}
            allClassInfo={allClasses}
            contactInfo={contactInfo}
            instagramPreviewInfo={instagramPreviewInfo}
        />
    );
}

export default DunedinPage;
