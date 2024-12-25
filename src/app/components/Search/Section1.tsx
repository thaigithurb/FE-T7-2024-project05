"use client"
import { SongItem1 } from "@/app/components/SongItem/SongItem1/SongItem1";
import { db } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Section1 = () => {

    const searchParams = useSearchParams();
    const [dataFinal, setDataFinal] = useState<any>(null);

    const defaultKeyword = searchParams.get("keyword") || "";
    console.log(defaultKeyword);

    useEffect(() => {
        const dataSection1: any[] = [];

        const fetchData = async () => {
            const snapshot = await get(ref(db, 'songs'));
            snapshot.forEach((item: any) => {
                const key = item.key;
                const data = item.val();

                if (data.title.includes(defaultKeyword)) {
                    dataSection1.push({
                        id: key,
                        img: data.image,
                        name: data.title,
                        authors: "",
                        link: `/songs/${key}`,
                        duration: "4:32",
                        singerId: data.singerId,
                        audio: data.audio
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
    }, [defaultKeyword])


    return (
        <>
            {dataFinal &&
                dataFinal.map((item: any, index: any) => (
                    <SongItem1 key={index} item={item} />
                ))
            }

        </>
    );
}