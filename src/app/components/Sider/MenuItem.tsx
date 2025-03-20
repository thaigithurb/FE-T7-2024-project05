import Link from "next/link";
import { usePathname } from "next/navigation";


export const MenuItem = (props: any) => {

    const { item, isLogin } = props;

    const pathName = usePathname();

    return (
        <>

            {(item.isLogin === undefined || item.isLogin == isLogin) && (
                <Link
                    href={item.link}
                    className={"hover:text-color2 " + (pathName === item.link ? " text-color2" : " text-white")}
                >
                    <li className="flex items-center gap-[20px]">
                        <div className="lg:text-[22px] text-[20px]">
                            {item.icon}
                        </div>
                        <div className="lg:text-[16px] text-[14px]">
                            {item.title}
                        </div>
                    </li>
                </Link>
            )}
        </>
    );
}