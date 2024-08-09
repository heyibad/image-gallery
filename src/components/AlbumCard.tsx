
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export type recivingProp = {
    name: string;
    path: string;
    external_id: string;
};
export function AlbumCard({
    data: { name, path, external_id },
}: {
    data: recivingProp;
}) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    Avaliable Photos in {name} Album
                </CardDescription>
            </CardHeader>
            <CardContent>
               ----------------------------------
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button asChild>
                    <Link href={`/album/${name}`}>View Album</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
