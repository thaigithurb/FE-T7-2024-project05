"use client"

import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";

export const PlayButton = (props: any) => {

    const { item, className } = props;

    const audio = item.audio

    const handlePlay = () => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        const elementAudioSource = elementAudio?.querySelector("source");

        if (elementPlayAudio) {

            // phát nhạc
            if (elementAudioSource) {
                elementAudioSource.src = audio;
            }
            if (elementAudio) {
                elementAudio.load();
                elementAudio.play();
            }

            // Ẩn hiện khối play
            elementPlayAudio.classList.remove("hidden");

            // hiển thị data
            const elementImage = elementPlayAudio?.querySelector(".inner-img");
            elementImage.src = item.img;
            const elementTitle = elementPlayAudio?.querySelector(".inner-title");
            elementTitle.innerHTML = item.name;
            const elementAuthors = elementPlayAudio?.querySelector(".inner-authors");
            elementAuthors.innerHTML = item.authors;
            const elementLink = elementPlayAudio?.querySelector(".inner-link");
            if (elementLink) {
                elementLink.href = `/songs/${item.id}`;
            }
            
           

            // xử lí nút pause và play
            const elementInnerPlayButton = elementPlayAudio.querySelector(".inner-play-button");

            if (elementInnerPlayButton) {
                elementInnerPlayButton.classList.add("play");
            }

            // xử lí tua 
            elementAudio.onloadedmetadata = () => {
                const totalTime = elementAudio.duration;
                const elementAudioTotalTime = elementPlayAudio.querySelector(".inner-audio-total-time");
                elementAudioTotalTime.max = totalTime;

                elementAudio.ontimeupdate = () => {
                    const curTime = elementAudio.currentTime;
                    const elementAudioCurTime = elementPlayAudio.querySelector(".inner-audio-current-time");
                    const percent = curTime * 100 / totalTime;
                    elementAudioCurTime.style.width = `${percent}%`;
                    elementAudioTotalTime.value = curTime;
                }
            }
            
            // xóa active thừa
            const elementSong1 = document.querySelector("[song-id].active");
            if (elementSong1) {
                elementSong1.classList.remove("active");
            }

            // active phần tử đang focus
            const elementSong = document.querySelector(`[song-id="${item.id}"]`);
            if (elementSong) {
                elementSong.classList.add("active");
            }
        }
    }

    return (
        <>
            <div
                className={className}
                onClick={handlePlay}
            >
                <FaPlay className="button-play" />
            </div>
        </>
    );
}