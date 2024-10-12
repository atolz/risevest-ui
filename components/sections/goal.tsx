import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Button } from "../button";

const Goal = () => {
  return (
    <div className="hidden py-20 max-w-4xl mx-auto min-[1000px]:flex items-center pl-6 /justify-center gap-40">
      <div className="relative shrink-0">
        <Image unoptimized alt="phone screen showing goals" width={284} height={544} src={"/phone-2.png"} className=" h-[508px]/ aspect-[284/544] " />
        <div
          className=" overflow-hidden z-10 rounded-xl flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[316px] h-[269px] p-4  bg-[url(/coins.jpg)] bg-center bg-contain [box-shadow:_0px_9.63px_19.26px_0px_hsla(215,_27%,_23%,_0.15)]
"
        >
          <div className=" absolute left-0 bottom-0 h-full w-full bg-[linear-gradient(to_bottom,rgba(149,134,242,0)_0%,rgba(149,134,242,0)_29%,#9586F2_100%)] /opacity-70 /[backdrop-filter:blur(24.074886322021484px)]"></div>
          <div className="relative mt-auto text-white">
            <h4 className=" font-tomato-grotesk font-bold text-base">Build Wealth</h4>
            <p className=" my-1 text-xs max-w-[280px]">Invest for long-term goals like retirement with this plan. It’s your financial freedom partner.</p>
            <Link href="#" className="group underline transition-all w-full flex items-center justify-between text-white font-bold p-0 px-0 py-0 h-auto">
              Start investing <Arrow className=" group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" font-tomato-grotesk text-black">
        <h4 className=" mb-4  font-medium">The Rise App</h4>
        <h2 className=" text-4xl font-semibold">
          Save for your <span className=" text-indigo-500">future</span>
        </h2>
        <p className="max-w-[391px] mt-4 mb-8 text-black font-normal text-base">
          With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.
        </p>
        <Button href="#">Start Saving</Button>
      </div>
    </div>
  );
};

export default Goal;
