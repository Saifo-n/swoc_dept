"use client";

import React from "react";
import Image from "next/image";
import SectionCover from "../(common)/sectioncover";
import ChartComponent from "../(common)/chart";

interface Personnel {
  name: string;
  position: string;
  image: string;
}

const PersonnelCard = ({ person }: { person: Personnel }) => (
  <div className="flex flex-col items-center bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border dark:border-gray-700 w-[200px] hover:shadow-lg transition-shadow duration-300">
    <div className="w-24 h-24 rounded-full overflow-hidden border shadow-sm relative">
      <Image src={person.image} alt={person.name} fill className="object-cover" />
    </div>
    <h5 className="text-sm font-medium mt-3 text-center text-gray-900 dark:text-gray-200">{person.name}</h5>
    <p className="text-gray-600 dark:text-gray-400 text-xs text-center">{person.position}</p>
  </div>
);

const DepartmentSection = ({ title, members }: { title: string; members: Personnel[] }) => (
  <div className="flex flex-col items-center w-full">
    <h4 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-6">{title}</h4>
    <div className="flex flex-wrap justify-center gap-6">
      {members.map((person) => (
        <PersonnelCard key={person.name} person={person} />
      ))}
    </div>
  </div>
);

const personnelData: Record<string, Personnel[]> = {
  วิศวกรรม: [
    { name: "เกศกนก มีเรือง", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__1054193.jpg" },
    { name: "ชาคริต อินทนันชัย", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__3993684.jpg" },
    { name: "ณัฐกานต์ กาญจนกำเนิด", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__8450200.jpg" },
    { name: "ธนพล ขุดปิ่น", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__4761596.jpg" },
    { name: "พรทิวา ปาเปี้ยม", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__3900390.jpg" },
    { name: "วงศ์วรัณ เชยสุวรรณ", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__3339891.jpg" },
    { name: "ศิริวัฒน์ ศรีเลย", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__8952437.jpg" },
    { name: "ศุภาพิชญ์ ปีกรอด", position: "วิศวกรชลประทาน", image: "/upload/personnel/S__8222066.jpg" },
    { name: "ศิรญา สังข์ทอง", position: "วิศวกรชลประทานปฏิบัติการ", image: "/upload/personnel/S__9944228.jpg" }
  ],
  จัดการทั่วไป: [
    { name: "นภาภรณ์ ตรียะประเสริฐพร", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__9531430.jpg" },
    { name: "ณัฐธิดา ปลื้มชิงชัย", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__8525443.jpg" },
    { name: "เดชา บุญวาสนา", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__1555628.jpg" },
    { name: "ธนภรณ์ เล็กวุฒิกานต์", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__6375162.jpg" },
    { name: "ธนาวรรณ รางเริ่ม", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__5641783.jpg" },
    { name: "นันทรียา กาหล", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__4981907.jpg" },
    { name: "ปิยะมาศ ทัศนา", position: "นักจัดการงานทั่วไป", image: "/upload/personnel/S__5010652.jpg" },
    { name: "ปิยาภรณ์ คำกลาง", position: "พนักงานทั่วไป", image: "/upload/personnel/S__5827347.jpg" },
    { name: "สุกานดา ไตรวารี", position: "เจ้าพนักงานราชการ", image: "/upload/personnel/S__6122288.jpg" },
  ],

};

export default function Page() {
  return (
    <>
      <SectionCover title="เกี่ยวกับเรา" />

      <section className="w-full dark:bg-neutral-900 py-12 px-4 transition-all duration-300">
        <div className="container max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-300">ผังบุคลากร</h2>
            <p className="text-xl font-light text-gray-700 dark:text-gray-400">ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ</p>
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-400 shadow-lg">
              <Image
                src="/upload/personnel/S__46358564.jpg"
                alt="Leader"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-200">นายวชิระ สุรินทร์</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">หัวหน้าฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ</p>
          </div>

          <div className="flex flex-col items-center gap-12 justify-center">
            {Object.entries(personnelData).map(([department, members]) => (
              <DepartmentSection key={department} title={department} members={members} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-16">
            {Object.entries({
              ประชาสัมพันธ์: [
                { name: "ชนนิกานต์ งามสง่า", position: "ประชาสัมพันธ์", image: "/upload/personnel/S__1850209.jpg" },
                { name: "ปาลิดา ภาวโรจน์", position: "ประชาสัมพันธ์", image: "/upload/personnel/S__3718172.jpg" },
              ],
              ไฟฟ้าสื่อสาร: [
                { name: "บุตรไตร กาลาม", position: "ไฟฟ้าสื่อสาร", image: "/upload/personnel/S__3643474.jpg" },
                { name: "อนุรักษ์ เทศเขียว", position: "ไฟฟ้าสื่อสาร", image: "/upload/personnel/S__7022986.jpg" },
              ],
            }).map(([department, members]) => (
              <DepartmentSection key={department} title={department} members={members} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 place-items-center mt-16">
            {Object.entries({
              วิชาการคอมพิวเตอร์: [
                { name: "กิตติคุณ ทาคำ", position: "วิชาการคอมพิวเตอร์", image: "/upload/personnel/S__8991905.jpg" },
              ],
              วิศวกรไฟฟ้า: [
                { name: "ณภัทรศรัณย์ ศรีอ่อน", position: "วิศวกรไฟฟ้า", image: "/upload/personnel/S__3206943.jpg" },
              ],
              บันทึกข้อมูล: [
                { name: "นลินภัสร์ ปิยะวัชรเรืองกุล", position: "บันทึกข้อมูล", image: "/upload/personnel/S__1753026.jpg" },
              ],
              ธุรการ: [
                { name: "กาญจนาภรณ์ ด้วงโสน", position: "เจ้าพนักงานธุรการ", image: "/upload/personnel/S__7133819.jpg" },
              ],
            }).map(([department, members]) => (
              <DepartmentSection key={department} title={department} members={members} />
            ))}
          </div>

          <div className="mt-12">
            <ChartComponent />
          </div>
        </div>
      </section>
    </>
  );
}
