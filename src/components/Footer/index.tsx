import React from "react";
import { Flex, Link, Text, Image } from "@chakra-ui/react";
import { MenuLinks } from "../MenuLinks";
import { SocialIcon } from "../SocialIcons";

export const Footer = () => {
  return (
    <>
      <Flex
        as="section"
        backgroundColor="#023C76"
        direction={"column"}
        paddingTop={"24px"}
        width={"100%"}
        position={"relative"}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Image
            alt="Logo do Coser"
            height={"43px"}
            src="/img/logobranco.png"
            width={"106px"}
            mb={{ base: "14px", md: "38px" }}
          />
          <Flex paddingBottom={"34px"}>
            <MenuLinks />
          </Flex>
          <Flex
            justifyContent={"space-between"}
            width={"100%"}
            borderTop={"1px"}
            borderColor={"#1b4f83"}
            direction={{ base: "column", lg: "row" }}
            paddingTop={{ base: "16px", lg: "31px" }}
            paddingBottom={{ base: "16px", lg: "auto" }}
            alignItems={"center"}
          >
            <SocialIcon />
            <Text
              color="#D9DBE1"
              fontSize="13px"
              lineHeight="21px"
              paddingBottom={{ base: "16px", lg: "auto" }}
              paddingTop={{ base: "16px", lg: "auto" }}
              alignItems={{ base: "center", lg: "auto" }}
            >
              © 2022 Coser Auto Serviço. Todos os direitos reservados.
            </Text>
            <Flex
              direction={{ base: "column", lg: "row" }}
              alignItems={{ base: "left", lg: "center" }}
              paddingBottom={{ base: "16px", lg: "auto" }}
            >
              <Link href="https://bluweb.cc/" isExternal>
                <Text color={"#FFFFFF"} fontSize={"13px"} paddingRight={"8px"}>
                  Desenvolvido por
                </Text>
              </Link>
              <Image
                alt="logo da Bluweb"
                height={"14px"}
                src="/img/bluweb.png"
                width={"66px"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
