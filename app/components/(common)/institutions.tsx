import React from "react";
import Image from "next/image";

export default function InstitutionsPage() {
  const institutions = [
    {
      link: "https://www.disaster.go.th/",
      img: "/upload/logo/logo-1.png",
      alt: "กรมป้องกันและบรรเทาสาธรณภัย",
    },
    {
      link: "https://www.oic.go.th/ginfo/",
      img: "/upload/logo/logo-2.jpg",
      alt: "ฐานข้อมูลหน่วยงานรัฐ",
    },
    {
      link: "https://www.gistda.or.th/home.php",
      img: "/upload/logo/logo-3.png",
      alt: "สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ",
    },
    {
      link: "https://www.hydro.navy.mi.th/",
      img: "/upload/logo/logo-4.png",
      alt: "กรมอุทกศาสตร์",
    },
    {
      link: "http://www.onwr.go.th/",
      img: "/upload/logo/logo-5.png",
      alt: "สำนักทรัพยากรน้ำแห่งชาติ",
    },
    {
      link: "https://www.tmd.go.th/",
      img: "/upload/logo/logo-6.png",
      alt: "กรมอุตุนิยมวิทยา",
    },
    {
      link: "https://www.hii.or.th/",
      img: "/upload/logo/logo-7.png",
      alt: "สถาบันสารสนเทศทรัพยากรน้ำ",
    },
    {
      link: "https://weis.fti.or.th/",
      img: "/upload/logo/logo-8.png",
      alt: "สถาบันน้ำและสิ่งแวดล้อมเพื่อความยั่งยืน สภาอุตสาหกรรมแห่งประเทศไทย",
    },
    {
      link: "https://www.egat.co.th/home/",
      img: "/upload/logo/logo-9.png",
      alt: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย",
    },
    {
      link: "https://dds.bangkok.go.th/",
      img: "/upload/logo/logo-10.png",
      alt: "สำนักการระบายน้ำ",
    },
    {
      link: "https://www.dwr.go.th/index.php",
      img: "/upload/logo/logo-11.jpg",
      alt: "กรมทรัพยากรน้ำ",
    },
    {
      link: "https://www.dpt.go.th/th",
      img: "/upload/logo/logo-12.png",
      alt: "กรมโยธาธิการและผังเมือง",
    },
    {
      link: "https://drr.go.th/",
      img: "/upload/logo/logo-13.png",
      alt: "กรมทางหลวงชนบท",
    },
    {
      link: "https://www.rdpb.go.th/th",
      img: "/upload/logo/logo-14.jpg",
      alt: "กปร.",
    },
    {
      link: "https://www.royalrain.go.th/",
      img: "/upload/logo/logo-15.png",
      alt: "กรมฝนหลวงและการบินเกษตร",
    },
    {
      link: "https://www.mwa.co.th/home/",
      img: "/upload/logo/logo-16.jpg",
      alt: "การประปานครหลวง",
    },
    {
      link: "https://www.pwa.co.th/",
      img: "/upload/logo/logo-17.jpg",
      alt: "การประปาส่วนภูมิภาค",
    },
  ];

  return (
    <section id="main-institution" className="w-full bg-gray-100 dark:bg-neutral-900 py-12 px-16">
      <div className="w-full">
        <div className="content-area-logo text-center mb-8">
          <h2 className="text-3xl font-bold ">หน่วยงานที่เกี่ยวข้อง</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 w-full">
          {institutions.map((institution, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden w-full">
              <a href={institution.link} target="_blank" title={institution.alt}>
                <div className="card-item p-2">
                  <div className="w-full h-20 relative">
                    <Image
                      src={institution.img}
                      alt={institution.alt}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
