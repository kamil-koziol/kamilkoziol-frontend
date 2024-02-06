import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

interface HeroProps extends React.HTMLProps<HTMLDivElement> { }

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full bg-dark", className)}>
      <Image src={"/Decals.svg"} fill alt="Decals" className="object-cover" />
      <div className="flex p-24 mb-12">
        <ul className="flex z-10 flex-col ml-auto">
          {["about", "projects", "contact"].map((key, idx) => {
            return (
              <Button
                key={idx}
                variant={"link"}
                size={"lg"}
                className="justify-end text-3xl font-semibold text-right text-neutral-300"
              >
                <li>{key}</li>
              </Button>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-screen-md">
          <div className="relative mb-12">
            <div className="absolute z-0 w-64 h-12 left-[-60px] top-[-25px] bg-primary/30"></div>
            <h2 className="absolute z-10 text-5xl font-bold text-neutral-300">
              HI, MY NAME IS
            </h2>
          </div>
          <h1 className="mb-8 text-8xl font-extrabold text-neutral-100">
            KAMIL KOZIOŁ
          </h1>
          <p className="mb-8 text-lg text-neutral-400">
            Computer Science student at GUT specializing in{" "}
            <b className="inline-block text-transparent bg-clip-text bg-gradient-to-r to-purple-400 from-primary">
              full-stack development
            </b>{" "}
            with a keen interest in AI and artistic coding.
          </p>

          <div className="flex gap-3 mb-8 w-1/2">
            <FontAwesomeIcon
              icon={faGithub}
              width={34}
              className="cursor-pointer text-neutral-300 hover:text-primary/80"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              width={34}
              className="cursor-pointer text-neutral-300 hover:text-primary/80"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              width={34}
              className="cursor-pointer text-neutral-300 hover:text-primary/80"
            />
          </div>

          <div className="flex gap-3">
            <Button size={"lg"}>PROJECTS {">"}</Button>
            <Button size={"lg"} variant={"secondary"} className="font-semibold">
              CONTACT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
