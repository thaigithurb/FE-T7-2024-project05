import Link from "next/link";

interface iItem {
    image: string,
    title: string,
    description: string,
    link: string
}

export const CartItem = (props: {item: iItem}) => {
    
    const { image, title, description, link } = props.item;

    return (
        <>
            <Link href={link}>
                <div className="aspect-square truncate mb-[10px]">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover rounded-[15px]"
                    />
    
                </div>
                <div className="font-[700] text-[14px] text-white mb-[10px]">
                    {title}
                </div>
                <div className="font-[400] text-[12px] line-clamp-1 text-[#FFFFFF80]">
                    {description}
                </div>
            </Link>
        </>
    );
}