"use server";
import cloudinary from "cloudinary";

export async function MarkAsFav({
    public_id,
    isFavorite,
    
}: {
    public_id: string;
    isFavorite: boolean;
}) {
    if (isFavorite) {
        await cloudinary.v2.uploader.remove_tag("favorite", [public_id]);
    } else {
        await cloudinary.v2.uploader.add_tag("favorite", [public_id]);
    }
    
}
