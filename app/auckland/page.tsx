import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/auckland/media.content";
import {allClasses} from "@/content/auckland/classTimes.content";
import {contactInfo} from "@/content/auckland/contactUs.content";

const AucklandPage = () => {
    return (
        <CityTemplate
            city="Auckland"
            mediaInfo={allMedia}
            allClassInfo={allClasses}
            contactInfo={contactInfo}

        />
    );
}

export default AucklandPage;