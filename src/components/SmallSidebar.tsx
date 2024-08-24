"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import React from "react";
import SideBarLinks from "./SideBarLinks";

function SmallSidebar() {
    return <div className=" relative h-8  md:hidden ">
 <div className="flex justify-end">
 <Sheet>
  <SheetTrigger className="my-4 mx-6    " > <Menu/> </SheetTrigger>
  <SheetContent>
  <div className="space-y-4 my-24  ">
                        <SideBarLinks title="Gallery" href="/" />
                        <SideBarLinks title="Album" href="/album" />
                        <SideBarLinks title="Favorite" href="/favorite" />
                    </div>
  </SheetContent>
</Sheet>
 </div>

    </div>;
}

export default SmallSidebar;
