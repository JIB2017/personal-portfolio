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
            <li className="paragraph-regular !font-semibold text-white-800">
                <Link href="#">
                    Home
                </Link>
            </li>
            <li className="paragraph-regular !font-semibold text-white-800">
                <Link href="#projects">
                    Projects
                </Link>
            </li>
            <li className="paragraph-regular !font-semibold text-white-800">
                <Link href="#skills">
                    Skills
                </Link>
            </li>
            <li className="paragraph-regular !font-semibold text-white-800">
                <Link href="#about">
                    About
                </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
