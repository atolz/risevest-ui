import React from "react";

const Regulation = () => {
  return (
    <section className=" overflow-hidden relative pb-8 pt-20 md:pb-20 /h-[372px] grid place-content-center">
      <div className="absolute z-10 -top-[40px] -left-[170px] md:-top-[35px] md:-left-[40px] h-[276px] w-[276px] bg-[#FFF4F0] rounded-full bg-blend-multiply blur-xl"></div>
      <div className="absolute z-0 -bottom-[120px] -left-[240px] md:-bottom-[110px] md:-left-[112px] h-[325px] w-[325px] bg-[#F6E4F0] rounded-full bg-blend-multiply blur-xl"></div>
      <div className="absolute z-10 -top-[35px] -right-[170px] -md:top-[35px] md:-right-[32px] h-[229px] w-[229px] bg-[#F6F2FF] rounded-full bg-blend-multiply blur-xl"></div>
      <div className="absolute z-0 bottom-0 -right-[170px] md:-bottom-[70px] md:-right-[70px] h-[270px] w-[270px] bg-[#ECFEFE] rounded-full bg-blend-multiply blur-xl"></div>

      <div className="container px-5 relative z-20 mx-auto flex flex-col items-center text-center">
        <h2 className=" font-semibold text-3xl md:text-4xl text-black font-tomato-grotesk mb-4">How we are Regulated</h2>
        <p className=" max-w-[502px] font-medium">
          Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM
          Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions
        </p>
      </div>
    </section>
  );
};

export default Regulation;
