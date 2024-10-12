import { cn } from "@/lib/utils";
import React from "react";

type Props = { className?: string };

const RiseBubble = ({ className }: Props) => {
  return <div className={cn(" w-9 h-9 lg:w-14 lg:h-14 rounded-full bg-primary-1 opacity-30 lg:opacity-100", className)}></div>;
};

export default RiseBubble;
