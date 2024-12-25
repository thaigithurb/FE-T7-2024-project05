import { CartInfo } from "@/app/components/CartItem/CartInfo/CartInfo";
import { SongItem1 } from "@/app/components/SongItem/SongItem1/SongItem1";
import { Title } from "@/app/components/Title/Title";
import { db } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Danh mục",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default async function CategoryDetail(props: any) {

  const { id } = await props.params;
  let dataFinal: any = null;

  onValue(ref(db, '/categories/' + id), (item) => {
    dataFinal = item.val();
  })

  const dataSection: any[] = [];
  const songsRef = ref(db, '/songs');

  onValue(songsRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      if (childData.categoryId === id) {
        onValue(ref(db, '/singers/' + childData.singerId[0]), (singer) => {
          const dataSinger = singer.val();
          dataSection.push({
            id: childKey,
            img: childData.image,
            name: childData.title,
            authors: dataSinger.title,
            duration: "4:32",
            link: `/songs/${childKey}`,
            audio: childData.audio
          })
        })
      }
    });
  })


  return (
    <>
      <CartInfo item={{
        img: dataFinal?.image,
        name: dataFinal?.title,
        text: dataFinal?.description,
      }} />
      <div>
        <Title text={"Danh Sách Bài Hát"} />
        <div className="grid grid-cols-1 gap-[10px]">
          {dataSection.map((item, index) => (
            <SongItem1 item={item} key={index}/>
          ))}
        </div>
      </div>
    </>
  );
}
