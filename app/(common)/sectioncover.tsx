"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface SectionCoverProps {
  title: string;
  backgroundImage?: string;
}

const SectionCover: React.FC<SectionCoverProps> = ({
  title,
  backgroundImage = "/images/section_cover.png",
}) => {
  return (
    <>
      <div
        className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative flex items-center justify-center h-full w-full">
          <h1 className="text-white text-4xl font-regular text-center">{title}</h1>
        </div>
      </div>

      <div className="bg-gray-100 px-8 py-3 dark:bg-black">
        <p className="text-blue-600 flex items-center space-x-1">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-blue-600 w-4 h-4 transition-colors duration-200 hover:text-blue-800"
          />
          <Link
            href="/"
            className="text-blue-600 no-underline transition-colors duration-200 hover:text-blue-800"
          >
            หน้าแรก
          </Link>
          <span className="text-gray-600 dark:text-white"> / {title}</span>

        </p>
      </div>
    </>
  );
};

export default SectionCover;
