"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Album, Heart, Images } from "lucide-react";
import Link from "next/link";

function SideBarLinks({ title, href,className }: { title: string; href: string, className?: string }) {
    const pathname = usePathname();

    const renderIcon = () => {
        if (title === "Gallery") {
            return <Images size={18} />;
        } else if (title === "Album") {
            return <Album size={18} />;
        } else if (title === "Favorite") {
            return <Heart size={18} />;
        }
        return null;
    };

    return (
        <Link href={href}>
            <Button
                variant={pathname === href ? "secondary" : "ghost"}
                className={`w-full justify-start ${className}`}
            >
                {renderIcon()}
                <span className="p-2 font-semibold">{title}</span>
            </Button>
        </Link>
    );
}

export default SideBarLinks;
