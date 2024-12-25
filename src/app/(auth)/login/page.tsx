import { LoginForm } from "@/app/components/Login/LoginForm";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Login() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <Title text={"Đăng Nhập Tài Khoản"} />
                </div>
                <LoginForm />
            </div>
        </>
    );
}
