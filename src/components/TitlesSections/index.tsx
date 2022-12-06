import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

export interface ITitle {
  id?: number;
  subtitle?: string;
  title: string;
  color?: string;
  font?: string;
}

export const TextSections = ({
  id,
  subtitle,
  title,
  color = "#000",
  font = "28px",
}: ITitle) => {
  return (
    <>
      <Box>
        <Text color="#666666" fontSize={"13px"}>
          {subtitle}
        </Text>
        <Heading
          color={color}
          fontSize={font}
          fontWeight={"700"}
          lineHeight={"42px"}
        >
          {title}
        </Heading>
      </Box>
    </>
  );
};
