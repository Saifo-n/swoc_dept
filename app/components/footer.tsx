"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

declare global {
  interface Window {
    FB?: {
      init: (options: Record<string, unknown>) => void;
      XFBML: { parse: () => void };
    };
  }
}

const Footer = () => {
  useEffect(() => {
    const loadFacebookSDK = () => {
      if (typeof window !== "undefined" && !document.querySelector("script[src='https://connect.facebook.net/th_TH/sdk.js']")) {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v21.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.onload = () => {
          setTimeout(() => {
            window.FB?.init({
              xfbml: true,
              version: "v21.0",
            });
            window.FB?.XFBML.parse();
          }, 1000);
        };
        document.body.appendChild(script);
      } else {
        setTimeout(() => {
          window.FB?.XFBML.parse();
        }, 1000);
      }
    };

    loadFacebookSDK();
  }, []);

  return (
    <>
      <footer className="bg-[#2A4365] py-10 text-white w-full dark:bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-screen-2xl">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative h-20 w-40">
                <Image
                  src="/images/logo_rid_thai_C.png"
                  alt="logo"
                  title="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h5 className="mt-4 font-bold text-lg">
                ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ
              </h5>
              <p className="text-sm leading-relaxed">
                811 ถนนสามเสน แขวงถนนนครไชยศรี <br />
                เขตดุสิต กรุงเทพมหานคร 10300
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h5 className="font-bold text-lg">ติดต่อเรา</h5>
              <p className="text-sm">โทรศัพท์: 02-6692560</p>
              <p className="text-sm">โทรสาร: 02-2431098, 02-2436956</p>
              <p className="text-sm">อีเมล: wmsc.1460@gmail.com</p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h5 className="font-bold text-lg">เว็บไซต์ภายใน</h5>
              <ul className="text-sm space-y-2">
                {[
                  { name: "กรมชลประทาน", link: "https://www.rid.go.th/index.php/th/" },
                  { name: "ศูนย์ปฏิบัติการน้ำอัจฉริยะ", link: "https://wmsc.rid.go.th/" },
                  { name: "Swoc.rid.go.th", link: "https://swoc.rid.go.th/" },
                  { name: "SWOC MODEL", link: "https://swocmodel.rid.go.th/" },
                  { name: "BigData", link: "https://bigdata-swoc.rid.go.th/" },
                  { name: "โทรมาตรเพื่อการพยากรณ์น้ำและเตือนภัย", link: "https://telerid.rid.go.th/#/" },
                  { name: "Youtube: SWOC NEWS", link: "https://www.youtube.com/channel/UCO-9E_WRW_YNaU-29thdhsg" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div id="fb-root"></div>
              <div
                className="fb-page w-[300px] h-[250px] rounded-lg overflow-hidden shadow-lg"
                data-href="https://www.facebook.com/BWMHRID"
                data-tabs="timeline"
                data-width="300"
                data-height="250"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/BWMHRID"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/BWMHRID">
                    สำนักบริหารจัดการน้ำและอุทกวิทยา กรมชลประทาน
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-[#213862] py-4 text-center text-white w-full border-t border-gray-600 dark:bg-black">
        <p className="text-sm">© 2024 by SWOC RID. Made with Smart Elo™</p>
      </section>
    </>
  );
};

export default Footer;
