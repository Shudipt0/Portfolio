import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Social() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((i) => (
          <li
            key={i.id}
            className={
              "flex justify-between items-center w-40 h-11 px-4  bg-gray-600 ml-[-100px] hover:ml-0 hover:rounded-r-md duration-300 " +
              " " +
              i.style
            }
          >
            <a
            className="flex justify-between items-center w-full text-white"
              href={i.href}
              
              download={i.download}
              target="-blank"
            >
              {i.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
