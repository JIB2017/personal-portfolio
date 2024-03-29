"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import logos from "@/components/IconSkills";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
    title: string,
    delay: number,
    image: string,
    technologies: string,
    description: string,
    repository: string,
    livesite: string,
}

const ProjectCard = ({title, delay, image, technologies, description, repository, livesite }: Props) => {
    const skills = technologies.split(", ");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    initial={{
        opacity: 0,
        translateX: -50,
        translateY: -50,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        translateX: isInView ? 0 : 50,
        translateY: isInView ? 0 : -50,
      }}
      transition={{
        duration: 0.5,
        delay: delay * 0.2,
      }}
      >
        <Card className="w-full max-w-fit !bg-transparent sm:max-w-[356px] p-4 bg-blue-0 border-white-500/30 rounded-md transition-all duration-400" ref={ref}>
            <CardHeader className="flex-start flex-col mx-auto !p-0 gap-2.5">
                <div className="group relative h-fit w-full grayscale hover:grayscale-0 transition-all duration-400">
                    <Image src={image} alt="image-card" width={320} height={320} className="relative h-full max-h-min rounded-md cursor-pointer"/>
                      {repository !== livesite ? (
                        <div className="flex-center absolute space-x-4 opacity-0 group-hover:opacity-100 svgcenter transition-all duration-400 nonselect">
                          <Link href={repository} target="blank">
                            <AiFillGithub width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                          </Link>
                          <Link href={livesite} target="blank">
                              <AiOutlineLink width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                          </Link>
                        </div>
                      ) : repository !== "https://github.com/JIB2017/Booking-Software" ? (
                        <div className="flex-center absolute space-x-4 opacity-0 group-hover:opacity-100 singlesvgcenter transition-all duration-400 nonselect">
                          <Link href={repository} target="blank">
                            <AiFillGithub width={50} height={50} className="w-10 h-10 bg-gray-800 p-2 rounded-full hover:bg-gray-200 hover:text-black-200 cursor-pointer"/>
                          </Link>
                        </div>
                      ) : <></>}
                        
                </div>
            </CardHeader>
            <CardContent className="flex-start flex-row !p-0 gap-1 mt-4">
                {skills.map((skill) => (
                    skill in logos && 
                    <div className="relative group">
                      <Image key={skill} src={logos[skill]} alt="skill" width={30} height={30} className="w-10 h-10 rounded-sm cursor-pointer"/>
                      <span className="absolute opacity-0 p-2 text-black-400 bg-cyan-300 rounded group-hover:opacity-100 -translate-x-2 -translate-y-4 group-hover:translate-y-2 transition duration-300 nonselect whitespace-nowrap">{skill}</span>
                    </div>
                    ))}
            </CardContent>
            <CardFooter className="flex-start flex-col gap-2 !p-0 mt-4 nonselect">
                <CardTitle className="base-bold">{title}</CardTitle>
                <p>{description}</p>
            </CardFooter>
        </Card>
    </motion.div>

  );
};

export default ProjectCard;
