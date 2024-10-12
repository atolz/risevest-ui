import { cn } from "@/lib/utils";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import Marquee from "../marquee";

const reviews = [
  {
    name: "Raye Amos",
    role: "UX Researcher",
    body: "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Ridwan Taiwo",
    role: "Venture investor",
    body: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Awa Ekekwe",
    role: "Marketing Executive",
    body: "I chose Rise to diversify my portfolio and ensure my investments are backed by experts. With the instability in global markets, Rise provides a secure way to grow my wealth without needing deep financial expertise.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sophia Garcia",
    role: "Entrepreneur",
    body: "I appreciate Rise’s transparent process and experienced team. As someone focused on building my business, I rely on Rise to manage my investments effectively and safeguard my future finances.",
    img: "https://avatar.vercel.sh/sophia",
  },
];

const Testimonial = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className=" mt-20 mb-48">
      <div className=" px-2 text-center flex flex-col items-center mx-auto mb-14">
        <h2 className=" font-tomato-grotesk font-bold text-3xl md:text-4xl mb-2 text-primary max-w-[294px] md:max-w-max">
          {isMobile ? "What our customers are saying" : "From The People Who Use Rise"}
        </h2>
        <p className=" max-w-[502px] font-medium">
          {isMobile ? "We serve over 80,000 amazing users." : "Our mission at Risevest is to empower more people just like you to achieve your personal financial goals."}
        </p>
      </div>
      <div>
        {" "}
        <Marquee pauseOnHover className="[--duration:40s]">
          {reviews.map((review) => (
            <ReviewCard key={review.role} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const ReviewCard = ({ img, name, role, body }: { img: string; name: string; role: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-[300px] md:w-[400px] min-h-[238px] flex flex-col items-center md:items-start cursor-pointer overflow-hidden rounded-[10px] border p-4 [box-shadow:_0px_12px_24px_0px_hsla(184,_52%,_51%,_0.15)]",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <blockquote className=" text-center md:text-left mb-auto">{body}</blockquote>
      <div className="flex flex-col text-center md:text-left md:flex-row items-center gap-2 mt-4">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className=" font-semibold font-tomato-grotesk text-black ">{name}</figcaption>
          <p className="text-sm font-medium md:hidden ">{role}</p>
        </div>
      </div>
    </figure>
  );
};

export default Testimonial;
