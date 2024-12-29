import { CartInfo } from "@/app/components/CartItem/CartInfo/CartInfo";
import { SongItem1 } from "@/app/components/SongItem/SongItem1/SongItem1";
import { Title } from "@/app/components/Title/Title";
import { db } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Metadata } from "next";
import { SongSection } from "../SongSection";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default async function SongDetail(props: any) {

  const { id } = await props.params;

  return (
    <>
      <SongSection id={id} />
    </>
  );
}
