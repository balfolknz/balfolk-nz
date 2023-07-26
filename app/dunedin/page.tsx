import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/dunedin/media.content";
import {allClasses} from "@/content/dunedin/classTimes.content";
import {contactInfo} from "@/content/dunedin/contactUs.content";
import {aboutInfo} from "@/content/dunedin/about.content";

const DunedinPage = () => {
    return (
        <CityTemplate
            city="Dunedin"
            aboutInfo={aboutInfo}
            mediaInfo={allMedia}
            allClassInfo={allClasses}
            contactInfo={contactInfo}
        />
    );
}

export default DunedinPage;