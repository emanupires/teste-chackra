import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

export interface IMenuLinks {
  id?: number;
  name: string;
  link: string;
}

export const MenuLinks = () => {
  const menuList = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Sobre a Coser", link: "#sobre-coser" },
    { id: 3, name: "Serviços", link: "#servicos" },
    { id: 4, name: "Contato", link: "#contato" },
  ];

  return (
    <Flex>
      <Flex
        color="#DDDDDD"
        fontSize={{ base: "16px", lg: "14px" }}
        lineHeight="28px"
        justifyContent={"space-around"}
        direction={{ base: "column", md: "row" }}
        padding={{ base: "24px", md: "auto" }}
        mb={{ base: "12px", md: "auto" }}
      >
        {menuList.length > 0 &&
          menuList.map((menu) => (
            <Link
              key={menu.id}
              href={menu.link}
              paddingRight={"16px"}
              paddingTop={{ base: "16px", md: "auto" }}
            >
              {menu.name}
            </Link>
          ))}
      </Flex>
    </Flex>
  );
};
