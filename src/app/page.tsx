import type { Metadata } from "next";
import { Title } from "./components/Title/Title";
import { AlmostListens } from "./components/HomePage/AlmostListens";
import { Category } from "./components/HomePage/Category";
import { Singers } from "./components/HomePage/Singer";


export const metadata: Metadata = {
  title: "Sportfreefire",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Home() {

  return (
    <>
      {/* section 1 (banner và mục nghe nhiều) */}
      <div className="xl:flex items-start gap-[20px]">
        <div className="w-full xl:w-[534px] mb-[20px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/bg-1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img
                src="/person-1.png"
                alt="Nhạc EDM"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
    
        <div>
          <AlmostListens />
        </div>
      </div>

      {/* section2 (Danh mục nổi bật) */}
      <div className="mt-[30px]">
        <Title text={"Danh Mục Nổi Bật"} />
        <Category />
      </div>

      {/* section 3 (ca sĩ nổi bật) */}
      <div className="mt-[30px]">
        <Title text={"Ca Sĩ Nổi Bật"} />
        <Singers />
      </div>
    </>
  );
}
