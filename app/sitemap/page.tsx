"use client";

import React from "react";
import SectionCover from "../(common)/sectioncover";

const SitemapPage: React.FC = () => {
    return (
        <>
            <SectionCover title="ผังเว็บไซต์" />
            <section className="w-full py-12 dark:bg-neutral-900">
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
                    <ul className="space-y-4 text-left">
                        
                        <li className="flex items-center space-x-3 text-lg font-regular">
                            <span>หน้าแรก</span>
                        </li>

                        <li className="flex items-center space-x-3 text-lg font-regular">
                            <span>เกี่ยวกับเรา</span>
                        </li>

                        <li className="text-lg font-regular">
                            <div className="flex items-center space-x-3">
                                <span>แผนยุทธศาสตร์</span>
                            </div>
                            <ul className="pl-6 mt-1 space-y-2 text-md">
                                <li>- วิสัยทัศน์และพันธกิจ</li>
                                <li>- หน้าที่ความรับผิดชอบ</li>
                            </ul>
                        </li>
                        <li className="flex items-center space-x-3 text-lg font-regular">
                            <span>คลังความรู้</span>
                        </li>

                        <li className="flex items-center space-x-3 text-lg font-regular">
                            <span>ข่าวสารและกิจกรรม</span>
                        </li>

                        <li className="flex items-center space-x-3 text-lg font-regular">
                            <span>ติดต่อเรา</span>
                        </li>
                        <li className="flex items-center space-x-3 text-lg font-regular">
                            <span>ผังเว็บไซต์</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default SitemapPage;
