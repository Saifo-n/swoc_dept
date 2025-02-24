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
                        <h4 className="text-3xl font-bold text-gray-900">รองอธิบดี “ฐนันดร์” ลงพื้นที่ จังหวัดภูเก็ต ต้อนรับ รมช.อัคราฯ ตรวจราชการในพื้นที่</h4>
                        <div className="text-gray-600 text-sm mt-2">
                            <i className="far fa-clock"></i> 08 มกราคม 2568
                        </div>
                        <hr className="mt-4 border-gray-300" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mb-6">
                        {["01.jpg", "02.jpg", "03.jpg", "04.jpg"].map((img, index) => (
                            <Image
                                key={index}
                                src={`/upload/new/2025/jan/08/${img}`}
                                alt={`ข่าวภาพ ${index + 1}`}
                                width={400}
                                height={300} 
                                className="w-full max-w-md h-auto rounded-lg shadow-md"
                            />
                        ))}
                    </div>

                    <div className="text-gray-900 leading-7 text-sm space-y-6">
                        <p>วันนี้ (8 มกราคม 2568) ณ สำนักงานท่าเทียบเรือประมงภูเก็ต อำเภอเมือง จังหวัดภูเก็ต นายอัครา
                            พรหมเผ่า รัฐมนตรีช่วยว่าการกระทรวงเกษตรและสหกรณ์ และคณะ
                            ลงพื้นที่ตรวจราชการในพื้นที่จังหวัดภูเก็ต เดินหน้าขับเคลื่อนงานตามนโยบายของกระทรวงเกษตรฯ
                            โดยมี นายฐนันดร์ สุทธิพิศาล รองอธิบดีกรมชลประทาน พร้อมด้วย นายก่อพงศ์ เจ้ยแก้ว
                            ผู้อำนวยการสำนักงานชลประทานที่ 15 นายเกริกศักดิ์ ลีนานนท์ ผู้อำนวยการโครงการชลประทานภูเก็ต
                            และผู้ที่เกี่ยวข้อง ร่วมลงพื้นที่ พร้อมรับฟังรายงานสรุปภาพรวมของท่าเทียบเรือประมงภูเก็ต
                            แนวทางการปรับปรุง พัฒนา และแก้ไขปัญหาของชาวประมงและผู้ประกอบการ
                        </p>

                        <p>จากนั้น นายฐนันดร์ฯ ได้ลงพื้นที่อ่างเก็บน้ำบางเหนียวดำ ตำบลศรีสุนทร อำเภอถลาง จังหวัดภูเก็ต
                            ตรวจความพร้อมของสถานที่ในการต้อนรับ นางสาวแพทองธาร ชินวัตร นายกรัฐมนตรี และคณะ
                            ในโอกาสเดินทาง
                            ลงพื้นที่จังหวัดภูเก็ต ในวันพฤหัสบดีที่ 9 มกราคม 2568
                            เพื่อติดตามการป้องกันและแก้ไขปัญหาน้ำท่วมในพื้นที่จังหวัดภูเก็ต
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;
