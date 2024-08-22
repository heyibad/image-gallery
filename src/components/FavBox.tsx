"use client";

import React, { useState } from "react";
import Images from "@/components/Images";

export const dynamic = 'auto'
const FavBox = (props: any) => {

    const [results, setResults] = useState(props.data || { resources: [] });
    console.log(results);

    const getColIndex = (index: number) => {
        const MaxCol = 4;
        return results.resources.filter(
            (v: {}, i: number) => i % MaxCol === index
        );
    };

    const handleUnFav = (state: any) => {
        setResults((prevResults: any) => ({
            ...prevResults,
            resources: prevResults.resources.filter(
                (singleVal: any) => singleVal.public_id !== state.public_id
            )
        }));
    };

    return (
        <div className="sm:flex  sm:justify-center sm:item-center md:grid md:grid-cols-4 gap-4 mt-4 mx-4 ml-12">
            {[0, 1, 2, 3].map((index) => (
                <div key={index} className="flex flex-col gap-2 md:gap-4">
                    {getColIndex(index).map((col: any) => (
                        <Images
                            key={col.public_id}
                            src={col.public_id}
                            width="400"
                            height="300"
                            sizes="100vw"
                            alt="Description of my image"
                            data={col}
                            onUnFav={handleUnFav}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FavBox;
