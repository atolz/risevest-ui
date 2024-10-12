import React from "react";
import AssetCard, { AssetCardProps } from "../card-asset";

const Asset = () => {
  const assets: AssetCardProps[] = [
    {
      title: "Stocks",
      description: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      img: "/stocks.png",
      bgClassName: "bg-[var(--orange-4)]",
      btnText: "Learn how Stocks work",
    },
    {
      title: "Real Estate",
      description: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      img: "/real-estate.png",
      bgClassName: "bg-[var(--indigo-4)]",
      btnText: "Learn how Real Estate work",
    },
    {
      title: "Fixed Income",
      description:
        "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      img: "/fixed-income.png",
      bgClassName: "bg-[var(--primary-2)]",
      btnText: "Learn how Fixed Income work",
    },
  ];
  return (
    <div className=" container mt-20 mb-10">
      <div className=" text-center text-black mb-8 md:mb-10">
        <h2 className=" font-tomato-grotesk font-bold text-3xl md:text-4xl mb-2">Asset Classes</h2>
        <p className=" ">It’s your money, choose where you invest it</p>
      </div>
      <div className="grid min-[940px]:grid-flow-col min-[940px]:justify-center gap-8">
        {assets.map((item, i) => {
          return <AssetCard {...item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Asset;
