import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
    title: string,
    image: string | null,
    description: string,
    repository: string,
    livesite: string,
}

const ProjectCard = ({ title, image, description, repository, livesite }: Props) => {
  return (
        <Card className="w-full max-w-fit !bg-transparent sm:max-w-[356px] p-4  border-slate-50">
            <CardHeader className="flex-start flex-col mx-auto !p-0 gap-2.5">
                <div className="h-fit w-full">
                    <Image src={image == null ? "" : image} alt="image-card" width={320} height={320} className="h-full rounded-md object-cover cursor-pointer"/>
                </div>
                <CardTitle className="flex-start">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

  );
};

export default ProjectCard;
