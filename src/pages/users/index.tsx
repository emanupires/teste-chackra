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
  getAllUsers,
  showPostOnNewPage,
} from "../../services/api";
import { useRouter } from "next/router";
import Link from "next/link";

interface IUSers {
  id: number;
  name: string;
  username: string;
  website: string;
  company: ICompany;
}

interface ICompany {
  name: string;
  bs: string;
}

export default function Usuarios() {
  const [allUsers, setAllUsers] = useState<IUSers[] | null>(null);

  const router = useRouter();

  useEffect(() => {
    getAllUsers().then((res) => setAllUsers(res));
  }, []);

  return (
    <>
      <Header />
      <Flex
        as="section"
        justify={"center"}
        minH={"80vh"}
        marginY={{ base: "24px", md: "64px" }}
        width={"100%"}
      >
        <Grid
          maxW={{ base: "fill", md: "1170px" }}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={"6"}
        >
          {allUsers &&
            allUsers.map((user) => (
              <Grid
                key={user.id}
                padding="16px"
                backgroundColor="#FFF"
                borderRadius={"8px"}
                boxShadow="base"
              >
                <Link href={`/users/${user.id}`}>
                  <Image
                    alt="placeholder"
                    height={"100px"}
                    src="https://place-hold.it/100x100/7F0000/FFFFFF.jpg"
                    width={"100px"}
                    borderRadius={"50%"}
                  />
                  <Heading
                    fontSize={{ base: "16px", md: "18px" }}
                    mt={"12px"}
                    maxW={"70%"}
                  >
                    {user.name}
                  </Heading>
                  <Text paddingTop={"12px"} color={"#7F0000"}>
                    {user.website}
                  </Text>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Flex>
      <Footer />
    </>
  );
}
