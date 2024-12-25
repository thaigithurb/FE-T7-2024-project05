"use client"

import { FaVolumeHigh } from "react-icons/fa6";

export const PlayVolume = () => {

    const handleChange = (event: any) => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementCurVolume = elementPlayAudio.querySelector(".inner-current-volume");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        if (elementPlayAudio) {
            const volumeTarget = event.target;
            const value = volumeTarget.value;
            elementAudio.volume = value / 100;
            elementCurVolume.style.width = `${value}%`
        }
    }

    return (
        <>
            <div className="flex gap-[6px] items-center justify-end">
                <div className="text-white text-[20px] relative top-[4px]">
                    <FaVolumeHigh />
                </div>
                <div className="relative play-audio-volume">
                    <div className="bg-color2 rounded-[50px] h-[4px] w-[100%] top-[14px] absolute left-0 inner-current-volume"></div>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={100}
                        className="w-full h-[4px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total-volume outline-none"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}