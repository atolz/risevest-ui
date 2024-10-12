import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./button";

export type AssetCardProps = { img: string; title: string; description: string; bgClassName: string; btnText: string };

const AssetCard = ({ title, description, img, bgClassName, btnText }: AssetCardProps) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden border w-full min-[940px]:max-w-[300px]">
      <div className={cn("relative h-[120px] bg-indigo-300 bg-orange-100 bg-teal-100", bgClassName)}>
        <Image src={img} alt="asset card image" height={85} width={85} className=" ring-[12px] ring-white border-white absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full" />
      </div>
      <div className="flex-1 flex flex-col items-center text-center p-2 text-sm/ md:text-base/">
        <h3 className=" text-2xl mt-12 font-bold font-tomato-grotesk mb-4">{title}</h3>
        <p className=" mb-4 max-w-md ">{description}</p>
        <div className="flex flex-col gap-1 mb-4">
          <div>
            <span className=" -text--grey-white">Historical returns:</span> <span className=" text-black">14% per annum</span>
          </div>
          <div>
            <span className=" -text--grey-white">Risk Level:</span> <span className=" text-black">Medium</span>
          </div>
        </div>
        <Button variant={"ghost"} arrow className="py-0 mt-auto " href="#">
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default AssetCard;
