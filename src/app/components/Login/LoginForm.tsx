"use client"

import { auth } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export const LoginForm = () => {

    const router = useRouter();

    const handleLogin = (event: any) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    router.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }

    return (
        <>
            <form
                className="w-[95%] sm:w-[500px] sm:p-0 p-[10px]"
                onSubmit={handleLogin}
            >
                <div className="mb-[15px]">
                    <label
                        htmlFor="email"
                        className="text-[14px] font-[600] text-white mb-[5px] flex gap-[8px]"
                    >
                        Email
                        <div className="text-[#F21D2F] font-[600] text-[14px]">
                            *
                        </div>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ví dụ: levana@gmail.com"
                        className="w-full outline-none h-[50px] rounded-[6px] py-[14px] px-[16px] placeholder:font-[600] text-[14px]"
                    />
                </div>
                <div className="mb-[15px]">
                    <label
                        htmlFor="password"
                        className="text-[14px] font-[600] text-white mb-[5px] flex gap-[8px]"
                    >
                        Mật Khẩu
                        <div className="text-[#F21D2F] font-[600] text-[14px]">
                            *
                        </div>
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full outline-none h-[50px] rounded-[6px] py-[14px] px-[16px]"
                    />
                </div>
                <button className="w-full bg-color2 text-white font-[700] text-[16px] h-[50px] rounded-[6px]">
                    Đăng Nhập
                </button>
            </form>
        </>
    );
}