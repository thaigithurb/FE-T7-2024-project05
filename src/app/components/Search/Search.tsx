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


    return (
        <>
            <div className="sticky z-30 top-0 pt-[20px] ">
                <form
                    className="h-[52px] bg-color3 rounded-[50px] px-[30px] py-[15px] text-white flex items-center"
                    onSubmit={handleSearch}
                    style={{ boxShadow: '0 4px 6px -1px rgba(255, 250, 250, 0.05), 0 2px 4px -1px rgba(255, 250, 250, 0.06)' }}
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

            </div>

        </>
    );
}