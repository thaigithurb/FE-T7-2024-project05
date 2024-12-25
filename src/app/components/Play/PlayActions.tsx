"use client"

import { FaPlay } from "react-icons/fa";
import { FaForwardStep, FaPause } from "react-icons/fa6";
import { FaStepBackward } from "react-icons/fa";

export const PlayActions = () => {

    const togglePlay = () => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementInnerPlayButton = elementPlayAudio?.querySelector(".inner-play-button");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");

        if (elementInnerPlayButton.classList.contains("play")) {
            elementInnerPlayButton.classList.remove("play");
            elementAudio.pause();
        }
        else {
            elementInnerPlayButton.classList.add("play");
            elementAudio.play();
        }

    }

    // bấm space để dừng bài hoặc tiếp tục
    const handleKeyPress = (event: any) => {
        if (event.code === 'Space' && 
            !(event.target.tagName === 'INPUT' || 
              event.target.tagName === 'TEXTAREA')) {
            event.preventDefault();
            togglePlay();
        }
    };

    const handleNext = () => {
        const curSong = document.querySelector("[song-id].active");
        if (curSong) {
            const nextSong = curSong.nextElementSibling;
            if (nextSong) {
                const elementButton: any = nextSong.querySelector(".inner-play-button");
                elementButton.click();
            }
        }
    }

    const handlePrevious = () => {
        const curSong = document.querySelector("[song-id].active");
        if (curSong) {
            const previousSong = curSong.previousElementSibling;
            if (previousSong) {
                const elementButton: any = previousSong.querySelector(".inner-play-button");
                elementButton.click();
            }
        }
    }

    return (
        <>
            <div 
                className="flex items-center justify-center gap-[42px] outline-none"
                tabIndex={0} 
                onKeyDown={handleKeyPress}
            >
                <div 
                    className="text-white cursor-pointer"
                    onClick={handlePrevious}
                >
                    <FaStepBackward 
                        
                    />
                </div>
                <div
                    className="bg-color2 rounded-[50px] w-[32px] h-[32px] text-white flex justify-center items-center text-[14px] cursor-pointer inner-play-button"
                    onClick={togglePlay}
                >
                    <FaPlay className="button-icon-play" />
                    <FaPause className="button-icon-pause" />
                </div>
                <div 
                    className="text-white cursor-pointer"
                    onClick={handleNext}
                >
                    <FaForwardStep />
                </div>
            </div>
        </>
    );
}