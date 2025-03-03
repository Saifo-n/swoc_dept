"use client";

import React from "react";
import Image from "next/image";
import Breadcrumb from "../(common)/breadcrumb";

const NewsPage: React.FC = () => {
    return (
        <>
            <Breadcrumb title="ข่าวสารและกิจกรรม" />

            <section className="w-full py-16 bg-white">
                <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-12">
                    <div className="mb-6">
                        <h4 className="text-3xl font-bold text-gray-900">นายกฯ ล่องใต้เยือนภูเก็ต ลุยบริหารจัดการอ่างเก็บน้ำ และแผนการเพิ่มประสิทธิภาพการเก็บกักน้ำของจังหวัดภูเก็ต</h4>
                        <div className="text-gray-600 text-sm mt-2">
                            <i className="far fa-clock"></i> 09 มกราคม 2568
                        </div>
                        <hr className="mt-4 border-gray-300" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mb-6">
                        {["01.jpg", "02.jpg", "03.jpg", "04.jpg"].map((img, index) => (
                            <Image
                                key={index}
                                src={`/upload/new/2025/jan/09/${img}`}
                                alt={`ข่าวภาพ ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full max-w-md h-auto rounded-lg shadow-md"
                            />
                        ))}
                    </div>

                    <div className="text-gray-900 leading-7 text-sm space-y-6">
                        <p>วันนี้ (9 มกราคม 2568) ณ ห้องประชุมท่าอากาศยานนานาชาติภูเก็ต อำเภอถลาง จังหวัดภูเก็ต
                            นางสาวแพทองธาร ชินวัตร นายกรัฐมนตรี และคณะ
                            เข้าร่วมประชุมบูรณาการการแก้ปัญหาพื้นที่จังหวัดภูเก็ต เพื่อรองรับการเติบโตของการท่องเที่ยว
                            และแนวทางการแก้ปัญหาขาดแคลนน้ำอุปโภค - บริโภค โดยกรมชลประทาน
                            ได้วางแนวทางการกักเก็บน้ำในอ่างเก็บน้ำ เพื่อแก้ปัญหาน้ำท่วม น้ำแล้ง เดินหน้าเตรียมการ Big
                            Event เพื่อผลักดันภูเก็ตให้เป็น Premium destination โดยมี นายฐนันดร์ สุทธิพิศาล
                            รองอธิบดีกรมชลประทาน พร้อมด้วย นายก่อพงศ์ เจ้ยแก้ว ผู้อำนวยการสำนักงานชลประทานที่ 15
                            นายเกริกศักดิ์ ลีนานนท์
                            ผู้อำนวยการโครงการชลประทานภูเก็ตและหน่วยงานที่เกี่ยวข้องร่วมลงพื้นที่และรายงานแนวทางการแก้ปัญหา
                        </p>

                        <p>จากนั้น นายกรัฐมนตรี และคณะ ได้เดินทางไปยังอ่างเก็บน้ำบางเหนียวดำ ตำบลศรีสุนทร อำเภอถลาง
                            ติดตามการบริหารจัดการอ่างเก็บน้ำ และแผนการเพิ่มประสิทธิภาพการเก็บกักน้ำของจังหวัดภูเก็ต
                            โดยกรมชลประทานได้วางแผนบริหารจัดการน้ำในอ่างเก็บน้ำทั้ง 3 แห่ง ได้แก่ อ่างเก็บน้ำบางวาด
                            ตำบลกะทู้ อำเภอกะทู้ อ่างเก็บน้ำบางเหนียวดำ ตำบลศรีสุนทร อำเภอถลาง และอ่างเก็บน้ำคลองกะทะ
                            ตำบลฉลอง อำเภอเมืองภูเก็ต ความจุเก็บกักรวมประมาณ 22.13 ล้าน ลบ.ม.
                            และยังมีแหล่งน้ำสำรองจากขุมเหมืองธรรมชาติ อีกประมาณ 21 ล้าน ลบ.ม.
                            ซึ่งเป็นแหล่งน้ำต้นทุนสนับสนุนการผลิตน้ำประปา
                        </p>

                        <p>ทั้งนี้ จากอุตสาหกรรมการท่องเที่ยวที่ขยายตัวอย่างรวดเร็ว
                            ทำให้จังหวัดภูเก็ตมีความต้องการใช้น้ำมากขึ้น
                            ส่งผลให้ปัจจุบันประสบปัญหาขาดแคลนน้ำในช่วงหน้าแล้งปริมาณน้ำดิบที่จะนำมาใช้ในการผลิตน้ำประปาจากอ่างเก็บน้ำของกรมชลประทานทั้ง
                            3 อ่างฯ มีปริมาณไม่เพียงพอที่จะรองรับการใช้น้ำในพื้นที่จังหวัดภูเก็ต โครงการชลประทานภูเก็ต
                            สำนกงานชลประทานที่ 15 ได้วางแผนพัฒนาและจัดหาแหล่งน้ำต้นทุนเพิ่มเติม
                            ด้วยการเสนอโครงการขุดลอกอ่างเก็บน้ำบางวาด
                            เพื่อเพิ่มประสิทธิภาพการเก็บกักน้ำให้ได้มากยิ่งขึ้น หากดำเนินการแล้วเสร็จ
                            จะเป็นแหล่งเก็บกักน้ำไว้ใช้ในฤดูแล้งและช่วยเพิ่มปริมาณน้ำต้นทุนที่จะสนับสนุนการใช้น้ำให้กับจังหวัดภูเก็ตได้อย่างเพียงพอและยั่งยืนสืบไป
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;
