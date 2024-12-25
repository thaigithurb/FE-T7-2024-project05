import type { Metadata } from "next";
import { Title } from "./components/Title/Title";
import { CartItem } from "./components/CartItem/CartItem";
import { onValue, ref } from "firebase/database";
import { db } from "./firebaseConfig";
import { SongItem } from "./components/SongItem/SongItem";


export const metadata: Metadata = {
  title: "Sportfreefire",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function Home() {
  const songsRef = ref(db, '/songs');

  const dataSection1: any[] = [];

  onValue(songsRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      if (dataSection1.length < 3) {
        onValue(ref(db, '/singers/' + childData.singerId[0]), (singer) => {
          const dataSinger = singer.val();
          dataSection1.push({
            id: childKey,
            img: childData.image,
            name: childData.title,
            authors: dataSinger.title,
            listens: childData.listen,
            link: `/songs/${childKey}`,
            audio: childData.audio,
            wishlist: childData.wishlist
          })
        })
      }
    });
  })


  const categoriesRef = ref(db, '/categories');
  const dataSection2: any[] = [];


  onValue(categoriesRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      if (dataSection2.length < 5) {
        dataSection2.push({
          id: childKey,
          image: childData.image,
          title: childData.title,
          description: childData.description,
          link: `/categories/${childKey}`
        })
      }
    });
  });

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
      {/* section 1 (banner và mục nghe nhiều) */}
      <div className="flex items-start gap-[20px]">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/bg-1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[14px] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img
                src="/person-1.png"
                alt="Nhạc EDM"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <Title text={"Nghe Nhiều"} />
          <div className="grid grid-cols-1 gap-[12px]">
            {
              dataSection1.map((item, index) => (
                <SongItem key={index} item={item} />
              ))
            }
          </div>
        </div>
      </div>

      {/* section2 (Danh mục nổi bật) */}
      <div className="mt-[30px]">
        <Title text={"Danh Mục Nổi Bật"} />
        <div className="grid grid-cols-5 gap-[20px]">
          {
            dataSection2.map((item, index) => (
              <CartItem key={index} item={item} />
            ))
          }
        </div>
      </div>

      {/* section 3 (ca sĩ nổi bật) */}
      <div className="mt-[30px]">
        <Title text={"Ca Sĩ Nổi Bật"} />
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
