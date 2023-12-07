import NextImage from "next/image";
import { FC } from "react";
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

import { getAuthor } from "@/utils/author";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { getImageUrl } from "@/utils/strapi";

import fallbackImage from "./fallbackAuthor.svg";
import { SocialsButton } from "./SocialsButton";

export const AuthorSection: FC = async () => {
  const author = await getAuthor();

  if (!author) {
    return (
      <section className="w-full h-screen flex flex-col gap-8 md:items-center justify-center p-2 md:p-12">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-900">
          Oida, her var det litt tomt! 🙀
        </h1>
        <br />
        <p className="text-2xl text-blue-900">
          Les litt i README'en for å komme i gang
        </p>
      </section>
    );
  }
  return (
    <section className="container w-full h-screen max-h-[80vh] flex flex-col md:flex-row gap-8 md:items-center justify-center p-2 md:p-12">
      <div className="w-2/3 md:order-last">
        {!author.image && (
          <NextImage src={fallbackImage} alt={`Bilde av ${author.name}`} />
        )}
        {author.image && (
          <Image
            as={NextImage}
            width={450}
            height={450}
            className="aspect-square object-cover self-center	"
            src={""}
            alt={`Bilde av ${author.name}`}
          />
        )}
      </div>
      <div className="md:w-3/4">
        <h1 className="text-6xl font-extrabold mb-4 text-blue-900">
          {author.name}
        </h1>
        <p className="mb-8 text-lg font-medium">{author.bio}</p>

        {/*
        
        SoMe lenker

        <Divider className="mb-4" />
        <div className="flex flex-row gap-3">
          <SocialsButton href={GithubLenke}>
            <FaSquareGithub />
          </SocialsButton>
          <SocialsButton href={LinkedInLenke}>
            <FaLinkedin />
          </SocialsButton>

          <SocialsButton href={TwitterLenke}>
            <FaSquareXTwitter />
          </SocialsButton>
        </div>  
        
        */}
      </div>
    </section>
  );
};
