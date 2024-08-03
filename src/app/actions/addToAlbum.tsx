"use server";
import cloudinary from "cloudinary";

export async function addToAlbum({
    folderName,
    image,
}: {
    folderName: string;
    image: {
        public_id: string;
    };
}) {
    await cloudinary.v2.api.create_folder(folderName);
    let parts = image.public_id.split("/");
    console.log(parts);
    if (parts.length > 1) {
     parts=parts.slice(1);
     console.log(parts);
    }
    const publidId = parts.join("/");
    console.log(publidId);
    await cloudinary.v2.uploader.rename(
        image.public_id,
        `${folderName}/${publidId}`
    );
}
