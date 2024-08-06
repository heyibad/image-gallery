import UploadImg from "@/components/UploadImg";
import React from "react";
import cloudinary from "cloudinary";
import Main from "@/components/Main";
const Page = async () => {
    const results = await cloudinary.v2.search
        .expression("resource_type:image")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(12)
        .execute();

   

    return (
        <div>
            <div className="flex justify-between pt-6 px-6 items-center">
                <h1 className="text-4xl font-semibold pb-2">Gallery</h1>
                <div>
                    <UploadImg />
                </div>
            </div>
            <Main data={results} />
        </div>
    );
};

export default Page;
