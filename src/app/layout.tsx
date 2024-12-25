import type { Metadata } from "next";
import "./globals.css";
import { Sider } from "./components/Sider/Sider";
import { Play } from "./components/Play/Play";
import { Search } from "./components/Search/Search";
import { Suspense } from "react";


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
        <div className="mx-[auto] container">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className=" flex-1 ml-[20px]">
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
