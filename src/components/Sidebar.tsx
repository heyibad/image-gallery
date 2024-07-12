import React from "react";
import { Button } from "@/components/ui/button";
import { Album, Heart, Images } from "lucide-react";

function Sidebar({ className }: { className?: string }) {
    return (
        <div className={`${className} pb-12 `}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Manage
                    </h2>
                    <div className="space-y-1">
                        <Button
                            variant="secondary"
                            className="w-full justify-start"
                        >
                            <Images size={18} />
                            <span className="p-2 font-semibold">Gallery</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <Album size={18} />
                            <span className="p-2 font-semibold">Album</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <Heart size={18} />
                            <span className="p-2 font-semibold">Favorite</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
