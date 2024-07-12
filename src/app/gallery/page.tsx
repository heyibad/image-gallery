"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

const Gallery = () => {
    const [details, setDetails] = useState<string | undefined>("");

    return (
        <div>
            <div className="flex justify-between pt-6 px-6 items-center">
                <h1 className="text-4xl font-semibold pb-2">Gallery</h1>
                <div>
                    <Button asChild >
                        <div className="flex gap-2 ">
                            <Upload  size={18}/>
                            <CldUploadButton
                            
                                uploadPreset="ml_default"
                                onUpload={(result: any) => {
                                    console.log(result);
                                    setDetails(result?.info?.public_id);
                                    console.log(details);
                                    // { public_id, secure_url, etc }
                                }}
                            />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
