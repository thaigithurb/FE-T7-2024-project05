interface iItem {
    img: string,
    name: string,
    text: string
}

export const CartInfo = (props: { item: iItem }) => {
    const {
        img,
        name,
        text
    } = props.item;

    return (
        <>
            <div className="flex gap-[12px] md:gap-[20px] items-center mb-[30px]">
                <div>
                    <div className="lg:w-[177px] sm:w-[120px] w-[100px]">
                        <img
                            src={img}
                            alt={name}
                            className="w-full h-full rounded-[15px]"
                        />
                    </div>
                </div>

                <div className="">
                    <div className="text-color2 font-[700] text-[24px] md:text-[30px] lg:text-[35px]">
                        {name}
                    </div>
                    <div className="text-[#EFEEE0] font-[400] text-[13px] lg:text-[14px]">
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
}