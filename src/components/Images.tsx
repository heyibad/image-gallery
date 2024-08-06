"use client";
import { MarkAsFav } from "@/app/actions/MarkAsFav";
import { Heart } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React, {  useState, useTransition } from "react";
import { DropDown } from "./Dropdown";

const Images = (props: any) => {
    const [isPending, startTransition] = useTransition();
    const [isFavorite, SetIsFavorited] = useState(
        props.data.tags.includes("favorite")
    );

    
    const handleMarkAsFav = () => {
        startTransition(() => {
            props.onUnFav(props.data)
            SetIsFavorited((prev: any) => !prev);
            MarkAsFav({ public_id: props.data.public_id, isFavorite });
        });
    };

    return (
        <div className="relative">
            <CldImage className="pt-2 md:pt-0 rounded-md" {...props} />
            <div
                className="absolute top-3 right-2 hover:text-red-600 cursor-pointer"
                onClick={handleMarkAsFav}
            >
                {isFavorite ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-red-600"
                    >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                ) : (
                    <Heart />
                )}
            </div>
            <DropDown data={props.data}/>
        </div>
    );
};

export default Images;
