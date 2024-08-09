import { Edit, FolderPlus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addToAlbum } from "@/app/actions/addToAlbum";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Link from "next/link";

export function DropDown(props: any) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute top-3 left-2 ">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-8 w-12">
                        <Menu size={16} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="ghost">
                                        <FolderPlus className="mr-2 h-4 w-4" />
                                        <span className="pl-2 text-xs">
                                            Add to Album
                                        </span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Add to Click</DialogTitle>
                                        <DialogDescription>
                                            Type an album name in which you want
                                            to add this photo
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4  ">
                                            <Label
                                                htmlFor="name"
                                                className="text-right pr-4 "
                                            >
                                                {" "}
                                                Album
                                            </Label>
                                            <Input
                                                onChange={(e) =>
                                                    setAlbumName(
                                                        e.currentTarget.value
                                                    )
                                                }
                                                id="name"
                                                value={albumName}
                                                className="col-span-3 "
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button
                                            onClick={async () => {
                                                await addToAlbum({
                                                    folderName: albumName,
                                                    image: props.data,
                                                });
                                                setOpen(false);
                                            }}
                                            type="submit"
                                        >
                                            Add
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link className=" text-xs cursor-pointer" href={`/edit?publicId=${encodeURI(props.data.public_id)}`}>
                                <Edit className="mx-2 h-4 w-4 " />
                                <span className="pl-4 py-1 text-xs">Edit</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
