"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
export default function Home() {
    const [details, setDetails] = useState<string | undefined>("");   
     type uploadType={
        event:"success",
        info:{
            public_id:string,
            secure_url:string     
        }

    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <CldUploadButton 
            uploadPreset="ml_default"
            onUpload={( result:any) => {
                console.log(result)
                setDetails(result?.info?.public_id); 
                console.log(details)
                // { public_id, secure_url, etc }
                
              }}
            />

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
