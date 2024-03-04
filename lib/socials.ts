import { IconDefinition, faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import socialMediaInfos from "@/public/data/info.json";

export interface SocialInfo {
  name: string;
  icon: IconDefinition;
  href: string;
}

export const Socials  = {
  github: { name: "GitHub", icon: faGithub, href: socialMediaInfos.github },
  linkedin: { name: "LinkedIn", icon: faLinkedin, href: socialMediaInfos.linkedin },
  instagram: { name: "Instagram", icon: faInstagram, href: socialMediaInfos.instagram },
  facebook: { name: "Facebook", icon: faFacebook, href: socialMediaInfos.facebook },
  mail: { name: "Email", icon: faFacebook, href: socialMediaInfos.mail },
} as const;