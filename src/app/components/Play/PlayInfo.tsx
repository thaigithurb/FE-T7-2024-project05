import Link from "next/link";

export const PlayInfo = () => {

    return (
        <>
            <a href={"/"} className="text-center md:flex items-center w-[25%] inner-link">
                <div className="md:mr-[13px] mx-auto mb-[12px] md:mb-0 h-[49px] aspect-square object-cover">
                    <img
                        src="/"
                        className="rounded-[14px] inner-img w-full object-cover"
                    />
                </div>
                <div>
                    <div className="md:text-[15px] text-[12px] font-[700] text-white inner-title">

                    </div>
                    <div className="md:text-[15px] text-[12px] font-[700] text-[#FFFFFF70] inner-authors">

                    </div>
                </div>
            </a>

        </>
    );
}