import Image from 'next/image';

const Skills = () => {
    const skills = ["HTML", "CSS", "Javascript", "Typescript", "Tailwind CSS", "React", "Redux", "Next", "SCSS", "MySQL", "PostgreSQL", "Node", "Express", ];

  return (
    <div className='flex-center flex-row w-full flex-wrap mt-4 paddings mx-auto gap-8'>
        {skills.map((skill) => (
            <div key={skill} className='flex-center flex-col gap-4 w-full max-w-fit  border-2 rounded-md m-2 p-8 text-center'>
                <div className='h-fit w-full flex-center flex-col'>
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" alt="logo" width={60} height={60} className='h-full object-cover cursor-pointer'/>
                </div>
                <p className='body-semibold text-white-500'>{skill}</p>
            </div>
        ))}
    </div>
  )
}

export default Skills