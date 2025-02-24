"use client"

import Head from "next/head";
import { useEffect } from "react";
import SwiperComponent from "./(common)/swipercomponent";
import VisionSection from "./(common)/visionsection";
import WaterStatusPage from "./(common)/water-status";
import NewsPage from "./(common)/news";
import ResponsibilitiesPage from "./(common)/responsibilities";
import SwocPage from "./(common)/swocvideo";
import InstitutionsPage from "./(common)/institutions";

const Index = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("swiper").then((Swiper) => {
        new Swiper.default(".swiper-container", {
          pagination: { el: ".swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          spaceBetween: 0,
          centeredSlides: true,
          speed: 3000,
          autoplay: { delay: 10000, disableOnInteraction: false },
          effect: "slide",
          loop: true,
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/images/logo_rid_thai_C.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      </Head>

      < SwiperComponent />
      < VisionSection />
      < WaterStatusPage />
      < NewsPage />
      < ResponsibilitiesPage />
      < SwocPage />
      < InstitutionsPage />

    </>
  );
};

export default Index;
