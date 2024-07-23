"use client";

import React, { useState } from "react";
import Images from "@/components/Images";

const FavBox = (props: any) => {
    const [results, setResults] = useState(props.data || { resources: [] });
    console.log(results);

    const handleUnFav = (state: any) => {
        setResults((prevResults: any) => ({
            ...prevResults,
            resources: prevResults.resources.filter(
                (singleVal: any) => singleVal.public_id !== state.public_id
            )
        }));
    };

    return (
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
                    onUnFav={handleUnFav}
                />
            ))}
        </div>
    );
};

export default FavBox;
