import UploadImg from "@/components/UploadImg";
import React from "react";
import cloudinary from "cloudinary";
import Main from "@/components/Main";
import { SearchForm } from "@/components/SearchForm";

type PageProps = {
    params: {};
    searchParams: { search: string };
};
export const dynamic = 'auto'

const Page = async ({searchParams:{search}}:PageProps) => {
    const results = await cloudinary.v2.search
        .expression(`resource_type:image ${search ? `AND tags=${search}`:""}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(20)
        .execute();

   

    return (
        <div className="ml-6">
            <div className="flex justify-between pt-6 items-center">
                <h1 className="pt-2 pl-5 text-3xl md:text-4xl font-semibold pb-3">Gallery</h1>
                <div >
                    <UploadImg />
                </div>
            </div>
            <SearchForm searchVal={search} />
            <Main data={results} />
        </div>
    );
};

export default Page;
