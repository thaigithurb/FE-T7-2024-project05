"use client"

import { SongItem1 } from "@/app/components/SongItem/SongItem1/SongItem1";
import { db } from "@/app/firebaseConfig";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const SongSection = (props: any) => {

    const { id } = props;
    const [dataFinal, setDataFinal] = useState<any[]>([]);

    useEffect(() => {
        const dataSection1: any[] = [];

        const fetchData = async () => {
            const snapshot = await get(ref(db, 'songs'));
            snapshot.forEach((item: any) => {
                const key = item.key;
                const data = item.val();
                // if (data.categoryId === dataFinal.categoryId && key !== id) {

                    dataSection1.push({
                        id: key,
                        img: data.image,
                        name: data.title,
                        authors: "",
                        link: `/songs/${key}`,
                        duration: "4:32",
                        singerId: data.singerId,
                        audio: data.audio,
                        wishlist: data.wishlist
                    });
                    // }

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
            <div className="grid grid-cols-1 gap-[10px]">
                {dataFinal && dataFinal.map((item, index) =>
                    <SongItem1 item={item} key={index} />
                )}
            </div>
        </>
    );
}