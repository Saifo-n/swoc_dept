"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionCover from "../(common)/sectioncover";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFax, FaClock } from "react-icons/fa";

const ContactPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <SectionCover title="ติดต่อเรา" />

            <section className="w-full py-16 dark:bg-neutral-900">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div>
                            <h3 className="text-2xl font-bold ">กรมชลประทาน สามเสน</h3>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-blue-500 text-2xl mt-1" />
                                    <div>
                                        <p className="text-lg font-semibold ">ที่อยู่สำนักงานใหญ่</p>
                                        <p >811 ถนนสามเสน แขวงถนนนครไชยศรี เขตดุสิต กรุงเทพมหานคร 10300</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaEnvelope className="text-blue-500 text-2xl mt-1" />
                                    <div>
                                        <p className="text-lg font-semibold">อีเมล</p>
                                        <p >wmsc.1460@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaPhoneAlt className="text-blue-500 text-2xl mt-1" />
                                    <div>
                                        <p className="text-lg font-semibold ">โทรศัพท์</p>
                                        <p >02-6692560</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaFax className="text-blue-500 text-2xl mt-1" />
                                    <div>
                                        <p className="text-lg font-semibold">โทรสาร</p>
                                        <p >02-2431098, 02-2436956</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaClock className="text-blue-500 text-2xl mt-1" />
                                    <div>
                                        <p className="text-lg font-semibold">เวลาทำการ</p>
                                        <p >จันทร์ - ศุกร์ 08:30 - 16:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button onClick={() => setIsModalOpen(true)} title="แผนที่" className="relative w-full max-w-[450px]">
                                <Image
                                    src="/images/RID_Samsen_Map-TH.png"
                                    alt="แผนที่ กรมชลประทาน สามเสน"
                                    width={450}
                                    height={300}
                                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                />
                            </button>

                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.8482094213673!2d100.51143909999999!3d13.788022399999997!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29be6b3487a57%3A0xca284ebdb800c0c5!2z4LiB4Lij4Lih4LiK4Lil4Lib4Lij4Liw4LiX4Liy4LiZ!5e0!3m2!1sth!2sth!4v1729570683614!5m2!1sth!2sth"
                            width="100%"
                            height="400"
                            className="border-0 rounded-lg shadow-md"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative max-w-3xl max-h-[80vh]">
                        <Image
                            src="/images/RID_Samsen_Map-TH.png"
                            alt="แผนที่ กรมชลประทาน สามเสน"
                            width={1024}
                            height={768}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                </div>
            )}
        </>
    );
};

export default ContactPage;
