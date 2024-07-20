import UploadImg from "@/components/UploadImg";
import React from "react";
import cloudinary from "cloudinary";
import Images from "@/components/Images";

const Gallery = async () => {
    const results = await cloudinary.v2.search
        .expression("resource_type:image")
        .sort_by("created_at", "desc")
        .with_field('tags')
        .max_results(12)
        .execute();
    console.log(results);
    return (
        <div>
            <div className="flex justify-between pt-6 px-6 items-center">
                <h1 className="text-4xl font-semibold pb-2">Gallery</h1>
                <div>
                    <UploadImg />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 mx-4">
                {results.resources.map((each: any) => (
                    <Images
                        key={each.public_id}
                        src={each.public_id}
                        width="400"
                        height="300"
                        sizes="100vw"
                        alt="Description of my image"
                        data={each}
                        path="/gallery" 
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
