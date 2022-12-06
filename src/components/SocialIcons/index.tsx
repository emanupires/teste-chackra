import { HStack, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export interface Props {
  hasFirstLink?: boolean;
}

export const SocialIcon = ({ hasFirstLink }: Props) => {
  return (
    <HStack
      fontSize={{ base: "16px", lg: "14px" }}
      lineHeight="28px"
      spacing="30px"
      color="#DDDDDD"
    >
      {hasFirstLink && (
        <Link
          href="#"
          color="#E40329"
          fontSize={{ base: "16px", lg: "14px" }}
          lineHeight="28px"
        >
          Coser Select
        </Link>
      )}
      <Link href="#" isExternal>
        <Image
          src={"/img/facebook.png"}
          alt="Página do Facebook do Coser"
          width={20}
          height={20}
        />
      </Link>
      <Link href="#" isExternal>
        <Image
          src={"/img/insta.png"}
          alt="Página do Instagram do Coser"
          width={20}
          height={20}
        />
      </Link>
    </HStack>
  );
};
