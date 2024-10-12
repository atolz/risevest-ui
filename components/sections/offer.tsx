import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@mantine/hooks";
import { Button } from "../button";

const Offer = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const offers = [
    {
      title: isMobile ? "Superior Performance" : "Invest your money in dollars",
      description: isMobile
        ? "Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. "
        : "By holding your investments in a stable currency, your money grows more over time and retains its value better.",
      dCN: "max-w-[318px]",
      src: "/illustration-1.svg",
      imgCN: "",
      width: 319,
      height: 306,
    },
    {
      title: isMobile ? "Personalization" : "Choose what's best for you",
      description: isMobile
        ? "No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you."
        : "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
      tCN: "max-w-[298px]",
      src: "/illustration-2.svg",
      imgCN: "",
      width: 344,
      height: 246,
      imgConainerCN: " justify-end",
    },
    {
      title: isMobile ? "Diversification" : "Set goals and reach them",
      description: isMobile
        ? "Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or"
        : "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
      src: "/illustration-3.svg",
      width: 319,
      height: 284,
    },
    {
      title: "We remember so you dont have to",
      description:
        "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ",

      tCN: "max-w-[386px]",
      src: "/illustration-4.svg",
      width: 384,
      height: 294,
      imgConainerCN: " justify-end",
      imgCN: "-translate-y-14",
    },
  ];
  return (
    <section className=" container ">
      {offers.map((offer, i) => {
        return (
          <div className={cn("max-w-[1000px] mx-auto flex even:flex-row-reverse gap-24 lg:gap-32  items-center mb-16 sm:mb-10 md:h-[306px] ", isMobile && i == 3 ? "hidden" : "")} key={i}>
            <div className="w-1/2 hidden md:block">
              <h2 className={twMerge(" font-tomato-grotesk font-semibold text-black text-3xl mb-3", offer?.tCN)}>{offer.title}</h2>
              <p className={twMerge(" max-w-[432px] font-medium", offer?.dCN)}>{offer.description}</p>
              <Button href="#" arrow variant={"ghost"} className=" px-0 py-0 mt-6 justify-start h-auto">
                Start investing
              </Button>
            </div>
            <div className={cn("w-full md:w-1/2 flex flex-col items-center md:flex-row", offer?.imgConainerCN)}>
              <div className="relative mb-8 sm:mb-10 md:mb-0 /md:scale-[.9] max-w-[250px] md:max-w-max">
                <Image width={offer.width} height={offer.height} className={twMerge("-translate-y-2  ", offer?.imgCN)} alt="illustration" src={offer.src} />
                <div className="md:hidden absolute bottom-0 left-0 h-[22px] w-full bg-[#A0DDE2CC]/80"></div>
              </div>
              <div className="flex flex-col items-center text-center md:hidden">
                <h2 className={twMerge(" font-tomato-grotesk font-semibold text-black text-xl mb-3", offer?.tCN)}>{offer.title}</h2>
                <p className={twMerge(" max-w-[432px]", offer?.dCN)}>{offer.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Offer;
