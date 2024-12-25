"use client"

export const PlayTime = () => {

    const handleChange = (event: any) => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio?.querySelector(".inner-audio");
        const elementTotal = event.target;
        const value = elementTotal.value;
        elementAudio.currentTime = value;        
    }

    return (
        <>
            <div className="relative audio-time">
                <div 
                    className="bg-color2 rounded-[50px] h-[4px] w-[0] top-[13px] absolute left-0 inner-audio-current-time"
                ></div>
                <input
                    type="range"
                    min={0}
                    max={0}
                    defaultValue={0}
                    className="w-full h-[5px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-audio-total-time"
                    onChange={handleChange}
                />
            </div>
        </>
    );
}