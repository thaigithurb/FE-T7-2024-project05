import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";
import { SingersSection } from "./SingersSection";

export const metadata: Metadata = {
    title: "Danh sách ca sĩ",
    description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Singers() {

    return (
        <>
            <div>
                <Title text={"Danh Sách Ca Sĩ"} />
                <SingersSection />
            </div>
        </>
    );
}
