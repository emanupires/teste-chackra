import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  Heading,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import axios from "axios";
import {
  api,
  getAllPosts,
  getAllPostsByUser,
  showPostOnNewPage,
  showUserOnNewPage,
} from "../../services/api";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import { IUSers } from ".";

export default function Users() {
  const router = useRouter();
  const [user, setUser] = useState<IUSers | null>(null);

  useEffect(() => {
    if (router.query.id) {
      showUserOnNewPage(Number(router.query.id)).then((res) => setUser(res));
    }
  }, [router]);

  return (
    <>
      <Header />
      <Flex
        as="section"
        justify={"center"}
        minH={"80vh"}
        paddingX={{ base: "30px", md: "auto" }}
        paddingY={{ base: "24px", md: "64px" }}
        width={"100%"}
      >
        <Grid
          maxW={{ base: "full", md: "1170px" }}
          templateColumns={{ base: "1fr", md: "1fr 2fr" }}
          gap={{ base: 5, lg: 1 }}
        >
          <Image
            alt="Foto do usuário"
            src="https://place-hold.it/300x300/3a1cff"
            width={"300px"}
            height={"300px"}
          />
          <Box>
            {user && (
              <>
                <Heading paddingBottom={"24px"} color="#7F0000">
                  {user.name}
                </Heading>
                <Text paddingBottom={"12px"} fontSize={"18px"}>
                  Conheça mais sobre o trabalho de {user.name}:
                </Text>
                <Text paddingBottom={"12px"}>
                  Conhecido também como{" "}
                  <Text as="span" color="#7F0000" fontWeight={"700"}>
                    {user.username}
                  </Text>
                  , trabalha na empresa{" "}
                  <Text as="span" color="#7F0000" fontWeight={"700"}>
                    {user.company.name}
                  </Text>
                  , localizada em{" "}
                  <Text as="span" color="#7F0000" fontWeight={"700"}>
                    {user.address.city}
                  </Text>
                  .
                  <Text paddingY={"24px"} fontWeight={"700"}>
                    Saiba mais em{" "}
                    <Text as="span" color="#7F0000">
                      {user.website}
                    </Text>
                  </Text>
                  <Text paddingBottom={"12px"}>
                    Entre em contato também por:
                  </Text>
                  <UnorderedList paddingBottom={"12px"}>
                    <ListItem paddingBottom={"12px"}>
                      Telefone: {user.phone}
                    </ListItem>
                    <ListItem>Email: {user.email} </ListItem>
                  </UnorderedList>
                </Text>
              </>
            )}
          </Box>
        </Grid>
      </Flex>
      <Footer />
    </>
  );
}
