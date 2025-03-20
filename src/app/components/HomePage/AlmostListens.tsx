"use client"

import { useEffect, useState } from "react";
import { SongItem } from "../SongItem/SongItem";
import { Title } from "../Title/Title";
import { get, ref } from "firebase/database";
import { db } from "@/app/firebaseConfig";

export const AlmostListens = () => {
    const [dataFinal, setDataFinal] = useState<any[]>([]);
    const dataSection1: any[] = [];


    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(db, 'songs'));
            snapshot.forEach((item: any) => {
                const key = item.key;
                const data = item.val();
                if (dataSection1.length < 3) {
                    dataSection1.push({
                        id: key,
                        img: data.image,
                        name: data.title,
                        authors: data.title,
                        listens: data.listen,
                        link: `/songs/${key}`,
                        audio: data.audio,
                        wishlist: data.wishlist,
                        singerId: data.singerId
                    });
                }
            })
            for (const item of dataSection1) {
                const itemSinger = await get(ref(db, '/singers/' + item.singerId[0]));
                const dataSinger = itemSinger.val();
                item.authors = dataSinger.title;
            }
            setDataFinal(dataSection1);
        }
        fetchData();
    }, []);

    return (
        <>
            <Title text={"Nghe Nhiều"} />
            <div className="grid grid-cols-1 gap-[8px] xl:gap-[12px]">
                {
                    dataFinal && dataFinal.map((item: any, index: any) => (
                        <SongItem key={index} item={item} />
                    ))
                }
            </div>
        </>
    );
}