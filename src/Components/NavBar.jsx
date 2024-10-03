import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"

function NavBar() {
    const [Nav, setNav] =useState(false);
 const  Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed backdrop-blur-sm bg-black/30">
      <div>
        <h1 className="text-5xl font-signature ml-2 ">shudipto</h1>
      </div>

      <ul className="hidden md:flex">
        {Links.map((i) => (
          <li key={i.id} className="px-4 font-medium cursor-pointer capitalize hover:scale-105 duration-200 hover:underline">
            <Link to={i.link} smooth duration={500}>{i.link}
            </Link>
            </li>
        ))}
      </ul>
      <div onClick={(() => setNav(!Nav))} className="cursor-pointer pr-4 z-10 md:hidden">
{Nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
         
      </div>
      {Nav &&(
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 ">
      {Links.map((i) => (
          <li key={i.id} className="px-4 py-6 text-4xl cursor-pointer capitalize hover:scale-105 duration-200">
             <Link onClick={()=> setNav(!Nav)}  to={i.link} smooth duration={500}>{i.link}
             </Link>
            </li>
        ))}

      </ul>
      )}

    </div>
  );
}

export default NavBar;
