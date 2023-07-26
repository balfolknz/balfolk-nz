import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/auckland/media.content";

const AucklandPage = () => {
    return (
        <CityTemplate
            city="Auckland"
            mediaInfo={allMedia}
        />
    );
}

export default AucklandPage;