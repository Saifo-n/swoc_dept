"use client";

import Image from "next/image";

const VisionSection = () => {
  return (
    <section id="main-Vision" className="py-12 dark:bg-neutral-900 w-screen">
      <div className="max-w-none mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 px-4 lg:px-12">
            <div className="mb-6">
              <h5 className="text-2xl font-semibold">ฝ่ายประมวลวิเคราะห์สถานการณ์น้ำ</h5>
              <h1 className="text-4xl lg:text-5xl font-bold mt-3">วิสัยทัศน์ผู้บริหาร</h1>
              <p className="text-lg mt-3">
                ในศตวรรษที่ 21 โลกที่เราอาศัยอยู่มีการเปลี่ยนแปลงในทุกมิติ ในเวลาเดียวกัน
                เราก็กำลังเผชิญกับสภาพภูมิอากาศที่แปรปรวนทั่วโลก
                จากปัญหาน้ำท่วมและน้ำแล้งที่มีความถี่เพิ่มขึ้น
                สะท้อนว่าการบริหารจัดการน้ำถือว่าเป็นวาระสำคัญระดับชาติอีกเรื่องหนึ่งที่ไม่ควรมองข้าม
                และควรทำการประเมินความเสี่ยงวิกฤตได้ล่วงหน้า เพื่อลดความเสียหายลงได้
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { img: "01.jpg", title: "สถานการณ์น้ำรายวัน", link: "http://water.rid.go.th/flood/flood/daily.pdf" },
                { img: "02.jpg", title: "สถานการณ์น้ำรายสัปดาห์", link: "http://water.rid.go.th/flood/flood/weekreportnew.pdf" },
                { img: "03.jpg", title: "ปริมาณน้ำในอ่าง/เขื่อน", link: "https://app.rid.go.th/reservoir/" },
                { img: "04.jpg", title: "ศูนย์ปฏิบัติการน้ำอัจฉริยะ", link: "http://wmsc.rid.go.th/" },
                { img: "05.jpg", title: "คาดการณ์น้ำท่า", link: "http://water.rid.go.th/itcwater/utok/index.html" },
                { img: "06.jpg", title: "ปริมาณน้ำท่า/ผังน้ำ", link: "https://www.rid.go.th/index.php/th/runoff" },
                { img: "07.jpg", title: "Pasak Radar X-band", link: "https://d1w7fjk53onr5q.cloudfront.net/?param=202409111145" },
                { img: "08.jpg", title: "โทรมาตรเพื่อการพยากรณ์น้ำ", link: "https://telerid.rid.go.th/" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group relative"
                >
                  <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition duration-300">
                    <Image
                      src={`/images/rid-water-icon/${item.img}`}
                      alt={item.title}
                      width={90}
                      height={90}
                      className="rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-700 group-hover:text-blue-500 transition duration-300 dark:text-white">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:col-span-1 px-4 lg:px-12">
            <Image
              src="/upload/S__46358564.jpg"
              alt="บุคลากร"
              width={600}
              height={500}
              unoptimized
              className="rounded-lg shadow-lg w-full"
            />

            <div className="mt-4 text-center">
              <h4 className="font-bold text-xl mt-2">นาย วชิระ สุรินทร์</h4>
              <h5 className="mt-1">หัวหน้าฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
