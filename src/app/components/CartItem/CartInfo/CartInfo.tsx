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
            <div className="flex gap-[20px] items-center mb-[30px]">
                <div>
                    <div className="w-[177px]">
                        <img
                            src={img}
                            alt={name}
                            className="w-full h-full rounded-[15px]"
                        />
                    </div>
                </div>

                <div className="">
                    <div className="text-color2 font-[700] text-[35px]">
                        {name}
                    </div>
                    <div className="text-[#EFEEE0] font-[400] text-[14px]">
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
}