"use client";

import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { FaMusic } from "react-icons/fa6";
import Image from "next/image";
import Singer from "/public/Frame.svg";
import { FaHeart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MenuItem } from "./MenuItem";
import { useEffect, useState } from "react";
import { auth } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const Sider = () => {

    const [ isLogin, setIsLogin ] = useState<boolean>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        });
    }, []);


    const menu = [
        {
            icon: <TiHome />,
            title: "Trang chủ",
            link: "/"
        },
        {
            icon: <FaMusic />,
            title: "Danh mục bài hát",
            link: "/categories"
        },
        {
            icon: <Image src={Singer} alt="Ca sĩ" />,
            title: "Ca sĩ",
            link: "/singers"
        },
        {
            icon: <FaHeart />,
            title: "Bài hát yêu thích",
            link: "/wishlist",
            isLogin: true
        },
        {
            icon: <TbLogout />,
            title: "Đăng xuất",
            link: "/logout",
            isLogin: true
        },
        {
            icon: <BsFillPersonFill />,
            title: "Đăng nhập",
            link: "/login",
            isLogin: false
        },
        {
            icon: <MdPersonAddAlt1 />,
            title: "Đăng ký",
            link: "/register",
            isLogin: false
        }
    ];


    return (
        <>
            <div className=" bg-color3 h-[100vh] w-[200px] lg:w-[280px] fixed">
                <div className="text-white text-[24px] font-[700] pl-[20px] py-[25px] bg-[#1C1C1C]">
                    <Link href="/" className="flex items-center gap-[12px]">
                        <img
                            className="lg:h-[42px] h-[35px]"
                            src="/logo.svg"
                            alt="logo"
                        />
                        <div className="text-color2 lg:text-[16px] text-[18px]">Sportfreefire</div>
                    </Link>
                </div>
                <div className="text-[50px] font-[700] text-white px-[20px] mt-[30px] ">
                    <ul className="flex flex-col gap-[20px] lg:gap-[30px]">
                        {menu.map((item, index) => (
                            <MenuItem 
                                item={item} 
                                key={index} 
                                isLogin={isLogin}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}