"use server";
import cloudinary from "cloudinary";
import SideBarLinks from "./SideBarLinks";

async function Sidebar({ className }: { className?: string }) {
    const { folders } = await cloudinary.v2.api.root_folders();
    console.log(folders);

    return (
        <div className={`${className} pb-12  `}>
            
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 
                    hidden md:block
                    text-lg font-semibold tracking-tight">
                        Manage
                    </h2>
                    <div className="space-y-1 ">
                        <SideBarLinks title="Gallery" href="/" />
                        <SideBarLinks title="Album" href="/album" />
                        {folders.map((folder: {
                            name: string;
                        }) => (
                            <SideBarLinks
                                key={folder.name}
                                title={folder.name}
                                href={`/album/${folder.name}`}
                                className="pr-16 hidden md:block "
                            />
                        ))}
                        <SideBarLinks title="Favorite" href="/favorite" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
