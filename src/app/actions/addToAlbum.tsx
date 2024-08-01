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
    const existingFolder = await cloudinary.v2.api.create_folder(folderName);

    await cloudinary.v2.uploader.rename(
        image.public_id,
        `${folderName}/${image.public_id}`
    );
}
