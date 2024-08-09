import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Navbar = () => {
  return (
    <nav className="border-b ">
    <div className="flex h-16 text-center text-2xl font-bold px-4 container mx-auto mt-6">
        ImageGallery
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