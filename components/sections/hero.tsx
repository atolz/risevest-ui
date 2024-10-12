import ButtonDownload from "../button-download";
import Image from "next/image";
import BubbleGroup1 from "../bubble-group-1";
import BubbleGroup2 from "../bubble-group-2";
import { PullUp, PullUpItem } from "../animation/pull-up";
import { motion } from "framer-motion";
import FadeIn from "../animation/fade-in";

const Hero = () => {
  return (
    <section className="relative container px-2 mx-auto py-6 mb-20">
      <div className="relative flex items-center flex-col gap-8 lg:gap-14 lg:flex-row justify-between flex-wrap /px-4 md:pl-6 md:pr-14">
        <BubbleGroup1 className="" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start max-w-[360px] sm:max-w-[510px] text-center lg:text-left"
        >
          <motion.h1
            animate={{ color: "var(--primary)" }}
            transition={{ delay: 1.8, duration: 1 }}
            className="relative font-tomato-grotesk font-semibold text-3xl min-[360px]:text-4xl lg:text-5xl xl:text-[56px] leading-tight"
          >
            Dollar investments that help you grow<sup className=" text-6xl leading-[0] text-primary-1 top-[-0.2em] lg:top-[-0.3em]">.</sup>
          </motion.h1>

          <p className="max-w-[391px] font-medium mt-4 mb-8">We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
          <div className="flex items-center justify-center flex-wrap gap-2 min-[320px]:gap-4">
            <ButtonDownload type="apple" className="" />
            <ButtonDownload type="google" className="" />
          </div>
        </motion.div>
        <div className="flex relative items-center justify-center lg:my-10">
          <PullUp delay={0.4}>
            <PullUpItem y={0} duration={1}>
              <Image alt="Hero Image" className="hidden lg:block scale-[1.15]  aspect-[194/433] object-cover " width="194" height="433" src="/phone-1.png" />
              <Image
                alt="Hero Image"
                unoptimized
                quality={100}
                className=" hidden lg:block scale-[1.15] absolute top-0 left-0 aspect-[194/433] object-cover "
                width="194"
                height="433"
                src="/phone-1.png"
              />
            </PullUpItem>
          </PullUp>
          <div className="relative">
            <BubbleGroup2 className="lg:hidden" />
            <PullUp>
              <PullUpItem y={70}>
                <Image unoptimized alt="Hero Image" className="relative lg:hidden  aspect-[194/393]/ object-cover  /h-full" width="194" height="393" src="/phone-1-shadow.png" />
              </PullUpItem>
            </PullUp>
          </div>
        </div>
      </div>

      <FadeIn delay={2} className=" mt-28">
        <h5 className=" sm:hidden text-lg font-semibold mb-1 tracking-tighter -text--grey-white">We are supported by</h5>
        <Image src={"/partners.png"} width={457} height={80} className="aspect-[457/80] sm:mx-auto [filter:hue-rotate(185deg)]" alt="risevest partners" />
      </FadeIn>
    </section>
  );
};

export default Hero;
