import React from "react";
import {
  Heading,
  Flex,
  Text,
  Card,
  CardBody,
  Box,
  VStack,
} from "@chakra-ui/react";
import icon from "../../../public/img/star.png";
import Image from "next/image";

export interface ISimpleCards {
  id?: number;
  icon: string;
  title: string;
  description: string;
}
export const SimplesCards = () => {
  const cardList: ISimpleCards[] = [
    {
      id: 1,
      icon: "/img/star.png",
      title: "Excelência",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      id: 2,
      icon: "/img/formas.png",
      title: "Serviço especializado",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      id: 3,
      icon: "/img/escudos.png",
      title: "Confiablidade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];
  return (
    <>
      {cardList.map((card) => (
        <Card
          key={card.id}
          mt={"31px"}
          mr={"26px"}
          background={"#FFF"}
          boxShadow="lg"
          bg="white"
        >
          <CardBody padding={"31px"}>
            <Image src={card.icon} alt="" width="24" height="24" />
            <Heading fontSize={"14px"} mb={"9px"} mt={"42px"}>
              {card.title}
            </Heading>
            <Text>{card.description}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
