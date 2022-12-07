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
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import axios from "axios";
import {
  api,
  getAllPosts,
  getAllPostsByUser,
  showPostOnNewPage,
} from "../../services/api";
import { useRouter } from "next/router";
import Link from "next/link";

interface IPost {
  id: number;
  title: string;
  body: string;
}

export default function Blog() {
  const [allPosts, setAllPosts] = useState<IPost[] | null>(null);
  const [currentUser, setCurrentUser] = useState(1);

  const router = useRouter();

  useEffect(() => {
    // getAllPostsByUser(currentUser).then((res) => setAllPosts(res));
    getAllPosts().then((res) => setAllPosts(res));
  }, [currentUser]);

  // <Button onClick={() => setCurrentUser(2)}>Get post user 2</Button> -> originalmente pertence ao flex
  return (
    <>
      <Header />

      <Flex
        width={"100%"}
        as="section"
        justify="center"
        marginY={{ base: "24px", md: "64px" }}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          maxW={{ base: "full", md: "1170px" }}
        >
          {allPosts &&
            allPosts.map((post) => (
              <GridItem key={post.id} padding="16px">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src="https://via.placeholder.com/300x200"
                    alt={"Placeholder"}
                    width={"300"}
                    height={"200"}
                  />
                  <Text maxW={"80%"}>{post.title}</Text>
                </Link>
              </GridItem>
            ))}
        </Grid>
      </Flex>

      <Footer />
    </>
  );
}
/*
onclick -> redireciona à página post com os elementos do post (useNavigate)
ao cliclar, é utilizado o id do post para se fazer a requisição e exibir a postagem completa 
criar nova page com um botão para quando ele for clicado, ser redirecionado
*/
