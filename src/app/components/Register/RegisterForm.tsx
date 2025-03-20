"use client"

import { auth, db } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {

    const router = useRouter();

    // đăng kí
    const handleRegister = (event: any) => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (fullName && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential: any) => {
                    const user = userCredential.user;
                    if (user) {
                        set(ref(db, 'user/' + user.uid), {
                            fullName: fullName,
                            email: email,
                            password: password
                        })
                        .then(() => {
                            router.push("/");
                        })
                    }
                })
                .catch((error: any) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }

    return (
        <>
            <form
                className="w-[95%] sm:w-[500px] sm:p-0 p-[10px]"
                onSubmit={handleRegister}
            >
                <div className="mb-[15px]">
                    <label
                        htmlFor="fullName"
                        className="text-[14px] font-[600] text-white mb-[5px] flex gap-[8px]"
                    >
                        Họ Tên
                        <div className="text-[#F21D2F] font-[600] text-[14px]">
                            *
                        </div>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Ví dụ: Lê Văn A"
                        className="w-full outline-none h-[50px] rounded-[6px] py-[14px] px-[16px] placeholder:font-[600] text-[14px]"
                    />
                </div>
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
                    Đăng Kí
                </button>
            </form>
        </>
    );
}