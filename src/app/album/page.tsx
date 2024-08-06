import React from "react";
import cloudinary from "cloudinary";
import { AlbumCard, recivingProp } from "@/components/AlbumCard";
const Album = async () => {
    const { folders } = await cloudinary.v2.api.root_folders();
    return (
        <div>
            <div className="flex justify-between pt-6 px-6 items-center">
                <h1 className="text-4xl font-semibold pb-2">Albums</h1>
            </div>
            <div className="flex flex-wrap  items-center gap-4 mt-4 mx-4">
                {folders.map((folder: recivingProp) => {
                    return <AlbumCard key={folder.external_id} data={folder} />;
                })}
            </div>
        </div>
    );
};

export default Album;
