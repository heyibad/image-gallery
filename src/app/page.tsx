import UploadImg from "@/components/UploadImg";
import React from "react";
import cloudinary from "cloudinary";
import Main from "@/components/Main";
import { SearchForm } from "@/components/SearchForm";

type PageProps = {
    params: {};
    searchParams: { search: string };
};
const Page = async ({searchParams:{search}}:PageProps) => {
    const results = await cloudinary.v2.search
        .expression(`resource_type:image ${search ? `AND tags=${search}`:""}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(20)
        .execute();

   

    return (
        <div>
            <div className="flex justify-between pt-6 px-6 items-center">
                <h1 className="pt-2 pl-8 text-3xl md:text-4xl font-semibold pb-3">Gallery</h1>
                <div className="ml-12">
                    <UploadImg />
                </div>
            </div>
            <SearchForm searchVal={search} />
            <Main data={results} />
        </div>
    );
};

export default Page;
