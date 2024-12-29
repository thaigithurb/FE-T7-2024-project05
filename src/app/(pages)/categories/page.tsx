import { Title } from "@/app/components/Title/Title";
import type { Metadata } from "next";
import { CategoriesSection } from "./CategoriesSection";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Categories() {
  return (
    <>
      <div>
        <Title text={"Danh Mục Bài Hát"} />
        <CategoriesSection/>
      </div>
    </>
  );
}
