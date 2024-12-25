"use client"

import { PlayButton } from "../../Button/PlayButton";
import Link from "next/link";
import { Add } from "../../Button/Add";

export const SongItem1 = (props: {item: any}) => {
    const { img, name, authors, duration, link } = props.item;
    return (
        <>
            <div className="flex items-center justify-between bg-color3 rounded-[15px] px-[18px] py-[10px]">
                <audio className="hidden inner-audio">
                    <source src="/" />
                </audio>
                <div className="flex items-center gap-[12px] w-[35%]">
                    <PlayButton 
                        item={props.item}
                        className="text-white cursor-pointer"
                    />
                    <Link href={link} className="aspect-square object-cover w-[42px]">
                        <img
                            src={img}
                            alt={name}
                            className="w-[100%] object-cover rounded-[8px]"
                        />
                    </Link>
                    <Link href={link} className="font-[700] text-[14px] text-white">
                        {name}
                    </Link>
                </div>
                <div className="w-[50%] font-[400] text-[14px] text-white text-center">
                    {authors}
                </div>
                <div className="flex gap-[18px] items-center justify-end">
                    <div className="font-[400] text-[14px] text-white">
                        {duration}
                    </div>
                    <div className={`text-[20px] text-white`}>
                        <Add 
                            className={`cursor-pointer`}
                            item={props.item}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}