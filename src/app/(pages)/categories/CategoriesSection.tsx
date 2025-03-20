"use client"

import { db } from "@/app/firebaseConfig";
import { get, onValue, ref } from "firebase/database";
import { CartItem } from "@/app/components/CartItem/CartItem";
import { useEffect, useState } from "react";

export const CategoriesSection = () => {

    const [dataFinal, setDataFinal] = useState<any[]>([]);
    const dataSection1: any[] = [];


    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(db, 'categories'));
            snapshot.forEach((item: any) => {
                const key = item.key;
                const data = item.val();
                dataSection1.push({
                    id: key,
                    img: data.image,
                    name: data.title,
                    description: data.description,
                    link: `/categories/${key}`,
                });

            })
            setDataFinal(dataSection1);
        }
        fetchData();
    }, []);


    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[20px]">
                {dataFinal && dataFinal.map((item: any, index: any) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
        </>
    );
}