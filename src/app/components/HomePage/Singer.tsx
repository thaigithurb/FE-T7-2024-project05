"use client"

import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "@/app/firebaseConfig";
import { CartItem } from "../CartItem/CartItem";

export const Singers = () => {
    const [dataFinal, setDataFinal] = useState<any[]>([]);
    const dataSection1: any[] = [];


    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(db, 'singers'));
            snapshot.forEach((item: any) => {
                const key = item.key;
                const data = item.val();
                if (dataSection1.length < 5) {
                    dataSection1.push({
                        id: key,
                        img: data.image,
                        name: data.title,
                        description: data.description,
                        link: `/singers/${key}`,
                    });
                }
            })
            setDataFinal(dataSection1);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[20px]">
                {
                    dataFinal && dataFinal.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))
                }
            </div>
        </>
    );
}