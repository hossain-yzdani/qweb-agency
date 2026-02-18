"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  title: string;
  url: string;
};

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  },[pathname])

  const links: NavLink[] = [
    { title: "خانه", url: "/" },
    { title: "خدمات", url: "/services" },
    { title: "وبینار ها", url: "/webinars" },
    { title: "دوره ها", url: "/courses" },
    { title: "درباره ما", url: "/about-us" },
    { title: "تماس ما", url: "/contact-us" },
  ];


  return (
  <nav className="fixed px-2 py-1 md:py-2 top-2 left-2 right-2 z-50 glass rounded-xl">


{/* 
    <nav class="fixed top-0 left-0 right-0 z-50 glass">
     <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
      <a href="#" class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
         <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
        </div><span class="text-xl font-bold">Qweb</span>
         </a>
       <div class="hidden md:flex items-center gap-8">
          <a href="#services" class="nav-link">Services</a> 
          <a href="#why" class="nav-link">Why Qweb</a> 
          <a href="#process" class="nav-link">Process</a> 
          <a href="#results" class="nav-link">Results</a> 
          <a href="#contact" class="btn-glow text-sm py-3 px-6">Get Started</a>
       </div>
       <button class="md:hidden text-white" onclick="toggleMobileMenu()">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6" /> <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
     </div>
    </nav> */}

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
                  className={`nav-link text-linkcolor ${e.url === pathname ? "text-white" : ""}`}
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
            className="w-1/2 flex justify-center items-center px-4 py-2 rounded-full bg-themecolor btn-glow"
            href={""}
          >
            ثبت نام
          </Link>
        </div>

        {/* mobile button */}
        <div
          className="block md:hidden  z-15">
          <button
            className=" justify-center pl-1 text-white items-center rounded cursor-pointer text-2xl"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* mobile navbar */}
        <div
          className={`menu rounded-lg glass shadow-xl p-2 absolute top-17 md:hidden z-15 ${
            isOpen ? "right-0" : "-right-100"
          }`}
        >
          <ul className="flex flex-col items-center px-2">
            {links.map((e, index) => (
              <li key={index} className="flex">
                <Link
                  className={`text-linkcolor py-2  w-35 font-bold hover:text-themecolor ${e.url === pathname ? "text-white" : ""}`}
                  href={e.url}
                >
                  {e.title}
                </Link>
              </li>
            ))}
            
          </ul>

            <Link
              className="w-full text-white flex justify-center items-center mt-2 p-2 rounded-xl btn-glow"
              href={""}
            >
             ثبت نام
            </Link>
        </div>

        {/* div for closing the navbar */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-transparent blur-3xl absolute w-full h-screen z-10 top-0 left-0 right-0 ${
            isOpen ? "" : "hidden"
          } `}
        >
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
