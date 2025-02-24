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
                        <h4 className="text-3xl font-bold text-gray-900">กรมชลฯ ร่วมประชุมคณะกรรมาธิการฯ จัดการทรัพยากรน้ำ</h4>
                        <div className="text-gray-600 text-sm mt-2">
                            <i className="far fa-clock"></i> 07 มกราคม 2568
                        </div>
                        <hr className="mt-4 border-gray-300" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mb-6">
                        {["01.jpg", "02.jpg", "03.jpg"].map((img, index) => (
                            <Image
                                key={index}
                                src={`/upload/new/2025/jan/07/${img}`}
                                alt={`ข่าวภาพ ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full max-w-md h-auto rounded-lg shadow-md"
                            />
                        ))}
                    </div>

                    <div className="text-gray-900 leading-7 text-sm space-y-6">
                        <p>เช้าวันนี้ (7 มกราคม 2568) นายสุริยพล นุชอนงค์ อธิบดีกรมชลประทาน พร้อมด้วย นายเดช เล็กวิชัย รองอธิบดีฝ่ายบำรุงรักษา นายฐนันดร์ สุทธิพิศาล รองอธิบดีฝ่ายก่อสร้าง นายวิทยา แก้วมี รองอธิบดีฝ่ายวิชาการ และผู้เกี่ยวข้อง เข้าร่วมประชุมและให้การต้อนรับ คณะกรรมาธิการการบริหารจัดการทรัพยากรน้ำ สภาผู้แทนราษฎร นำโดย นายจักรัตน์ พั้วช่วย ประธานคณะกรรมาธิการการบริหารจัดการทรัพยากรน้ำ ในโอกาสที่เดินทางมาศึกษาดูงานการบริหารจัดการทรัพยากรน้ำในเขตชลประทาน ณ ห้องประชุมศูนย์ปฏิบัติการน้ำอัจฉริยะ (SWOC) อาคาร 99 ปี หม่อมหลวงชูชาติ กำภู กรมชลประทาน ถนนสามเสน โดยมีการถ่ายทอดสดผ่านทางระบบ Video Conference ไปยังสำนักงานชลประทานที่ 1-17</p>
                        <p>ในการนี้ กรมชลประทานได้บรรยายสรุปการบริหารจัดการน้ำและแนวทางการพัฒนาแหล่งน้ำ พร้อมร่วมกันแลกเปลี่ยนความคิดเห็น และแนวทางการแก้ไขปัญหาด้านน้ำ เพื่อให้การบริหารจัดการน้ำเป็นไปอย่างมีประสิทธิภาพ สอดคล้องกับความเปลี่ยนแปลงสภาพภูมิอากาศในปัจจุบัน</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;
