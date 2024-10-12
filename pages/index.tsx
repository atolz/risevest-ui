import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Offer from "@/components/sections/offer";
import Asset from "@/components/sections/asset";
import Goal from "@/components/sections/goal";
import Regulation from "@/components/sections/regulation";
import Testimonial from "@/components/sections/testimonial";
import Community from "@/components/sections/community";
import Download from "@/components/sections/download";
import Footer from "@/components/sections/footer";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--dm-sans",
});

const tomatoGrotesk = localFont({
  src: [
    { path: "./fonts/TomatoGrotesk-Regular.63ff49eb.otf", weight: "400" },
    { path: "./fonts/TomatoGrotesk-Medium.8b894f94.otf", weight: "500" },
    { path: "./fonts/TomatoGrotesk-SemiBold.1183d758.otf", weight: "600" },
  ],
  variable: "--font-tomato-grotesk",
});

export default function Home() {
  return (
    <div className={`${dmSans.className} ${dmSans.variable} ${tomatoGrotesk.variable} antialiased overflow-x-hidden`}>
      <Header />
      <main>
        <Hero />
        <Offer />
        <Asset />
        <Goal />
        <Regulation />
        <Testimonial />
        <Community />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
