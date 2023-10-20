import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex-between xs:flex-col xs:gap-12 lg:flex-row w-full px-12 py-6 mx-10 bgfooter border-t border-blue-700/40">
      <div className="flex-center xs:flex-col lg:flex-row">
        <p className="w-full body-regular text-white-800">
          © 2023, por{" "}
          <span className="body-semibold text-gradient_purple-blue">
            Juan Ignacio Blacutt
          </span>{" "}
          desde Buenos Aires para donde sea que estés con
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-red-600 ml-2 inline leading-6"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.85 2.5a3.25 3.25 0 0 0-2.53 5.29.8.8 0 0 1 .046.063.551.551 0 0 0 .062.077l5.175 5.4a.55.55 0 0 0 .794 0l5.175-5.4a.548.548 0 0 0 .062-.077.798.798 0 0 1 .046-.063 3.25 3.25 0 0 0-5.058-4.083.8.8 0 0 1-1.244 0A3.242 3.242 0 0 0 4.85 2.5ZM0 5.75a4.85 4.85 0 0 1 8-3.688 4.85 4.85 0 0 1 6.947 6.706 2.158 2.158 0 0 1-.22.27l-5.175 5.4a2.15 2.15 0 0 1-3.104 0l-5.175-5.4a2.152 2.152 0 0 1-.22-.27A4.833 4.833 0 0 1 0 5.75Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="flex flex-row gap-2 text-gray-400">
        <Link href="mailto:blacuttjuan07@gmail.com" target="blank" className="flex-center">
          <p className="body-regular">blacuttjuan07@gmail.com</p>
        </Link>
        <Link href="https://www.linkedin.com/in/juan-ignacio-blacutt-web-design/" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7"
          >
            <path
              fill="currentColor"
              d="M21.2 2H2.8a.8.8 0 0 0-.8.8v18.4c0 .443.357.8.8.8h18.4a.8.8 0 0 0 .8-.8V2.8a.8.8 0 0 0-.8-.8ZM7.933 19.042H4.965V9.5h2.968v9.543ZM6.45 8.192a1.72 1.72 0 1 1 0-3.439 1.72 1.72 0 0 1 0 3.439Zm12.592 10.85h-2.965V14.4c0-1.107-.02-2.53-1.542-2.53-1.543 0-1.78 1.205-1.78 2.45v4.722H9.792V9.5h2.846v1.304h.04c.394-.75 1.361-1.542 2.807-1.542 3.005 0 3.557 1.977 3.557 4.547v5.235Z"
            ></path>
          </svg>
        </Link>
        <Link href="https://github.com/JIB2017" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.048 2a9.912 9.912 0 0 0-6.511 2.441 10.308 10.308 0 0 0-3.407 6.17 10.436 10.436 0 0 0 1.323 6.954 10.078 10.078 0 0 0 5.422 4.418c.505.093.684-.227.684-.497v-1.744c-2.804.623-3.395-1.379-3.395-1.379a2.738 2.738 0 0 0-1.115-1.504c-.906-.63.073-.63.073-.63.319.046.621.164.887.348.266.183.487.426.648.709.136.252.32.475.54.655a2.102 2.102 0 0 0 2.38.201 2.193 2.193 0 0 1 .617-1.372c-2.23-.258-4.572-1.139-4.572-5.035a4.013 4.013 0 0 1 1.029-2.75 3.812 3.812 0 0 1 .099-2.712s.843-.277 2.76 1.05a9.297 9.297 0 0 1 5.027 0c1.916-1.326 2.755-1.05 2.755-1.05.369.85.413 1.812.122 2.693a4.014 4.014 0 0 1 1.03 2.751c0 3.94-2.348 4.802-4.585 5.034a2.438 2.438 0 0 1 .685 1.888v2.815c0 .333.178.59.69.49a10.083 10.083 0 0 0 5.345-4.434 10.437 10.437 0 0 0 1.29-6.908 10.308 10.308 0 0 0-3.373-6.133A9.915 9.915 0 0 0 12.048 2Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <Link href="https://twitter.com/JuanBlacutt2" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            fill="none"
            className="h-7 w-7"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        
      </div>
    </section>
  );
};

export default Footer;
