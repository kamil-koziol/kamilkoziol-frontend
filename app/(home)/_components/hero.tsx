import { Button } from "@/components/ui/button";
import { Socials } from "@/lib/socials";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroProps extends React.HTMLProps<HTMLDivElement> {}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn("relative z-10 w-full bg-dark", className)}>
      <Image
        src={"/Decals.svg"}
        fill
        alt="Decals"
        className="-z-10 hidden object-cover md:block"
      />
      <div className="md:mb-12 hidden p-24 md:flex">
        <ul className="ml-auto flex flex-col">
          {["about", "projects", "contact"].map((key) => {
            return (
              <Link key={key} href={"#" + key}>
                <Button
                  variant={"link"}
                  size={"lg"}
                  className="justify-end text-right text-3xl font-semibold text-neutral-300"
                >
                  <li>{key}</li>
                </Button>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col items-center container p-6 md:p-24">
        <div className="max-w-screen-md">
          <div className="relative md:mb-12 mb-8">
            <div className="absolute left-[-60px] top-[-25px] z-0 h-12 w-64 bg-primary/30"></div>
            <h2 className="absolute z-10 md:text-5xl text-2xl font-bold text-neutral-300">
              HI, MY NAME IS
            </h2>
          </div>
          <h1 className="md:mb-8 mb-4 md:text-8xl text-4xl font-extrabold text-neutral-100">
            KAMIL KOZIOŁ
          </h1>
          <p className="mb-8 text-lg text-neutral-400">
            Computer Science student at GUT specializing in{" "}
            <b className="inline-block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              full-stack development
            </b>{" "}
            with a keen interest in AI and artistic coding.
          </p>

          <div className="mb-8 flex w-1/2 gap-3">
            {[Socials.facebook, Socials.linkedin, Socials.github].map(
              (social) => {
                return (
                  <Link href={social.href} key={social.name}>
                    <FontAwesomeIcon
                      icon={social.icon}
                      width={34}
                      className="cursor-pointer text-neutral-300 hover:text-primary/80"
                    />
                  </Link>
                );
              },
            )}
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
