"use client";

export default function WaterStatusPage() {
  return (
    <div className="w-full h-full bg-gray-100 flex py-6 flex-col justify-center items-center dark:bg-neutral-900">
<div className="container max-w-none w-full px-0 md:px-4 lg:px-8">
<div className="grid grid-cols-1 gap-6">
          
          <div className="w-full">
            <iframe
              src="https://swoc.rid.go.th/index1.html"
              className="w-full h-[340px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg shadow-lg"
              frameBorder="0"
              title="ปริมาณน้ำ"
            ></iframe>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.rid.go.th/water/gauges/"
              className="w-full h-[290px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg shadow-lg"
              frameBorder="0"
              title="กราฟปริมาณน้ำในเขื่อน"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
