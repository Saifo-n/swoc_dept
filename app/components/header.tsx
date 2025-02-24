"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./(common)/themetoggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "แผนยุทธศาสตร์", path: "/strategic" },
    { name: "คลังความรู้", path: "/knowledge" },
    { name: "ข่าวสารและกิจกรรม", path: "https://www.facebook.com/BWMHRID", external: true },
    { name: "ติดต่อเรา", path: "/contact" },
    { name: "ผังเว็บไซต์", path: "/sitemap" },
  ];

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md dark:bg-black">
        <div className="w-full h-5 bg-[#213862] dark:bg-neutral-900"></div>

        <nav className="w-full flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 xl:h-16 xl:w-16">
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/images/logo_rid_thai_C.png"
                  alt="logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </Link>
            </div>

            <p className="text-lg xl:text-xl font-semibold text-gray-900 dark:text-white">
              ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ
            </p>
          </div>

          <button
            className="xl:hidden text-2xl text-gray-700 dark:text-white dark:bg-black"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`${isOpen ? "block" : "hidden"
              } absolute left-0 top-full w-full bg-white shadow-lg xl:hidden transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col space-y-3 text-gray-700 dark:text-white dark:bg-black font-medium text-lg px-6 py-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <Link
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#213862] transition-colors block"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={closeMenu}
                      className={`hover:text-blue-600 transition-colors block ${currentPath === item.path ? "text-white bg-[#213862] px-3 py-1 rounded-full" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="flex justify-center mt-4">
                <ThemeToggle />
              </li>
            </ul>
          </div>

          <div className="hidden xl:flex items-center space-x-6">
            <ul className="flex space-x-8 text-gray-700 font-medium text-lg dark:text-white">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#213862] transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.path}
                      className={`hover:text-blue-600 transition-colors ${currentPath === item.path ? "text-white bg-[#213862] px-3 py-1 rounded-full" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <div className="pt-[80px] xl:pt-[100px]"></div>
    </>
  );
};

export default Header;
