"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <div className="bg-gray-100 px-8 py-3 dark:bg-black">
      <p className="text-blue-600 flex items-center space-x-1 mt-4">
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
  );
};

export default Breadcrumb;
