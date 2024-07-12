"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
export default function Home() {
    const [details, setDetails] = useState<string | undefined>("");   


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
       

            {/* <CldImage
                width="960"
                height="600"
                src="<Public ID>"
                sizes="100vw"
                alt="Description of my image"
            /> */}
        </main>
    );
}
