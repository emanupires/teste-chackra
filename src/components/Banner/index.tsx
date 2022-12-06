import React from "react";
import {
  Box,
  Heading,
  Image,
  ChakraProvider,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import { url } from "inspector";

export const Banner = () => {
  return (
    <Flex
      alignItems={"flex-end"}
      bgImage={"/img/img.jpg"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      height={"90vh"}
      justify={"center"}
      mt={"-93px"}
      paddingBottom="48px"
      objectFit={"cover"}
    >
      <Flex direction={"column"} textAlign={"center"}>
        <Box>
          <Heading
            color="#FFFFFF"
            fontSize={"52px"}
            fontWeight={"250"}
            lineHeight={"70px"}
            textTransform={"uppercase"}
          >
            Coser Auto Serviço
          </Heading>
        </Box>
        <Box>
          <Text color="#8B8B8B" fontWeight={"400"} paddingTop={"24px"}>
            Quem nos escolhe prefere mais{" "}
            <Text
              as="span"
              color="#EEEEEE"
              display={"inline"}
              fontWeight={"bold"}
            >
              performance
            </Text>{" "}
            e{" "}
            <Text
              as="span"
              color="#EEEEEE"
              display={"inline"}
              fontWeight={"bold"}
            >
              desempenho
            </Text>
          </Text>
        </Box>
        <Box alignSelf={"center"} paddingTop={"24px"}>
          <Text
            color="#BABABA"
            fontSize={"12px"}
            letterSpacing={"0.48px"}
            textTransform={"uppercase"}
          >
            Veja mais
          </Text>
        </Box>
        <Box alignSelf={"center"} paddingTop={"24px"}>
          <Link href="#">
            <Image src="/img/mais.png" alt="Conheça mais sobre o Coser" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
