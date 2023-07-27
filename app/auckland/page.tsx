import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/auckland/media.content";
import {allClasses} from "@/content/auckland/classes.content";
import {contactInfo} from "@/content/auckland/contactUs.content";
import {galleryInfo} from "@/content/auckland/gallery.content";

const AucklandPage = () => {
    return (
        <CityTemplate
            city="Auckland"
            rootPath={"auckland"}
            galleryInfo={galleryInfo}
            mediaInfo={allMedia}
            allClassInfo={allClasses}
            contactInfo={contactInfo}

        />
    );
}

export default AucklandPage;