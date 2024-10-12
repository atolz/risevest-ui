import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  href: string;
  arrow?: boolean;
}

const buttonVariants = cva(
  "font-tomato-grotesk inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white font-bold hover:bg-primary/90",
        secondary: "bg-primary-1 text-black font-bold hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground text-primary font-semibold",
      },
      size: {
        default: "h-12 px-8 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(({ className, variant, size, arrow = false, ...props }, ref) => {
  return (
    <Link className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      {props.children}
      {arrow ? <Arrow className="ml-4" /> : null}
    </Link>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };

export const Arrow = ({ className }: { className?: string }) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className)}>
      <path
        d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
