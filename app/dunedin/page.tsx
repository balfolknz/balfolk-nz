import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/dunedin/media.content";

const DunedinPage = () => {
    return (
        <CityTemplate
            city="Dunedin123"
            mediaInfo={allMedia}
        />
    );
}

export default DunedinPage;