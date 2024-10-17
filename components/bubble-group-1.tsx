import React from "react";
import RiseBubble from "./rise-bubble";
import { cn } from "@/lib/utils";
import { PullUp, PullUpItem } from "./animation/pull-up";

type Props = { className?: string };

const BubbleGroup1 = ({ className }: Props) => {
  return (
    <div className={cn(" absolute w-full h-full bg-red-100/30/", className)}>
      <PullUp delay={0.5} staggerChildren={0.15}>
        <PullUpItem className=" absolute top-[-6%]  lg:top-[11%] left-[80.5%] lg:left-[4.5%] ">
          <RiseBubble className="lg:w-8 lg:h-8" />
        </PullUpItem>
        <PullUpItem className=" absolute top-[4.5%] lg:top-[-1%] right-[92%]  lg:right-[42%] ">
          <RiseBubble className="" />
        </PullUpItem>
        <PullUpItem className="hidden lg:block absolute bottom-[-11%] left-[16%]">
          <RiseBubble />
        </PullUpItem>
        <PullUpItem className="hidden lg:block absolute bottom-[-3%] right-[32%] ">
          <RiseBubble className="lg:w-8 lg:h-8" />
        </PullUpItem>
        <PullUpItem className="hidden lg:block absolute bottom-[-7%] right-[1%]">
          <RiseBubble />
        </PullUpItem>
      </PullUp>
    </div>
  );
};

export default BubbleGroup1;
