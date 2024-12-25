import { CartInfo } from "@/app/components/CartItem/CartInfo/CartInfo";
import { SongItem1 } from "@/app/components/SongItem/SongItem1/SongItem1";
import { Title } from "@/app/components/Title/Title";
import { db } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default async function SongDetail(props: any) {

  const { id } = await props.params;
  let dataFinal: any = null;
  let lyric: any = null;

  onValue(ref(db, '/songs/' + id), (item) => {
    dataFinal = item.val();
    lyric = dataFinal.lyric;

    onValue(ref(db, '/singers/' + dataFinal.singerId[0]), (singer) => {
      dataFinal["authors"] = singer.val().title;
    })
  })

  const dataSection: any[] = [];
  const songsRef = ref(db, '/songs');

  onValue(songsRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      if (childData.categoryId === dataFinal.categoryId && childKey !== id) {
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
        text: dataFinal?.authors,
      }} />
      <div>
        <Title text={"Lời Bài Hát"} />
        <div className="bg-color3 rounded-[15px] whitespace-pre-line p-[20px] font-[500] text-white mb-[30px]">
          {lyric}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[10px]">
        {dataSection.map((item: any, index: any) => (
          <SongItem1 key={index} item={item} />
        ))}
      </div>
    </>
  );
}
