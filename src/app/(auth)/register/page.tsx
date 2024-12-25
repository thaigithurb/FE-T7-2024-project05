import { RegisterForm } from "@/app/components/Register/RegisterForm";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng ký",
    description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Register() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <Title text={"Đăng Kí Tài Khoản"} />
                </div>
                <RegisterForm />
            </div>
        </>
    );
}
