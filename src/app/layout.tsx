import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "./components/Sider/Sider";
import { Play } from "./components/Play/Play";
import { Search } from "./components/Search/Search";
import { Suspense } from "react";
import { OpenMenu } from "./components/OpenMenu/OpenMenu";


export const metadata: Metadata = {
  title: "Sportfreefire",
  description: "Ứng dụng nghe nhạc đỉnh nhất thế giới",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-color1">
        <div className="mx-[auto] md:container lg:p-0 p-[16px] relative">
          <OpenMenu />
          <div className="md:flex items-start">
            <div className="md:block hidden w-auto md:w-[280px]">
              <Sider />
            </div>
            <div className="flex-1 lg:ml-[20px]">
              <Suspense fallback={<div>Loading...</div>}>
                <Search />
              </Suspense>

              <main className="mt-[30px] mb-[120px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
