import { AddWishList } from "@/app/components/AddWishList/AddWishList";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function WishList() {
    return (
        <>
            <Title text={"Bài Hát Yêu Thích"} />
            <AddWishList/>
        </>
    );
}
