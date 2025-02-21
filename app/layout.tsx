import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { TopBar } from "@/components/main/top-bar";
import { SideBar } from "@/components/main/side-bar";
import { Main } from "@/components/craft";

export const metadata: Metadata = {
  title: "Down With Big Pizza",
  description: "Pizza to the people! Legalize Marinara! Join the rebellion!",
};

const content = {
  marqueeMessage:
    "PIZZA TO THE PEOPLE! LEGALIZE MARINARA! DOWN WITH BIG PIZZA!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-mono bg-background bg-[#008080] h-screen">
        <TopBar message={content.marqueeMessage} />
        <Main className="grid grid-cols-4 h-full pt-8">
          <SideBar />
          <div className="col-span-3 px-8 py-4">{children}</div>
        </Main>
        <Toaster />
      </body>
    </html>
  );
}
