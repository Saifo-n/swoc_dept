import React from "react";
import Image from "next/image";

export default function SwocPage() {
    return (
        <section id="main-Swoc" className="w-full dark:bg-neutral-900 py-12 px-0 md:px-4 lg:px-8 xl:px-12 2xl:px-16">
            <div className="container max-w-none w-full mx-auto">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    <div className="w-full lg:w-3/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Image
                            src="/upload/logoSwoc2_edited.png"
                            alt="SWOC Logo"
                            title="SWOC กรมชลประทาน"
                            width={240}
                            height={100}
                            className="mb-4 transition duration-300 hover:scale-105"
                        />

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                            SWOC กรมชลประทาน
                        </h2>
                        <p className="text-gray-700 text-2xl md:text-3xl dark:text-white">
                            บริหารจัดการน้ำยุค 4.0 ลดความรุนแรงน้ำท่วม-น้ำแล้ง
                        </p>
                    </div>

                    <div className="w-full lg:w-9/12">
                        <video
                            className="w-full h-auto rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105"
                            controls autoPlay
                        >
                            <source src="/videos/mp4/file-swoc.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>
        </section>
    );
}
