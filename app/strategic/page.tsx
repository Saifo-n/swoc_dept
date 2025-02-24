"use client";

import React from "react";
import Image from "next/image";
import SectionCover from "../(common)/sectioncover";

const Page: React.FC = () => {
    return (
        <>
            <SectionCover title="ยุทธศาสตร์" />

            <section className="w-full py-10 flex justify-center bg-white">
                    <div className="max-w-6xl w-full px-4">
                        <Image
                            src="/upload/Circle-Vision-Mission-Diagram-Infographic-Graph.png"
                            alt="Responsive image"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
            </section>

            <section className="w-full py-16 dark:bg-neutral-900">
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12">
                    <h2 className="text-4xl font-semibold text-gray-900 dark:text-white text-center mb-12">
                        หน้าที่ความรับผิดชอบ
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 justify-center">
                        {responsibilities.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-neutral-800 dark:border-gray-700 shadow-lg rounded-2xl overflow-hidden w-full max-w-[400px] transition-transform transform hover:scale-105 duration-300"
                            >
                                <div className="relative w-full h-56">
                                    <Image
                                        src={item.image}
                                        alt="card image"
                                        fill
                                        className="object-cover rounded-t-2xl"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

const responsibilities = [
    {
        image: "/images/undraw_Golden_gate_bridge_re_e.png",
        title: "ศึกษา วิเคราะห์ ประมวลผลข้อมูลพื้นที่ที่เคยประสบภัย",
        description: "หรือเป็นพื้นที่เสี่ยงภัยอันเกิดจากน้ำ อาคารชลประทานที่สำคัญการกำหนดพื้นที่เฝ้าระวัง เพื่อใช้เป็นหลักเกณฑ์ในการเฝ้าติดตามสถานการณ์น้ำอย่างประสิทธิภาพ"
    },
    {
        image: "/images/undraw_Processing_re_tbdu.png",
        title: "ติดตาม รวบรวม ตรวจสอบ วิเคราะห์ ประมวลผลข้อมูล",
        description: "น้ำฝน น้ำท่า ปริมาณน้ำในอ่างเก็บน้ำขนาดใหญ่ ขนาดกลาง ปริมาณน้ำผ่านอาคารชลประทานต่าง ๆ ที่จำเป็น โดยการประยุกต์ใช้ระบบภูมิสารสนเทศ เพื่อให้การจัดระบบการจัดการฐานข้อมูลของกรมชลประทาน มีความถูกต้องตามหลักวิชาการ"
    },
    {
        image: "/images/undraw_Search_re_x5gq.png",
        title: "ประยุกต์ใช้ข้อมูลจากคลังข้อมูลน้ำของกรมชลประทาน",
        description: "เพื่อให้สามารถสืบค้นข้อมูลที่เกี่ยวข้องได้ครบถ้วน และใช้เป็นฐานข้อมูลช่วยในการติดตามสถานการณ์น้ำ และการใช้น้ำชลประทาน"
    },
    {
        image: "/images/undraw_professor_8lrt.png",
        title: "ประมวลผลข้อมูลจากแบบจำลองทางคณิตศาสตร์",
        description: "สำหรับการพยากรณ์น้ำ การคาดการณ์แนวโน้มสถานการณ์น้ำ เพื่อจัดทำรายงานสรุปสถานการณ์น้ำที่มีความถูกต้องทันสมัย สำหรับผู้บริหารใช้เป็นข้อมูลประกอบการตัดสินใจในการบริหารจัดการน้ำทั้งในภาวะปกติ และภาวะวิกฤติ และหน่วยงานอื่น ๆ ที่เกี่ยวข้อง ให้มีความถูกต้อง รวดเร็ว ทันต่อสถานการณ์"
    },
    {
        image: "/images/undraw_adventure_map_hnin.png",
        title: "ติดตาม ตรวจสอบ วิเคราะห์ข้อมูลที่เกี่ยวข้องกับการแก้ไขปัญหาน้ำแล้ง น้ำท่วม",
        description: "คุณภาพน้ำ รวมทั้งการสูบน้ำช่วยเหลือเกษตรกร เพื่อใช้เป็นข้อมูลในการบริหารจัดการน้ำที่มีความถูกต้องรวดเร็ว ทันต่อสถานการณ์"
    },
    {
        image: "/images/undraw_data_reports_706v.png",
        title: "ตรวจสอบ ประมวลผลข้อมูลน้ำฝน น้ำท่า น้ำชลประทาน",
        description: "ปริมาณน้ำในอ่างเก็บน้ำสถานการณ์น้ำแล้ง น้ำท่วม คุณภาพน้ำจากระบบโทรมาตร จากหน่วยงานภายใน หน่วยงานภายนอก และสื่อต่าง ๆ เพื่อสรุปเป็นรายงานสถานการณ์น้ำเป็นรายวัน รายสัปดาห์ รายเดือน รายฤดูกาล แจ้งผู้เกี่ยวข้องทราบ และเผยแพร่สู่สาธารณชน"
    },
    {
        image: "/images/undraw_Sharing_articles_re_jnk.png",
        title: "ปฏิบัติงานร่วมกับหน่วยงานอื่นที่เกี่ยวข้อง",
        description: "หรือสนับสนุนการปฏิบัติงานของหน่วยงานอื่นที่เกี่ยวข้องหรือได้รับมอบหมาย เพื่อให้การดำเนินงานเป็นไปตามเป้าหมายที่กำหนด"
    }
];

export default Page;
