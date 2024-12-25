import { CartItem } from "@/app/components/CartItem/CartItem";
import { Title } from "@/app/components/Title/Title";
import { db } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Danh sách ca sĩ",
    description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Singers() {

    const singersRef = ref(db, '/singers');
    const dataSection3: any[] = [];
    onValue(singersRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();

            if (dataSection3.length < 5) {
                dataSection3.push({
                    id: childKey,
                    image: childData.image,
                    title: childData.title,
                    description: childData.description,
                    link: `/singers/${childKey}`
                })
            }
        });
    });

    return (
        <>
            <div>
                <Title text={"Danh Sách Ca Sĩ"} />

                <div className="grid grid-cols-5 gap-[20px]">
                    {
                        dataSection3.map((item, index) => (
                            <CartItem key={index} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    );
}
