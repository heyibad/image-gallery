import UploadImg from "@/components/UploadImg";
import cloudinary from "cloudinary";
import ForceRefresh from "@/components/ForceRefresh";
import FavBox from "@/components/FavBox";
import SmallSidebar from "@/components/SmallSidebar";

export const dynamic = 'auto'

const Favorites = async () => {
    const results = await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .sort_by("created_at", "desc")
        .with_field('tags')
        .max_results(20)
        .execute();

    return (
        <div>
            <ForceRefresh />
            <div className="flex justify-between pt-6  items-center">
                <h1 className="pt-2 pl-5 md:pl-12 text-3xl md:text-4xl font-semibold pb-3">Favorites</h1>
                <div>
                    <UploadImg />
                </div>
            </div>
            <FavBox data={results} />
        </div>
    );
};

export default Favorites;
