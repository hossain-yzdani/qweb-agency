"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavLink = {
  title: string;
  url: string;
};

const Header = () => {
  const links: NavLink[] = [
    { title: "خانه", url: "/" },
    { title: "خدمات", url: "/services" },
    { title: "وبینار ها", url: "/webinars" },
    { title: "دوره ها", url: "/courses" },
    { title: "درباره ما", url: "/about-us" },
    { title: "تماس ما", url: "/contact-us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed px-2 py-1 md:py-2 top-2 left-2 right-2 z-50 bg-white rounded-lg shadow-xl z-15">
      <div className="flex justify-between items-center">

        {/* logo & title */}
        <div
          className="flex items-center flex-1 z-15">
          <Image
            src="/logo/qweb-logo.jpg"
            alt="Picture of the author"
            width={50}
            height={50}
            className="w-13 md:w-15 rounded-lg"
          />
        </div>

        {/* routes */}
        <div
          className="flex-2 hidden md:block z-15">
          <ul className="flex items-center justify-center">
            {links.map((e) => (
              <li key={e.url} className="flex p-2">
                <Link
                  className="text-gray-600 py-2 px-1 font-bold hover:text-themecolor"
                  href={e.url}
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* login */}
        <div
          dir="ltr"
          className="flex-1 pl-4 text-white hidden md:flex flex-row z-15"
        >
          <Link
            className="w-1/2 flex justify-center items-center px-4 py-2 rounded-full bg-themecolor hover:bg-themecolor-light button-shadow transition"
            href={""}
          >
            ثبت نام
          </Link>
        </div>

        {/* mobile button */}
        <div
          className="block md:hidden  z-15">
          <button
            className=" justify-center pl-1 text-purple-950 items-center rounded cursor-pointer text-2xl"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* mobile navbar */}
        <div
          className={`menu rounded-lg bg-white shadow-xl p-2 absolute top-17 md:hidden z-15 ${
            isOpen ? "right-0" : "-right-100"
          }`}
        >
          <ul className="flex flex-col items-center px-2">
            {links.map((e, index) => (
              <li key={index} className="flex">
                <Link
                  className="text-gray-600 py-2  w-35 font-bold hover:text-themecolor active:text-themecolor"
                  href={e.url}
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* div for closing the navbar */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-red-300 absolute w-full h-screen z-10 top-0 left-0 right-0 ${
            isOpen ? "" : "hidden"
          } `}
        >
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
