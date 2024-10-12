import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { Button } from "../button";

const Community = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className=" container grid place-items-center sm:grid-cols-2 gap-6 mb-20 mt-32">
      <div className="max-w-[341px]  md:max-w-[502px] order-2 md:order-1 flex shrink-0 flex-col overflow-hidden items-center md:items-start text-center md:text-left">
        <h2 className=" font-semibold text-3xl md:text-4xl text-black font-tomato-grotesk mb-2 md:mb-4">Join The Rise Community</h2>
        <p className=" font-medium mb-5 md:mb-8">
          {isMobile
            ? "If you want to go far, go together."
            : "  If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. Its completely free and open to new and seasoned investors."}
        </p>
        <Button href="#" variant={"secondary"}>
          Join our Community
        </Button>
      </div>

      <div className="order-1 sm:order-2 max-w-[341px] md:max-w-[384px] md:place-self-end">
        <Image width={432} height={386} src={"/community.png"} className="  aspect-[432/386]" alt="community" />
      </div>
    </div>
  );
};

export default Community;
