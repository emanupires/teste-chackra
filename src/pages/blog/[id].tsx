import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { showPostOnNewPage } from "../../services/api";

export default function Home() {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      showPostOnNewPage(router.query.id).then((res) => setPost(res));
    }
  }, [router]);

  return (
    <>
      <Header />
      <Flex
        as="section"
        justify={"center"}
        height={"80vh"}
        paddingX={{ base: "30px", md: "auto" }}
        paddingY={{ base: "24px", md: "64px" }}
        width={"100%"}
      >
        <Flex maxW={{ base: "full", md: "1170px" }} direction={"column"}>
          {post && (
            <>
              <Heading paddingBottom={"24px"}>{post.title}</Heading>
              <Text>{post.body}</Text>
            </>
          )}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
