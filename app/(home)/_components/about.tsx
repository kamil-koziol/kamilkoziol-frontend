import Image from "next/image";
const About = () => {
  return (
    <div className="bg-dark" id="about">
      <div className="container flex gap-12 justify-center w-full h-full align-middle min-h-[600px]">
        <div className="flex flex-col flex-1 justify-center">
          <h1 className="mb-4 text-5xl font-bold text-neutral-100">About me</h1>
          <p className="pr-24 text-neutral-400">
            I am an enthusiast in the realm of <b>AI/ML</b>, continuously
            expanding my expertise. Serving on the board of a prominent academic
            AI-focused community, I{"'"}ve had the privilege of delivering
            lectures and conducting workshops. Beyond the tech landscape, I
            maintain a disciplined fitness routine, aligning my interests with
            optimology, supplements, and nutrition. Exploring my artistic
            inclinations, I engage in code art: {" "}
            <a href="https://github.com/kamil-koziol/codeart" target="_blank" className="font-bold underline">
              my work
            </a>
            . In my leisure hours, I also find satisfaction in the discipline of
            boxing.
          </p>
        </div>
        <div className="relative w-2/5">
          <Image
            src="/assets/placeholder.svg"
            alt="me"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
