import { CartItem } from "@/app/components/CartItem/CartItem";
import { Title } from "@/app/components/Title/Title";
import { db } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Categories() {

  const dataSection: any[] = [];
  const categoriesRef = ref(db, '/categories');

  onValue(categoriesRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();


      dataSection.push({
        id: childKey,
        image: childData.image,
        title: childData.title,
        description: childData.description,
        link: `/categories/${childKey}`
      })

    });
  });


  return (
    <>
      <div>
        <Title text={"Danh Mục Bài Hát"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {dataSection.map((item) => (
            <CartItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
