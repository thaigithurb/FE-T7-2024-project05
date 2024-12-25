import { Section1 } from "@/app/components/Search/Section1";
import { Title } from "@/app/components/Title/Title";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Search() {

  return (
    <>
      <div>
        <Title text={"Kết Quả Tìm Kiếm"} />
        <div className="grid grid-cols-1 gap-[10px]">
          <Section1 />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
