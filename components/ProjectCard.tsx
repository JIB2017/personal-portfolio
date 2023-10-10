import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface Props {
    title: string,
    image: string,
    description: string,
    repository: string,
    livesite: string,
}

const ProjectCard = ({ title, image, description, repository, livesite }: Props) => {
  return (
        <Card className="w-full max-w-fit !bg-transparent sm:max-w-[356px] p-4 border-slate-50">
            <CardHeader className="flex-start flex-col mx-auto !p-0 gap-2.5">
                <div className="group relative h-fit w-full">
                    <Image src={image} alt="image-card" width={320} height={320} className="relative h-full rounded-md object-cover hover:blur-sm transition-all duration-300 cursor-pointer"/>
                    <div className="flex-center absolute space-x-4 opacity-0 group-hover:opacity-100 svgcenter">
                        <Link href={repository}>
                            <AiFillGithub width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                        </Link>
                        <Link href={livesite}>
                            <AiOutlineLink width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                        </Link>
                    </div>
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
