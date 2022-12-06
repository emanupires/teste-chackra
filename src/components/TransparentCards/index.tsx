import React from "react";
import {
  Box,
  Text,
  Link,
  Heading,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { ModalCoser } from "../ModalCoser";

export interface ITransparentCard {
  id?: number;
  icon: string;
  title: string;
}

export const TransparentCard = () => {
  const transparentCardList: ITransparentCard[] = [
    {
      id: 1,
      icon: "/img/cosericon.png",
      title: "Balanceamento",
    },
    {
      id: 2,
      icon: "/img/cosericon.png",
      title: "Revisões",
    },
    {
      id: 3,
      icon: "/img/cosericon.png",
      title: "Rodas",
    },
    {
      id: 4,
      icon: "/img/cosericon.png",
      title: "Alinhamento 3D",
    },
  ];
  return (
    <>
      {transparentCardList.map((card) => (
        <Grid key={card.id} bg={"transparent"} gap={6} width={"fit-content"}>
          <GridItem paddingBottom={{ base: "16px", md: "auto" }}>
            <Image
              src={card.icon}
              width={58}
              height={58}
              alt={"Serviço de {card.titulo}"}
            />
            <Heading
              color={"#FFF"}
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight={"700"}
              paddingBottom={"10px"}
              paddingTop={"21px"}
            >
              {card.title}
            </Heading>
            <Text
              color="#FFFFFF"
              fontSize={{ base: "12px", md: "13px" }}
              lineHeight={"18px"}
              paddingBottom={"22px"}
            >
              At purus fames mauris, ornare mattis nec. Nulla ut lectus in
              ultrices rhoncus honcus nisl ultrices vestibulum.
            </Text>
            <ModalCoser />
          </GridItem>
        </Grid>
      ))}
    </>
  );
};
