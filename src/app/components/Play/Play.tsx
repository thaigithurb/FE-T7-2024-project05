import { PlayInfo } from "./PlayInfo";
import { PlayActions } from "./PlayActions";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";

export const Play = () => {

    return (
        <>
            <div className="bg-color3 border-[#494949] border-t fixed bottom-0 w-full z-[999] play-audio hidden justify-center">
                <audio className="hidden inner-audio">
                    <source src="/" />
                </audio>
                <div className="container mx-[auto] pt-[22px] pb-[20px]">
                    <div className="flex items-center">
                        <PlayInfo />
                        <div className=" flex-1 justify-center">
                            <PlayActions />
                            <PlayTime />
                        </div>
                        <div className="w-[20%]">
                            <PlayVolume />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}