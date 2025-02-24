"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionCover from "../(common)/sectioncover";

const documents = [
    {
        image: "/upload/knowledge/1.png",
        title: "คู่มือปฏิบัติงานส่วนอุทกวิทยา",
        link: "/upload/knowledge/manual_hyd.pdf",
        date: "18 ส.ค. 2019",
        author: "ส่วนอุทกวิทยา"
    },
    {
        image: "/upload/knowledge/2.png",
        title: "คู่มือการคำนวณปริมาณน้ำ (Rating Curve)",
        link: "/upload/knowledge/calcurate-rating_curve.pdf",
        date: "25 พ.ค. 2010",
        author: "กลุ่มงานสารสนเทศและพยากรณ์สารสนเทศ"
    },
    {
        image: "/upload/knowledge/3.png",
        title: "คู่มือการสร้างความสัมพันธ์ระดับน้ำ-ปริมาณ (Rating Curve)",
        link: "/upload/knowledge/problem-rating_curve.pdf",
        date: "25 พ.ค. 2010",
        author: "กลุ่มงานสารสนเทศและพยากรณ์สารสนเทศ"
    },
    {
        image: "/upload/knowledge/4.png",
        title: "คู่มือการประเมินค่าปริมาณการไหลของน้ำ ด้วยวิธี Manning's formula",
        link: "/upload/knowledge/manning_s_formula.pdf",
        date: "25 พ.ค. 2010",
        author: "กลุ่มงานสารสนเทศและพยากรณ์สารสนเทศ"
    },
    {
        image: "/upload/knowledge/5.png",
        title: "คู่มือการกรอก Coding form",
        link: "/upload/knowledge/c-form.pdf",
        date: "25 พ.ค. 2010",
        author: "กลุ่มงานสารสนเทศและพยากรณ์สารสนเทศ"
    },
    {
        image: "/upload/knowledge/6.jpg",
        title: "คู่มือการประเมินค่าปริมาณการไหลของน้ำ ด้วยวิธี Manning's formula",
        link: "/upload/knowledge/Basin.pdf",
        date: "1 ม.ค. 2011",
        author: "ดร.ทองเปลว กองจันทร์"
    }
];

const videos = [
    {
        link: "https://www.youtube.com/embed/cxra-Y9GepM",
        title: "วีดีทัศน์แนะนำกรมชลประทาน 2566 [ENG]",
        date: "31 ต.ค. 2024",
        source: "SWOC NEWS"
    },
    {
        link: "https://www.youtube.com/embed/63CEU_vkk6o",
        title: "SWOC ศูนย์ปฏิบัติการน้ำอัจฉริยะ",
        date: "25 เม.ย. 2022",
        source: "SWOC NEWS"
    },
    {
        link: "https://www.youtube.com/embed/d91t1VpIj50",
        title: "ระบบโทรมาตร เพื่อการพยากรณ์น้ำ",
        date: "20 พ.ย. 2023",
        source: "SWOC NEWS"
    },
    {
        link: "https://www.youtube.com/embed/J27s6gRr8hw",
        title: "SWOC PR l รายงานสถานการณ์น้ำแบบมีส่วนร่วม",
        date: "25 เม.ย. 2022",
        source: "SWOC NEWS"
    },
    {
        link: "https://www.youtube.com/embed/K_qzAFrlOcQ",
        title: "SWOC กับการบริหารจัดการน้ำอย่างอัจฉริยะ",
        date: "25 เม.ย. 2022",
        source: "SWOC NEWS"
    },
    {
        link: "https://www.youtube.com/embed/dXOmweRLSAQ",
        title: "SWOC “นวัตกรรม สายน้ำ” แก้ไขปัญหา นำพาสุข",
        date: "25 เม.ย. 2022",
        source: "SWOC NEWS"
    },
    {
        link: "https://www.youtube.com/embed/_w2NdLmeFJg",
        title: "เรื่องเล่าจากสายน้ำ กว่าจะเป็น SWOC",
        date: "25 เม.ย. 2022",
        source: "SWOC NEWS"
    }
];


const KnowledgePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"documents" | "videos">("documents");

    return (
        <>
            <SectionCover title="คลังความรู้" />

            <section className="w-full dark:bg-neutral-900 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-center mb-8 border-b">
                        <button
                            className={`px-6 py-3 text-lg font-semibold border-b-2 ${activeTab === "documents" ? "border-blue-500 text-blue-500" : "text-gray-600 dark:text-white"
                                }`}
                            onClick={() => setActiveTab("documents")}
                        >
                            เอกสาร
                        </button>
                        <button
                            className={`px-6 py-3 text-lg font-semibold border-b-2 ${activeTab === "videos" ? "border-blue-500 text-blue-500" : "text-gray-600 dark:text-white"
                                }`}
                            onClick={() => setActiveTab("videos")}
                        >
                            วีดีโอ
                        </button>
                    </div>

                    {activeTab === "documents" ? <DocumentsSection /> : <VideosSection />}
                </div>
            </section>
        </>
    );
};

const DocumentsSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {documents.map((doc, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[250px]">
                    <Link href={doc.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={doc.image}
                            alt={doc.title}
                            width={400}
                            height={300}
                            className="w-full h-[300px] object-cover"
                        />
                    </Link>
                    <div className="p-3">
                        <h4 className="text-sm font-semibold text-gray-900">{doc.title}</h4>
                        <p className="text-xs text-gray-600">{doc.date} / {doc.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// 🔹 ส่วนวีดีโอ
const VideosSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* 🔹 ปรับให้ responsive */}
                    <div className="relative w-full aspect-video">
                        <iframe
                            className="w-full h-full rounded-t-lg"
                            src={video.link}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4">
                        <h4 className="text-base font-semibold text-gray-900">{video.title}</h4>
                        <p className="text-sm text-gray-600">{video.date} / {video.source}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KnowledgePage;
