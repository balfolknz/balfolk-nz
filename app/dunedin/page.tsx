import CityTemplate from "@/components/templates/CityTemplate";
import {allMedia} from "@/content/dunedin/media.content";

const DunedinPage = () => {
    return (
        <CityTemplate
            city="Dunedin"
            mediaInfo={allMedia}
        />
    );
}

export default DunedinPage;