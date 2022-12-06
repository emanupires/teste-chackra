import React from "react";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Text,
  Portal,
  Image,
} from "@chakra-ui/react";

export interface ICardInfo {
  id?: number;
  icon: string;
  text: string;
  text2?: string;
}

export const CardInfo = ({ id, icon, text, text2 }: ICardInfo) => {
  return (
    <>
      <Flex
        bgColor={"#E4EAFF"}
        borderRadius={"8px"}
        direction={"column"}
        marginRight={"32px"}
        padding={"16px"}
        width={"fit-content"}
        marginBottom={{ base: "12px", md: "auto" }}
        paddingBottom={{ base: "12px", md: "auto" }}
      >
        <Image
          src={icon}
          width={34}
          height={34}
          marginBottom={"-42px"}
          marginLeft={"-32px"}
          justifySelf={"center"}
          alt="Informações sobre o Coser"
        />
        <Text
          color="#595959"
          fontSize={"15px"}
          fontWeight={"600"}
          lineHeight={"25px"}
          paddingLeft={"12px"}
        >
          {text}
        </Text>
        <Text
          color="#595959"
          fontSize={"15px"}
          fontWeight={"600"}
          lineHeight={"25px"}
          paddingLeft={"12px"}
        >
          {text2}
        </Text>
      </Flex>
    </>
  );
};
