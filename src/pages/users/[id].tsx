import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  Heading,
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

export default function Users() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      showUserOnNewPage(router.query.id).then((res) => setUser(res));
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
        <Flex maxW={{ base: "full", md: "1170px" }} direction={"column"}>
          {user && (
            <>
              <Heading paddingBottom={"24px"}>
                {user.name} - {user.company.name} - {user.website}
              </Heading>
              <Text>{user.website}</Text>
            </>
          )}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
