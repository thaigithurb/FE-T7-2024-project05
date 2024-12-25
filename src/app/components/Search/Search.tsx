"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";

export const Search = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (event: any) => {
        event.preventDefault();
        const keyWord = event.target.keyword.value;
        router.push(`/search?keyword=${keyWord}`);
    }

    const defaultKeyWord = searchParams.get("keyword") || "";
    console.log(defaultKeyWord);


    return (
        <>
            <form
                className="h-[52px] bg-color3 rounded-[50px] text-white py-[15px] px-[30px] sticky top-0 mt-[20px] flex items-center"
                onSubmit={handleSearch}
            >
                <IoSearch className="text-[22px]" />
                <input
                    name="keyword"
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="w-full outline-none ml-[20px] font-[600] text-white text-[16px] bg-color3"
                    defaultValue={defaultKeyWord}
                    autoComplete="off"
                />
            </form>
        </>
    );
}