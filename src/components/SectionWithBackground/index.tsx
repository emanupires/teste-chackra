import React from "react";
import { Heading, GridItem, Grid, Flex, Text, Portal } from "@chakra-ui/react";
import { TransparentCard } from "../TransparentCards";
import { TextSections, ITitle } from "../TitlesSections";
import allTitles from "../../data-title.json";
import allButton from "../../data-button.json";
import { SiteButton } from "../SiteButton";
import { ModalCoser } from "../ModalCoser";

export const SectionWithBackground = () => {
  return (
    <Flex
      as="section"
      bgImage={"img/bgcoser.jpg"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      width={"100%"}
      padding={{ base: "32px", lg: "80px" }}
      paddingX={{ base: "30px", md: "auto" }}
      justifyContent={"center"}
      direction={{ base: "column", md: "row" }}
      objectFit={"cover"}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        maxW={{
          sm: "full",
          lg: "1170px",
        }}
        px={{
          sm: "15px",
          lg: "0",
        }}
      >
        <GridItem>
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(2, 50%)" }}
            gap={{ base: "16px", lg: "58px" }}
          >
            <TransparentCard />
          </Grid>
        </GridItem>
        <GridItem
          alignSelf={"center"}
          paddingTop={{ base: "32px", lg: "auto" }}
          paddingLeft={{ base: "auto", lg: "60px" }}
        >
          <TextSections {...allTitles[2]} color="#FFF" />
          <Text
            color={"#FFFFFFB3"}
            fontSize={{ base: "12px", lg: "14px" }}
            lineHeight={"21px"}
            paddingBottom={"16px"}
          >
            Viverra volutpat amet rhoncus urna, ullamcorper interdum non
            condimentum. Aliquet eget morbi urna a, at. Et consequat enim
            faucibus diam lectus ullamcorper est pharetra, sagittis. A varius
            cursus scelerisque ut. Amet.
          </Text>
          {
            <Flex key={allButton[1].id}>
              <SiteButton {...allButton[1]} />
            </Flex>
          }
        </GridItem>
      </Grid>
    </Flex>
  );
};
