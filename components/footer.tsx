import { Socials } from "@/lib/socials";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface FooterProps extends React.HTMLProps<HTMLDivElement> {}
const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col bg-dark", className)} id="contact">
      <div className="mb-8 border-t border-neutral-700 md:mb-16"></div>
      <div className="container px-16 md:py-16 md:pl-32">
        <div className="relative mb-6 flex flex-row items-center gap-6">
          <div className="absolute left-[-50px] z-0 h-8 w-8 rounded-md bg-primary"></div>
          <h1 className="text-4xl font-bold text-neutral-100">Contact</h1>
        </div>
        <div>
          <div className="mb-8 flex md:flex-row flex-col w-1/2 gap-2 md:gap-6">
            {[Socials.facebook, Socials.linkedin, Socials.instagram, Socials.mail].map(
              (social) => {
                return (
                  <Link href={social.href} key={social.name}>
                    <Button
                      variant={"link"}
                      className="p-0 text-xl text-neutral-200"
                    >
                      {social.name}
                    </Button>
                  </Link>
                );
              },
            )}
            {/* <Button variant={"link"} className="p-0 text-xl text-neutral-200">
              CV
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
