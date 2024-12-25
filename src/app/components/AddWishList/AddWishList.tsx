"use client"

import { auth, db } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { SongItem1 } from "../SongItem/SongItem1/SongItem1";

export const AddWishList = () => {

    const [dataFinal, setDataFinal] = useState<any[]>([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userId = user.uid;
                const dataSection1: any[] = [];

                const fetchData = async () => {
                    const snapshot = await get(ref(db, 'songs'));
                    snapshot.forEach((item: any) => {
                        const key = item.key;
                        const data = item.val();
                        if (data.wishlist && data.wishlist[userId]) {
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
            }
        });
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