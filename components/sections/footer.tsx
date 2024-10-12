import Link from "next/link";
import RiseLogo from "../rise-logo";
import ArrowDown from "../arrow-down";

const Footer = () => {
  const groupedNav = [
    {
      groupName: "rise",
      items: [
        { name: "About Us", link: "#", arrow: false },
        { name: "Careers", link: "#", arrow: false },
        { name: "FAQs", link: "#", arrow: false },
        { name: "Contact Info", link: "#", arrow: false },
        { name: "Press", link: "#", arrow: false },
        { name: "Rise Impact", link: "#", arrow: false },
      ],
    },
    {
      groupName: "explore",
      items: [
        { name: "Investment Club", link: "#", arrow: true },
        { name: "Blog", link: "#", arrow: true },
        { name: "Newsletter", link: "#", arrow: false },
        { name: "Instagram", link: "#", arrow: false },
        { name: "Twitter", link: "#", arrow: false },
      ],
    },
    {
      groupName: "product",
      items: [
        { name: "Rise App", link: "#", arrow: false },
        { name: "Wallets", link: "#", arrow: false },
        { name: "Asset Classes", link: "#", arrow: false },
      ],
    },

    {
      groupName: "contact",
      items: [
        { name: "0818 714 7405", link: "#", arrow: true },
        { name: "hello@rise.capital", link: "#", arrow: true },
        { name: "Newsletter", link: "#", arrow: true },
        { name: "Instagram", link: "#", arrow: true },
        { name: "Twitter", link: "#", arrow: true },
      ],
    },
  ];

  return (
    <footer className=" container text-black py-20">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {groupedNav.map((group, i) => {
          return (
            <li key={`group-${i}`}>
              {i == 0 ? <RiseLogo className="mb-3 mt-2" /> : <h3 className="font-semibold font-tomato-grotesk first-letter:capitalize mb-3 text-black lg:mb-5">{group.groupName}</h3>}
              <ul className="gap-3 grid text-sm font-light">
                {group.items.map((item, i) => {
                  return (
                    <li className="flex items-center gap-2" key={i}>
                      <Link href={item.link}>{item.name}</Link>
                      {item.arrow ? <ArrowDown className=" -rotate-[135deg]" /> : null}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
