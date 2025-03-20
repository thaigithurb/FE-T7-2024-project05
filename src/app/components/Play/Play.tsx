"use client"


import { PlayInfo } from "./PlayInfo";
import { PlayActions } from "./PlayActions";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";
import { useRouter } from "next/navigation";

export const Play = (props: any) => {

    const router = useRouter();
    const { item } = props;

    const handleClick = () => {
        router.push(`/songs/${item.id}`);
    }

    return (
        <>
            <div className="bg-color3 border-[#494949] border-t fixed bottom-0 w-full z-[999] play-audio hidden justify-center">
                <audio className="hidden inner-audio">
                    <source src="/" />
                </audio>
                <div className="md:container px-[10px] md:px-0 md:mx-[auto] pt-[12px] md:pt-[22px] pb-[8px] md:pb-[20px]">
                    <div className="flex items-center">
                        <PlayInfo />
                        <div className="flex-1 justify-center lg:m-0 mx-[10px]">
                            <PlayActions />
                            <PlayTime />
                        </div>
                        <div className="w-[20%] ml-[10px] md:m-0">
                            <PlayVolume />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}