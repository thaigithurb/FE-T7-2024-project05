import Link from "next/link";

export const PlayInfo = () => {

    return (
        <>
            <a href={"/"} className="flex items-center w-[25%] inner-link">
                <div className="mr-[13px] h-[49px] aspect-square">
                    <img
                        src="/"
                        className="rounded-[14px] inner-img w-full"
                    />
                </div>
                <div>
                    <div className="text-[15px] font-[700] text-white inner-title">

                    </div>
                    <div className="text-[12px] font-[700] text-[#FFFFFF70] inner-authors">

                    </div>
                </div>
            </a>

        </>
    );
}