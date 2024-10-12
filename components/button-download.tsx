import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  type: "google" | "apple";
  className?: string;
};

const ButtonDownload = ({ type = "apple", className }: Props) => {
  return (
    <button className={cn("rounded-[10px] px-4 sm:pr-5 py-1 h-12 flex items-center gap-1 min-[300px]:gap-2 lg:gap-3 bg-black text-white font-tomato-grotesk font-normal ", className)}>
      {type == "apple" ? <Apple /> : <PlayStore />}
      <div className=" text-left text-[11px] /lg:text-xs ">
        <span className="truncate /tracking-wider">Download on the</span> <br />
        <span className="font-semibold text-xs/ /tracking-wider text-sm">{type == "apple" ? "App Store" : "Google Play"}</span>
      </div>
    </button>
  );
};

export default ButtonDownload;

const PlayStore = () => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_1191)">
        <path d="M4.66964 0.877687C4.12289 0.52439 3.46617 0.417609 2.85019 0.563015L13.6751 11.388L17.1835 7.87959L4.66964 0.877687Z" fill="white" />
        <path d="M1.50666 1.44287C1.20474 1.84426 1.03098 2.33711 1.03098 2.85845V22.1409C1.03098 22.6622 1.20479 23.155 1.50666 23.5564L12.5634 12.4997L1.50666 1.44287Z" fill="white" />
        <path
          d="M21.7622 10.4415L18.6091 8.67725L14.7867 12.4996L18.6093 16.3222L21.7627 14.5578C22.5182 14.1345 22.9692 13.3652 22.9692 12.4996C22.9692 11.634 22.5182 10.8648 21.7622 10.4415Z"
          fill="white"
        />
        <path d="M13.675 13.6116L2.85074 24.4359C3.02821 24.4776 3.20882 24.5001 3.38943 24.5001C3.83577 24.5001 4.28057 24.3732 4.66958 24.1218L17.1836 17.12L13.675 13.6116Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1_1191">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Apple = () => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_1182)">
        <path
          d="M16.4989 0.5C15.2194 0.588499 13.7239 1.40749 12.8525 2.47399C12.0575 3.44148 11.4035 4.87847 11.6585 6.27497C13.0565 6.31847 14.5009 5.47997 15.3379 4.39548C16.1209 3.38598 16.7134 1.95799 16.4989 0.5Z"
          fill="white"
        />
        <path
          d="M21.5554 8.55192C20.3269 7.01143 18.6004 6.11743 16.9699 6.11743C14.8174 6.11743 13.9069 7.14793 12.4114 7.14793C10.8694 7.14793 9.69792 6.12043 7.83643 6.12043C6.00794 6.12043 4.06095 7.23792 2.82646 9.14891C1.09097 11.8399 1.38797 16.8994 4.20045 21.2088C5.20695 22.7508 6.55094 24.4848 8.30893 24.4998C9.87342 24.5148 10.3144 23.4963 12.4339 23.4858C14.5534 23.4738 14.9554 24.5133 16.5169 24.4968C18.2764 24.4833 19.6939 22.5618 20.7004 21.0198C21.4219 19.9144 21.6904 19.3579 22.2498 18.1099C18.1804 16.5604 17.5279 10.7734 21.5554 8.55192Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1182">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
