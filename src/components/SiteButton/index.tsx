import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { serialize } from "v8";

export interface IButton {
  id?: number;
  text: string;
  width: string;
  color: string;
  height: string;
}

export const SiteButton = ({ id, text, width, color, height }: IButton) => {
  return (
    <>
      <Box
        as="button"
        bgColor={color}
        borderRadius={"7px"}
        height={height}
        width={width}
        boxShadow="lg"
      >
        <Text color="#FFF" fontSize={"14px"} align="center">
          {text}
        </Text>
      </Box>
    </>
  );
};
