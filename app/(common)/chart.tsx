"use client";

import { Chart, ChartType, ChartData, ChartOptions, registerables } from "chart.js";
import React, { useRef, useEffect } from "react";

// ✅ ลงทะเบียน modules ทั้งหมด
Chart.register(...registerables);

const ChartComponent: React.FC = () => {
    // 🔹 เปลี่ยน `useRef<HTMLCanvasElement | null>` เป็น `useRef<HTMLCanvasElement>`
    const pieRef = useRef<HTMLCanvasElement>(null!);
    const barPositionsRef = useRef<HTMLCanvasElement>(null!);
    const barAgeRef = useRef<HTMLCanvasElement>(null!);
    const barCategoryRef = useRef<HTMLCanvasElement>(null!);

    const chartInstances = useRef<{ [key: string]: Chart | null }>({
        pie: null,
        barPositions: null,
        barAge: null,
        barCategory: null,
    });

    const createChart = (
        ref: React.RefObject<HTMLCanvasElement>,
        type: ChartType,
        data: ChartData,
        options: ChartOptions,
        key: keyof typeof chartInstances.current
    ) => {
        // 🔹 Type Guard: เช็คว่า `ref.current` ไม่เป็น `null`
        if (!ref.current) return;

        if (chartInstances.current[key]) {
            chartInstances.current[key]?.destroy();
        }
        chartInstances.current[key] = new Chart(ref.current, { type, data, options });
    };

    useEffect(() => {
        const chartRefs = chartInstances.current;

        createChart(
            pieRef,
            "doughnut",
            {
                labels: ["ชาย", "หญิง"],
                datasets: [{ data: [36, 27], backgroundColor: ["#2d72b5", "#5a9bd5"] }],
            },
            { responsive: true, plugins: { legend: { position: "top" } } },
            "pie"
        );

        createChart(
            barPositionsRef,
            "bar",
            {
                labels: [
                    "ผู้อำนวยการส่วนฯ", "หัวหน้าฝ่ายประมวลฯ", "หัวหน้าฝ่ายติดตามฯ",
                    "วิศวกรฯ ชำนาญการ", "วิศวกรฯ ปฏิบัติการ", "วิศวกรชลประทาน",
                    "เจ้าหน้าที่บันทึกข้อมูล", "นักประชาสัมพันธ์", "นายช่างไฟฟ้าสื่อสาร",
                    "วิศวกรคอมฯ", "นักจัดการงานทั่วไป", "วิศวกรไฟฟ้า", "เจ้าพนักงานธุรการ",
                    "พนักงานทั่วไป"
                ],
                datasets: [{ label: "จำนวนบุคลากร", data: [1, 1, 1, 6, 7, 16, 1, 1, 2, 1, 21, 1, 2, 2], backgroundColor: "#2d72b5" }],
            },
            { indexAxis: "y", responsive: true, plugins: { legend: { display: false } } },
            "barPositions"
        );

        createChart(
            barAgeRef,
            "bar",
            {
                labels: ["28", "31", "32", "33", "34", "36", "37", "38", "39", "40", "43", "44", "45", "46", "50", "51", "52", "55", "57"],
                datasets: [{ label: "จำนวนบุคลากร", data: [1, 6, 2, 3, 11, 5, 6, 1, 2, 1, 2, 5, 6, 3, 1, 1, 4, 1, 2], backgroundColor: "#2d72b5" }],
            },
            { indexAxis: "y", responsive: true, plugins: { legend: { display: false } } },
            "barAge"
        );

        createChart(
            barCategoryRef,
            "bar",
            {
                labels: ["ข้าราชการ", "พนักงานราชการ", "ลูกจ้าง"],
                datasets: [{ label: "จำนวนบุคลากร", data: [16, 21, 26], backgroundColor: "#2d72b5" }],
            },
            { responsive: true, plugins: { legend: { display: false } } },
            "barCategory"
        );

        return () => {
            Object.keys(chartRefs).forEach((key) => {
                chartRefs[key]?.destroy();
                chartRefs[key] = null;
            });
        };
    }, []);

    return (
        <div className="w-full px-4 py-6 flex flex-col items-center">
            <h2 className="text-xl font-regular mb-12 text-center text-gray-900 dark:text-white">
                แผนภูมิจำนวนเจ้าหน้าที่
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1200px]">
                <div className="bg-white dark:bg-neutral-800 p-3 shadow-md rounded-lg flex flex-col items-center">
                    <h5 className="text-sm font-regular mb-2 text-center text-gray-900 dark:text-white">
                        แผนภูมิแสดงจำนวนบุคลากร
                    </h5>
                    <canvas ref={pieRef} className="w-full max-w-[300px] aspect-square"></canvas>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-3 shadow-md rounded-lg flex flex-col items-center">
                    <h5 className="text-sm font-regular mb-2 text-center text-gray-900 dark:text-white">
                        แผนภูมิแสดงบุคลากรตามประเภท
                    </h5>
                    <canvas ref={barCategoryRef} className="w-full max-w-[400px] aspect-[2]"></canvas>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-3 shadow-md rounded-lg flex flex-col items-center">
                    <h5 className="text-sm font-regular mb-2 text-center text-gray-900 dark:text-white">
                        แผนภูมิแสดงจำนวนบุคลากรในแต่ละตำแหน่ง
                    </h5>
                    <canvas ref={barPositionsRef} className="w-full max-w-[500px] aspect-[2.5]"></canvas>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-3 shadow-md rounded-lg flex flex-col items-center">
                    <h5 className="text-sm font-regular mb-2 text-center text-gray-900 dark:text-white">
                        แผนภูมิแสดงจำนวนบุคลากรตามอายุ
                    </h5>
                    <canvas ref={barAgeRef} className="w-full max-w-[500px] aspect-[2.5]"></canvas>
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
