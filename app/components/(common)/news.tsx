"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { CalendarDays } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsData = [
    {
        img: "/upload/new/2025/jan/10/16.jpg",
        link: "new-detail-01",
        title: "กรมชลฯ สานต่อแนวพระราชดำริ ปลูกป่าฟื้นฟูระบบนิเวศ รอบอ่างฯ นฤบดินทรจินดา จ.ปราจีนบุรี",
        desc: "กรมชลประทาน จัดกิจกรรม CSR “ปลูกป่า สร้างแหล่งน้ำ สมดุลระบบนิเวศ” อ่างเก็บน้ำนฤบดินทรจินดา (เขื่อนห้วยโสมง) อันเนื่องมาจากพระราชดำริ จ.ปราจีนบุรี บูรณาการทุกภาคส่วนสานต่อแผนอนุรักษ์สิ่งแวดล้อมและส่งเสริมให้ความรู้แก่ประชาชน พร้อมปลูกป่าฟื้นฟูระบบนิเวศโดยรอบอ่างเก็บน้ำ เพื่อสร้างความสมดุล ระหว่างคน สัตว์ป่า และป่าไม้ อย่างยั่งยืน",
        date: "10 มกราคม 2568",
    },
    {
        img: "/upload/new/2025/jan/09/03.jpg",
        link: "new-detail-02",
        title: "นายกฯ ล่องใต้เยือนภูเก็ต ลุยบริหารจัดการอ่างเก็บน้ำ และแผนการเพิ่มประสิทธิภาพการเก็บกักน้ำของจังหวัดภูเก็ต",
        desc: "ณ ห้องประชุมท่าอากาศยานนานาชาติภูเก็ต อำเภอถลาง จังหวัดภูเก็ต นางสาวแพทองธาร ชินวัตร นายกรัฐมนตรี และคณะ เข้าร่วมประชุมบูรณาการการแก้ปัญหาพื้นที่จังหวัดภูเก็ต เพื่อรองรับการเติบโตของการท่องเที่ยว และแนวทางการแก้ปัญหาขาดแคลนน้ำอุปโภค - บริโภค โดยกรมชลประทาน ได้วางแนวทางการกักเก็บน้ำในอ่างเก็บน้ำ",
        date: "09 มกราคม 2568",
    },
    {
        img: "/upload/new/2025/jan/08/03.jpg",
        link: "new-detail-03",
        title: "รองอธิบดี “ฐนันดร์” ลงพื้นที่ จังหวัดภูเก็ต ต้อนรับ รมช.อัคราฯ ตรวจราชการในพื้นที่",
        desc: "ณ สำนักงานท่าเทียบเรือประมงภูเก็ต อำเภอเมือง จังหวัดภูเก็ต นายอัครา พรหมเผ่า รัฐมนตรีช่วยว่าการกระทรวงเกษตรและสหกรณ์ และคณะ ลงพื้นที่ตรวจราชการในพื้นที่จังหวัดภูเก็ต เดินหน้าขับเคลื่อนงานตามนโยบายของกระทรวงเกษตรฯ โดยมี นายฐนันดร์ สุทธิพิศาล รองอธิบดีกรมชลประทานพร้อมด้วย นายก่อพงศ์ เจ้ยแก้ว ผู้อำนวยการสำนักงานชลประทานที่ 15 นายเกริกศักดิ์ ลีนานนท์ ผู้อำนวยการโครงการชลประทานภูเก็ต และผู้ที่เกี่ยวข้อง ร่วมลงพื้นที่พร้อมรับฟังรายงานสรุปภาพรวมของท่าเทียบเรือประมงภูเก็ต แนวทางการปรับปรุง พัฒนา และแก้ไขปัญหาของชาวประมงและผู้ประกอบการ",
        date: "08 มกราคม 2568",
    },
    {
        img: "/upload/new/2025/jan/07/01.jpg",
        link: "new-detail-04",
        title: "กรมชลฯ ร่วมประชุมคณะกรรมาธิการฯ จัดการทรัพยากรน้ำ",
        desc: "ณ สำนักงานท่าเทียบเรือประมงภูเก็ต อำเภอเมือง จังหวัดภูเก็ต นายอัครา พรหมเผ่า รัฐมนตรีช่วยว่าการกระทรวงเกษตรและสหกรณ์ และคณะ ลงพื้นที่ตรวจราชการในพื้นที่จังหวัดภูเก็ต เดินหน้าขับเคลื่อนงานตามนโยบายของกระทรวงเกษตรฯ โดยมี นายฐนันดร์ สุทธิพิศาล รองอธิบดีกรมชลประทานพร้อมด้วย นายก่อพงศ์ เจ้ยแก้ว ผู้อำนวยการสำนักงานชลประทานที่ 15 นายเกริกศักดิ์ ลีนานนท์ ผู้อำนวยการโครงการชลประทานภูเก็ต และผู้ที่เกี่ยวข้อง ร่วมลงพื้นที่พร้อมรับฟังรายงานสรุปภาพรวมของท่าเทียบเรือประมงภูเก็ต แนวทางการปรับปรุง พัฒนา และแก้ไขปัญหาของชาวประมงและผู้ประกอบการ",
        date: "07 มกราคม 2568",
    },
    {
        img: "/upload/new/2025/jan/04/01.jpg",
        link: "new-detail-05",
        title: "รมช.เกษตรฯ ”อิทธิ“ ลงพื้นที่ปราจีนบุรี ติดตามการพัฒนาลุ่มน้ำประจันตคาม",
        desc: "นายอิทธิ ศิริลัทธยากร รัฐมนตรีช่วยว่าการกระทรวงเกษตรและสหกรณ์ นำคณะลงพื้นที่ติดตามโครงการปรับปรุงเพื่อเพิ่มประสิทธิภาพการบริหารจัดการน้ำในลุ่มน้ำประจันตคาม จังหวัดปราจีนบุรี",
        date: "04 มกราคม 2568",
    },
    {
        img: "/upload/new/2025/jan/03/01.jpg",
        link: "new-detail-06",
        title: "กรมชลฯ เปิดช่องทางสร้างรายได้ ช่วยเหลือเกษตรกรรับปีใหม่ 2568 ตั้งเป้ากว่า 8.4 หมื่นคน",
        desc: "กรมชลประทาน เดินหน้าจ้างแรงงานช่วยเหลือพี่น้องเกษตรกรต้อนรับปีใหม่ ปี 2568 หวังให้เกษตรกรมีรายได้เสริม ตามนโยบายของกระทรวงเกษตรและสหกรณ์ ตั้งเป้าจ้างแรงงานกว่า 8.4 หมื่นคน",
        date: "03 มกราคม 2568",
    },
];

export default function NewsPage() {
    return (
        <section className="w-full dark:bg-neutral-900 py-12 px-0 md:px-4 lg:px-8">
            <div className="container max-w-none w-full mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-left sm:text-left mb-8 px-4 md:px-8">
                    ข่าวสาร / กิจกรรม
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="w-full"
                >
                    {newsData.map((news, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white dark:bg-neutral-800 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden p-6 min-h-[500px] flex flex-col justify-between transition duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <a href={news.link} className="block w-full h-64 relative">
                                <Image
                                    src={news.img}
                                    alt={news.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </a>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 flex-grow">
                                <a href={news.link} className="hover:underline">{news.title}</a>
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 flex-grow line-clamp-2 overflow-hidden">
                                {news.desc}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                                    <CalendarDays className="w-5 h-5 mr-2" /> {news.date}
                                </div>
                                <a
                                    href={news.link}
                                    className="bg-blue-500 dark:bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-500"
                                >
                                    อ่านต่อ
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
}
