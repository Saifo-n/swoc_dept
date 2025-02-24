"use client";

import Image from "next/image";

const responsibilities = [
    {
        img: "/images/undraw_Golden_gate_bridge_re_e.png",
        title: "ศึกษา วิเคราะห์ ประมวลผลข้อมูลพื้นที่ที่เคยประสบภัย",
        desc: "หรือเป็นพื้นที่เสี่ยงภัยอันเกิดจากน้ำ อาคารชลประทานที่สำคัญการกำหนดพื้นที่เฝ้าระวัง เพื่อใช้เป็นหลักเกณฑ์ในการเฝ้าติดตามสถานการณ์น้ำอย่างประสิทธิภาพ",
    },
    {
        img: "/images/undraw_Processing_re_tbdu.png",
        title: "ติดตาม รวบรวม ตรวจสอบ วิเคราะห์ ประมวลผลข้อมูล",
        desc: "น้ำฝน น้ำท่า ปริมาณน้ำในอ่างเก็บน้ำขนาดใหญ่ ขนาดกลาง ปริมาณน้ำผ่านอาคารชลประทานต่าง ๆ ที่จำเป็น โดยการประยุกต์ใช้ระบบภูมิสารสนเทศ เพื่อให้การจัดระบบการจัดการฐานข้อมูลของกรมชลประทาน มีความถูกต้องตามหลักวิชาการ",
    },
    {
        img: "/images/undraw_Search_re_x5gq.png",
        title: "ประยุกต์ใช้ข้อมูลจากคลังข้อมูลน้ำของกรมชลประทาน",
        desc: "เพื่อให้สามารถสืบค้นข้อมูลที่เกี่ยวข้องได้ครบถ้วน และใช้เป็นฐานข้อมูลช่วยในการติดตามสถานการณ์น้ำ และการใช้น้ำชลประทาน",
    },
    {
        img: "/images/undraw_professor_8lrt.png",
        title: "ประมวลผลข้อมูลจากแบบจำลองทางคณิตศาสตร์",
        desc: "สำหรับการพยากรณ์น้ำ การคาดการณ์แนวโน้มสถานการณ์น้ำ เพื่อจัดทำรายงานสรุปสถานการณ์น้ำที่มีความถูกต้องทันสมัย สำหรับผู้บริหารใช้เป็นข้อมูลประกอบการตัดสินใจในการบริหารจัดการน้ำทั้งในภาวะปกติ และภาวะวิกฤติ และหน่วยงานอื่น ๆ ที่เกี่ยวข้อง ให้มีความถูกต้อง รวดเร็ว ทันต่อสถานการณ์",
    },
];

export default function ResponsibilitiesPage() {
    return (
        <section className="w-full bg-gray-100 dark:bg-neutral-900 py-16 px-4 sm:px-8 md:px-16 lg:px-12">
        <div className="container max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
              <div className="flex flex-col items-start">
                <h2 className="text-xl text-gray-900 dark:text-gray-300 font-semibold">
                  ฝ่ายประมวลวิเคราะห์สถานการณ์น้ำ
                </h2>
                <h2 className="text-5xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mt-4">
                  หน้าที่ความรับผิดชอบของเรา
                </h2>
                <a
                  href="/strategic"
                  className="mt-6 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-blue-700 dark:hover:bg-blue-600 transform transition duration-300 ease-in-out hover:scale-105"
                >
                  <span className="text-lg">ยุทธศาสตร์</span>
                  <svg
                    className="w-6 h-6 text-white transition-transform duration-300 transform group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
      
            <div className="w-full lg:w-8/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                {responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-neutral-800 dark:border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    <div className="w-54 h-54 relative mb-4">
                      <Image src={item.img} alt={item.title} layout="fill" objectFit="contain" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
}
