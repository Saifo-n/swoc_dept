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
                        <h4 className="text-3xl font-bold text-gray-900">กรมชลฯ เปิดช่องทางสร้างรายได้ ช่วยเหลือเกษตรกรรับปีใหม่ 2568 ตั้งเป้ากว่า 8.4 หมื่นคน</h4>
                        <div className="text-gray-600 text-sm mt-2">
                            <i className="far fa-clock"></i> 03 มกราคม 2568
                        </div>
                        <hr className="mt-4 border-gray-300" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mb-6">
                        {["01.jpg", "02.jpg", "03.jpg", "04.jpg"].map((img, index) => (
                            <Image
                                key={index}
                                src={`/upload/new/2025/jan/03/${img}`}
                                alt={`ข่าวภาพ ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full max-w-md h-auto rounded-lg shadow-md"
                            />
                        ))}
                    </div>

                    <div className="text-gray-900 leading-7 text-sm space-y-6">
                        <p>กรมชลประทาน เดินหน้าจ้างแรงงานช่วยเหลือพี่น้องเกษตรกรต้อนรับปีใหม่ ปี 2568 หวังให้เกษตรกรมีรายได้เสริม ตามนโยบายของกระทรวงเกษตรและสหกรณ์ ตั้งเป้าจ้างแรงงานกว่า 8.4 หมื่นคน</p>
                        <p>นายสุริยพล นุชองนงค์ อธิบดีกรมชลประทาน เปิดเผยว่า กระทรวงเกษตรและสหกรณ์ มีนโยบายช่วยเหลือเกษตรกรทั่วประเทศ ให้มีรายได้เสริมด้วยการจ้างแรงงานในระบบชลประทาน ในปีงบประมาณ 2568 โดยในปีนี้มีเป้าหมายการจ้างแรงงานกว่า 84,000 คน ระยะเวลา 12 เดือน (ตุลาคม 2567 - กันยายน 2568) ปัจจุบันมีการจ้างแรงงานทั่วประเทศไปแล้วกว่า 9,800 คน หรือคิดเป็นประมาณร้อยละ 12 ของแผนฯ จังหวัดที่มีผลการจ้างแรงงานมากที่สุด 3 ลำดับ ได้แก่ จังหวัดสกลนคร 1,200 คน จังหวัดกาฬสินธุ์ 1,096 คน และจังหวัดเชียงใหม่ 753 คน</p>
                        <p>ทั้งนี้ กรมชลประทาน ยังคงเดินหน้ารับสมัครจ้างแรงงานอย่างต่อเนื่องให้ได้ตามเป้าหมายที่ตั้งไว้ จึงขอเชิญชวนเกษตรกรหรือประชาชนที่สนใจเข้าร่วมโครงการฯ โดยสามารถติดต่อสอบถามหรือสมัครได้ที่โครงการชลประทานใกล้บ้าน หรือทางสายด่วนกรมชลประทาน 1460 ในวันและเวลาราชการ</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsPage;
