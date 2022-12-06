import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Center,
  HStack,
  Link,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SocialIcon } from "../SocialIcons";
import { MenuLinks } from "../MenuLinks";
import { useState } from "react";

export default function Header() {
  const [display, changeDisplay] = useState("none");

  return (
    <Flex
      background="rgb(0,0,0,0.8)"
      justifyContent="center"
      position={"relative"}
      paddingX={{ base: "16px", md: "auto" }}
      maxH={"93px"}
    >
      <Flex
        w="full"
        maxW="1170px"
        justifyContent="space-between"
        py="24px"
        alignItems={"center"}
      >
        <Flex>
          <Link href="http://localhost:3000">
            <Image
              src={"/img/logo.png"}
              alt="Logo site Coser Oficina"
              width={"106px"}
              height={"43px"}
            />
          </Link>
        </Flex>
        <Flex display={["none", "none", "flex", "flex"]}>
          <MenuLinks />
        </Flex>
        <IconButton
          aria-label="Abrir Menu"
          bgColor={"blackAlpha.800"}
          color={"#FFF"}
          size="lg"
          icon={<HamburgerIcon />}
          display={[" flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />
        <Flex
          w={"100vw"}
          bgColor={"blackAlpha.900"}
          color={"#FFF"}
          zIndex={20}
          h={"100vh"}
          top="0"
          left="0"
          pos={"fixed"}
          overflowY="auto"
          direction={"column"}
          display={display}
        >
          <Flex justifyContent={"flex-end"}>
            <IconButton
              aria-label="Fechar Menu"
              size="lg"
              bgColor={"blackAlpha.800"}
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Flex direction={"column"} align="center">
            <Flex>
              <Image
                src={"/img/logo.png"}
                alt="Logo site Coser Oficina"
                width={"auto"}
                height={"auto"}
              />
            </Flex>
            <MenuLinks />
            <Flex alignItems="center" gap="33px">
              <SocialIcon hasFirstLink />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          gap="33px"
          display={["none", "none", "flex", "flex"]}
        >
          <SocialIcon hasFirstLink />
        </Flex>
      </Flex>
    </Flex>
  );
}
