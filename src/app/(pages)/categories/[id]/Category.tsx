"use client"

import { CartInfo } from "@/app/components/CartItem/CartInfo/CartInfo";
import { SongItem1 } from "@/app/components/SongItem/SongItem1/SongItem1";
import { Title } from "@/app/components/Title/Title";
import { db } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const Category = (props: any) => {

    const { id } = props;
    const [dataTemp, setDataTemp] = useState<any>(null);
    const [dataFinal, setDataFinal] = useState<any[]>([]);
    useEffect(() => {
        const fetchDataTemp = async () => {
            const songSnapshot = await get(ref(db, '/categories/' + id));
            const songData = songSnapshot.val();
            setDataTemp(songData);
        };
        fetchDataTemp();
    }, []);

    useEffect(() => {
        const dataSection1: any[] = [];

        const fetchData = async () => {
            const snapshot = await get(ref(db, 'songs'));
            snapshot.forEach((item: any) => {
                const key = item.key;
                const data = item.val();
                if (data.categoryId === id) {
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
            <CartInfo item={{
                img: dataTemp?.image,
                name: dataTemp?.title,
                text: dataTemp?.description,
            }} />
            <div>
                <Title text={"Danh Sách Bài Hát"} />
                <div className="grid grid-cols-1 gap-[10px]">
                    {dataFinal && dataFinal.map((item, index) => (
                        <SongItem1 item={item} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}