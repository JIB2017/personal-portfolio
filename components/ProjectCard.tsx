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
import logos from "@/components/IconSkills";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface Props {
    title: string,
    image: string,
    technologies: string,
    description: string,
    repository: string,
    livesite: string,
}

const ProjectCard = ({ title, image, technologies, description, repository, livesite }: Props) => {
    const skills = technologies.split(", ");

  return (
        <Card className="w-full max-w-fit !bg-transparent sm:max-w-[356px] p-4 bg-blue-0 border-white-500/30 rounded-md">
            <CardHeader className="flex-start flex-col mx-auto !p-0 gap-2.5">
                <div className="group relative h-fit w-full">
                    <Image src={image} alt="image-card" width={320} height={320} className="relative h-full rounded-sm  hover:scale-110 transition-all duration-300 cursor-pointer"/>
                    <div className="flex-center absolute space-x-4 opacity-0 group-hover:opacity-100 group-hover:z-10 svgcenter nonselect">
                        <Link href={repository} target="blank">
                            <AiFillGithub width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                        </Link>
                        <Link href={livesite} target="blank">
                            <AiOutlineLink width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-start flex-row !p-0 gap-1 mt-4">
                {skills.map((skill): any => (
                    skill in logos && 
                        <Image key={skill} src={logos[skill]} alt="skill" width={30} height={30} className="w-10 h-10 rounded-sm"/>
                    ))}
            </CardContent>
            <CardFooter className="flex-start flex-col gap-2 !p-0 mt-4">
                <CardTitle className="base-bold">{title}</CardTitle>
                <p>{description}</p>
            </CardFooter>
        </Card>

  );
};

export default ProjectCard;
