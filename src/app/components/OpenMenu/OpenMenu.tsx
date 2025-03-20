"use client"

import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { FaMusic } from "react-icons/fa6";
import Image from "next/image";
import Singer from "/public/Frame.svg";
import { FaHeart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { auth } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { CiMenuBurger } from "react-icons/ci";
import { MenuItem } from "../Sider/MenuItem";



export const OpenMenu = () => {


    const [isLogin, setIsLogin] = useState<boolean>();
    const [isOpen, setIsOpen] = useState<any>(false);
    const menuRef = useRef<HTMLDivElement>(null);

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
            link: "/categories",
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

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    return (
        <>
            <div className="flex items-center justify-between md:hidden">
                <div onClick={handleOpenMenu}>
                    <CiMenuBurger className="text-white text-[20px] cursor-pointer" />
                </div>
                <Link href="/" className="flex items-center gap-[12px]">
                    <div className="text-color2 lg:text-[16px] text-[18px] md:font-[auto] font-[600]">Sportfreefire</div>
                    <img
                        className="lg:h-[42px] h-[35px]"
                        src="/logo.svg"
                        alt="logo"
                    />
                </Link>
            </div>
            {
                isOpen &&
                <div
                    ref={menuRef}
                    className="md:hidden text-[50px] font-[700] z-50 text-white px-[20px] absolute w-fit p-[10px] rounded-[12px] bg-[#212121]"
                    style={{ boxShadow: '0 4px 6px -1px rgba(255, 250, 250, 0.05), 0 2px 4px -1px rgba(255, 250, 250, 0.06)' }}
                >
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
            }
        </>
    );
}