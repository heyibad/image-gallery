"use client"
import Images from "@/components/Images";
import { useState } from "react";

const Main = (props:any) => {
    const getColIndex = (index: number):[] => {
        const MaxCol = 4;
        return props.data.resources.filter(
            (v: {}, i: number) => i % MaxCol === index
        );
    };
    const [results, setResults] = useState(props.data || { resources: [] });
    // console.log(results);

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
    {[
        getColIndex(0),
        getColIndex(1),
        getColIndex(2),
        getColIndex(3),
    ].map((array, index) => (
        <div key={index} className="flex flex-col gap-4">
            {array.map((col: any) => (
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
  )
}

export default Main