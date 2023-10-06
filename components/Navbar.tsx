// import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center w-full fixed top-0 z-50 bg-transparent py-6">
      <div className="flex-center mx-auto w-full px-6 xs:px-8 sm:px-12">
        {/* <Link href="/">
            <Image src="" alt="logo" />
        </Link> */}
        <ul className="flex-center gap-x-12">
            <li className="group relative paragraph-regular !font-semibold text-white-800">
                <Link href="#hero" className="">
                    Home
                    <div className="absolute w-full h-1 gradient_blue-purple bottom-0 left-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"/>
                </Link>
            </li>
            <li className="group relative paragraph-regular !font-semibold text-white-800">
                <Link href="#projects" className="">
                    Projects
                    <div className="absolute w-full h-1 gradient_blue-purple bottom-0 left-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"/>
                </Link>
            </li>
            <li className="group relative paragraph-regular !font-semibold text-white-800">
                <Link href="#skills" className="">
                    Skills
                    <div className="absolute w-full h-1 gradient_blue-purple bottom-0 left-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"/>
                </Link>
            </li>
            <li className="group relative paragraph-regular !font-semibold text-white-800">
                <Link href="#about" className="">
                    About
                    <div className="absolute w-full h-1 gradient_blue-purple bottom-0 left-0 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"/>
                </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
