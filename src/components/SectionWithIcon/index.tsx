import React from "react";
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Text,
  Portal,
  Card,
} from "@chakra-ui/react";
import Image from "next/image";
import allTitles from "../../data-title.json";
import { TextSections } from "../TitlesSections";
import { CardInfo, ICardInfo } from "../CardInfo";
import allCardInfo from "../../data-info.json";
import { Formulario } from "../Formulario";

export const SectionWithIcon = () => {
  return (
    <Flex
      paddingX={{ base: "30px", md: "auto" }}
      width={"100%"}
      justify={"center"}
    >
      <Flex maxW={"1170px"} direction={{ base: "column", lg: "row" }}>
        <Flex direction="column" paddingBottom={{ base: "16px", lg: "auto" }}>
          <Image
            alt="Telefone"
            height={"118"}
            src={"/img/support.png"}
            width={"118"}
          />
          <Flex paddingTop={{ base: "12px", lg: "40px" }} key={allTitles[3].id}>
            <TextSections {...allTitles[3]} font={"34px"} />
          </Flex>
          <Text
            color="#000"
            fontSize={"14px"}
            lineHeight={"23px"}
            paddingBottom={"66px"}
            paddingTop={"19px"}
            maxW={{ base: "auto", md: "80%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </Text>
          <Flex
            direction={{ base: "column", lg: "row" }}
            alignItems={{ base: "center", md: "auto" }}
          >
            {allCardInfo.map((card) => (
              <CardInfo key={card.id} {...card} />
            ))}
          </Flex>
        </Flex>
        <Formulario />
      </Flex>
    </Flex>
  );
};
