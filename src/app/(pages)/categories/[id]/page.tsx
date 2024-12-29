import { Metadata } from "next";
import { Category } from "./Category";



export const metadata: Metadata = {
  title: "Danh mục",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default async function CategoryDetail(props: any) {

  const { id } = await props.params;
  
  return (
    <>
      <Category id={id} />
    </>
  );
}
