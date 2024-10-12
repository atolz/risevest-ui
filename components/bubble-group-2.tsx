import React from "react";
import RiseBubble from "./rise-bubble";
import { cn } from "@/lib/utils";
import { PullUp, PullUpItem } from "./animation/pull-up";

type Props = { className?: string };

const BubbleGroup2 = ({ className }: Props) => {
  return (
    <PullUp delay={0.4} className={cn("absolute w-full h-full", className)}>
      <PullUpItem className=" absolute top-[11%] left-[-6.5%]">
        <RiseBubble />
      </PullUpItem>
      <PullUpItem className=" absolute top-[27%] right-[-15%]">
        <RiseBubble />
      </PullUpItem>
      <PullUpItem className=" absolute bottom-[46%] left-[-26%] sm:left-[-40%]">
        <RiseBubble className="  w-5 h-5" />
      </PullUpItem>
      <PullUpItem className=" absolute bottom-[19%] right-[92%]">
        <RiseBubble />
      </PullUpItem>
    </PullUp>
  );
};

export default BubbleGroup2;
