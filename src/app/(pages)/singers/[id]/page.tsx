import { Metadata } from "next";
import { Singer } from "./Singer";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default async function SingerDetail(props: any) {


  const { id } = await props.params;

  return (
    <>
      <Singer id={id} />
    </>
  );
}
