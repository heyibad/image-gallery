import {
    FolderPlus,
    Menu,
 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropDown() {
    return (
        <div className="absolute top-2 left-2 ">
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-8 w-12">
                        <Menu size={16}/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <FolderPlus className="mr-2 h-4 w-4" />
                            <span className="pl-2 text-xs">Add to Album</span>
                           
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
