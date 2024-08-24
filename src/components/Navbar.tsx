import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScanSearch } from "lucide-react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="border-b ">
    <div className="flex h-16 text-center text-xl font-bold px-4 container mx-auto mt-6">
     <Link href="/" className="gap-2 flex ">
     <ScanSearch className="  " size={28}/> 
       <span>
       ImageGallery
       </span>
     </Link>
        <div className="ml-auto flex text-center space-x-4">
            <Avatar>
                <AvatarImage src="https://github.com/heyibad.png" />
                <AvatarFallback>I</AvatarFallback>
            </Avatar>
        </div>
    </div>
</nav>
  )
}

export default Navbar