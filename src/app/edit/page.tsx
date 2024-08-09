"use client";
import { CldImage } from "next-cloudinary";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type PageProps = {
    params: {};
    searchParams: { publicId: string };
};

const Page = ({ searchParams: { publicId } }: PageProps) => {
    const [selectedField, setSelectedField] = useState<string | undefined>();
    const [generatedField, setGeneratedField] = useState<string | undefined>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGeneratedField(selectedField);
    };

    const ImageAfterProcess = () => {
        if (generatedField === "fillBackground") {
            return (
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    fillBackground
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
            );
        } else if (generatedField === "removeBackground") {
            return (
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    removeBackground
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
            );
        } else if (generatedField === "blur") {
            return (
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    blur="800"
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
            );
        } else if (generatedField === "gray") {
            return (
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    grayscale
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
            );
        } else if (generatedField === "pixelate") {
            return (
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    pixelate
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
            );
        }
        else if (generatedField === "enhance") {
            return (
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    enhance
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
            );
        }
    };

    return (
        <div>
            <div className="flex pt-6 px-2 items-center">
                <h1 className="text-3xl ml-2 md:text-4xl font-semibold pb-3">
                    Edit
                </h1>
            </div>
            <div className="mx-2 mb-6 ">
                <form
                    className=" flex flex-col "
                    onSubmit={handleSubmit}
                >
                    <Label className="px-2 py-4" htmlFor="editType">
                        Select which type of edit you want
                    </Label>

                    <Select
                        onValueChange={setSelectedField}
                        value={selectedField}
                    >
                        <SelectTrigger className="w-[60vw]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fillBackground">
                                Fill Background
                            </SelectItem>
                            <SelectItem value="removeBackground">
                                Remove Background
                            </SelectItem>
                            <SelectItem value="enhance">Enhance Picture</SelectItem>
                            <SelectItem value="gray">
                                Black & White Picture
                            </SelectItem>
                            <SelectItem value="blur">Blur Picture</SelectItem>
                            <SelectItem value="pixelate">
                                Pixetate Picture
                            </SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="w-[60vw] mt-4" type="submit">
                        Generate
                    </Button>
                </form>
            </div>
            <div className="flex gap-4 mx-2 lg:flex-row flex-col">
                <CldImage
                    className="pt-2 md:pt-0 rounded-md"
                    key={publicId}
                    src={publicId}
                    width="400"
                    height="300"
                    sizes="100vw"
                    alt="Description of my image"
                />
                {generatedField && ImageAfterProcess()}
            </div>
        </div>
    );
};

export default Page;
