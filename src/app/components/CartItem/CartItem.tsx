import Link from "next/link";

export const CartItem = (props: any) => {
    
    const { item } = props;

    return (
        <>
            <Link href={item.link}>
                <div className="aspect-square truncate mb-[10px]">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="object-cover rounded-[15px]"
                    />
    
                </div>
                <div className="font-[700] text-[14px] text-white mb-[10px]">
                    {item.title}
                </div>
                <div className="font-[400] text-[12px] line-clamp-1 text-[#FFFFFF80]">
                    {item.description}
                </div>
            </Link>
        </>
    );
}