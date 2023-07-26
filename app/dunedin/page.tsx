import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/dunedin/media.content";
import {allClasses} from "@/content/dunedin/classTimes.content";
import {contactInfo} from "@/content/dunedin/contactUs.content";

const DunedinPage = () => {
    return (
        <CityTemplate
            city="Dunedin123"
            mediaInfo={allMedia}
            allClassInfo={allClasses}
            contactInfo={contactInfo}
        />
    );
}

export default DunedinPage;