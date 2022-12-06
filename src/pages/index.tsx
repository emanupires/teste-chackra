import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import { ISimpleCards, SimplesCards } from "../components/SimpleCards";
import { Banner } from "../components/Banner";
import { ITitle, TextSections } from "../components/TitlesSections";
import { SiteButton, IButton } from "../components/SiteButton";
import allButton from "../data-button.json";
import { Video } from "../components/Video";
import { SectionWithBackground } from "../components/SectionWithBackground";
import allTitles from "../data-title.json";
import { SectionWithIcon } from "../components/SectionWithIcon";
import { Formulario } from "../components/Formulario";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Flex
        as={"section"}
        width={"100%"}
        paddingY={{ base: "32px", md: "197px" }}
      >
        <Flex
          maxW={{ base: "full", md: "80%" }}
          direction={{ base: "column", md: "row" }}
        >
          <Image
            src={"/img/coser1.jpg"}
            alt="Fachada do Coser"
            width={"605"}
            height={"475"}
            borderRadius={"25px"}
          />
          <Flex
            direction={"column"}
            paddingX={{ base: "30px", md: "auto" }}
            paddingTop={{ base: "16px", md: "auto" }}
            width={{ base: "100%", md: "auto" }}
            justifyContent={"center"}
          >
            {
              <Flex key={allTitles[0].id}>
                <TextSections {...allTitles[0]} />
              </Flex>
            }
            <Text
              color="#333333"
              fontSize={"14px"}
              lineHeight={"21px"}
              mt={"21px"}
            >
              Amet at semper sed sed orci sit sed. Congue et faucibus
              consectetur gravida bibendum. At lectus porttitor tincidunt
              parturient vitae purus lacus mi. Parturient facilisis pellentesque
              in velit elementum est nunc. Consequat dictumst vel sit blandit.
            </Text>
            <Text
              color="#333333"
              fontSize={"14px"}
              lineHeight={"21px"}
              mt={"21px"}
            >
              Vestibulum mattis sem pretium consectetur. Lectus fermentum quam
              non nisl. Leo odio vitae in consequat, non convallis. Dui duis
              aliquam eget et nulla. Nibh nisl mauris, turpis porttitor neque,
              ultricies tincidunt turpis risus. Velit pellentesque varius enim,
              sem.
            </Text>
            <Flex
              direction={{
                base: "column",
                md: "row",
              }}
            >
              <SimplesCards />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section"
        width={"100%"}
        direction={{ base: "column", lg: "row" }}
        paddingY={"60px"}
        paddingX={{ base: "30px", md: "auto" }}
        justifyContent={"center"}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          maxW={{ base: "fill", md: "1170px" }}
          paddingLeft={{ base: "16px", lg: "auto" }}
          alignItems="center"
        >
          <Flex direction={"column"}>
            {
              <Flex key={allTitles[1].id}>
                <TextSections {...allTitles[1]} />
              </Flex>
            }
            <Text paddingTop={"25px"} maxW={{ base: "auto", md: "90%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            {
              <Flex mt={{ base: "24px", lg: "35px" }} key={allButton[0].id}>
                <SiteButton {...allButton[0]} />
              </Flex>
            }
          </Flex>
          <Video />
        </Flex>
      </Flex>
      <SectionWithBackground />
      <Flex
        as="section"
        paddingY={{ base: "24px", lg: "64px" }}
        bgImage={"/img/map.png"}
        bgSize={"contain"}
        width={"100%"}
        objectFit={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        justify={"center"}
        alignItems={"center"}
      >
        <SectionWithIcon />
      </Flex>
      <Footer />
    </>
  );
}
