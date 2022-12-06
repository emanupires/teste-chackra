import React from "react";
import { AspectRatio, Box, VStack, Flex, Text, Portal } from "@chakra-ui/react";

export const Video = () => {
  return (
    <VStack mb={"0px"} spacing={"0"} mt={{ base: "60px", lg: "0px" }}>
      <Box
        as="video"
        controls
        maxH={"90%"}
        objectFit="contain"
        src="/media/video.mp4"
        width={"500px"}
        zIndex={"1"}
        maxWidth={"100% - 16px"}
      />
      <Box
        bg={"#D2D2D2"}
        borderBottomRadius={"24px"}
        width={{ base: "215px", md: "433px" }}
        height={{ base: "16px", md: "31px" }}
        mt={"-10px"}
      />
      <Box
        bg={"#EBEBEB"}
        borderBottomRadius={"24px"}
        width={{ base: "166px", md: "331px" }}
        height={{ base: "11px", md: "22px" }}
        mt={"-10px"}
      />
    </VStack>
  );
};
