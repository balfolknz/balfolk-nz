import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/wellington/media.content";
import {allClasses} from "@/content/wellington/classes.content";
import {contactInfo} from "@/content/wellington/contactUs.content";
import {galleryInfo} from "@/content/wellington/gallery.content";

const WellingtonPage = () => {
    return (
        <CityTemplate
            city="Wellington"
            rootPath={"Wellington"}
            galleryInfo={galleryInfo}
            mediaInfo={allMedia}
            allClassInfo={allClasses}
            contactInfo={contactInfo}
        />
    );
}

export default WellingtonPage;