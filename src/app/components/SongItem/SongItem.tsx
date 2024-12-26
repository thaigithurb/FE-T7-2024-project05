"use client"

import Link from "next/link";
import { PlayButton } from "../Button/PlayButton";
import { Add } from "../Button/Add";



export const SongItem = (props: {item: any}) => {

    const { item } = props;

    return (
        <>
            <div className="flex bg-color3 rounded-[15px] p-[10px] items-center" song-id={item.id}>
                <Link href={item.link} className="flex flex-1">
                    <div className="w-[76px] aspect-square object-cover">
                        <img
                            className="w-full rounded-[10px]"
                            src={item.img}
                            alt={item.name}
                        />
                    </div>
                    <div className="flex-1 ml-[10px]">
                        <div className="flex flex-col gap-[5px]">
                            <div className="text-white font-[600] text-[16px]">
                                {item.name}
                            </div>
                            <div className="text-[#FFFFFF80] font-[400] text-[12px]">
                                {item.authors}
                            </div>
                            <div className="text-white font-[400] text-[12px]">
                                {item.listens.toLocaleString()}
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="flex gap-[10px] ml-[10px]">
                    <div className="flex">
                        <PlayButton
                            item={item}
                            className="rounded-[50%] w-[34px] h-[34px] flex justify-center items-center text-[13px] text-white border-[1px] border-color-[#FFFFFF] cursor-pointer inner-play-button"
                        />
                        <Add
                            item={item}
                            className="rounded-[50%] w-[34px] h-[34px] flex justify-center items-center text-[18px] text-white border-[1px] border-color-[#FFFFFF] cursor-pointer heart"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}