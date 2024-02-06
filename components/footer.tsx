import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";

interface FooterProps extends React.HTMLProps<HTMLDivElement> { }
const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("bg-dark flex flex-col", className)}>
      <div className="container py-16 pl-32">
        <div className="border-t border-neutral-700 mb-16"></div>
        <div className="flex relative flex-row gap-6 items-center mb-6">
          <div className="z-0 w-8 h-8 bg-primary rounded-md absolute left-[-50px]"></div>
          <h1 className="text-4xl font-bold text-neutral-100">Contact</h1>
        </div>
        <div>
          <div className="flex gap-6 mb-8 w-1/2">
            <Button variant={"link"} className="p-0 text-xl text-neutral-200">
              Email
            </Button>
            <Button variant={"link"} className="p-0 text-xl text-neutral-200">
              CV
            </Button>
            <Button variant={"link"} className="p-0 text-xl text-neutral-200">
              Instagram
            </Button>
            <Button variant={"link"} className="p-0 text-xl text-neutral-200">
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
