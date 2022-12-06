import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Flex,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { SiteButton } from "../SiteButton";
import allButton from "../../data-button.json";

export const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    /// enviar email
    setIsLoading(false);
  };

  return (
    <>
      <Flex
        bg="white"
        boxShadow="base"
        direction={"column"}
        padding={"48px"}
        rounded="md"
        width={{ base: "auto", md: "80%" }}
      >
        <Flex direction={{ base: "column", lg: "row" }}>
          <FormControl paddingRight={{ base: "auto", lg: "12px" }}>
            <FormLabel paddingBottom={"12px"}>Nome</FormLabel>
            <Input
              type="text"
              background="#EBEBEB"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl paddingTop={{ base: "12px", md: "auto" }}>
            <FormLabel paddingBottom={"12px"}>Número com DDD</FormLabel>
            <Input
              type="tel"
              background="#EBEBEB"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex direction={{ base: "column", lg: "row" }}>
          <FormControl
            paddingTop={"37px"}
            paddingRight={{ base: "auto", lg: "12px" }}
          >
            <FormLabel paddingBottom={"12px"}>E-mail</FormLabel>
            <Input type="email" background="#EBEBEB" />
          </FormControl>
          <FormControl paddingTop={"37px"}>
            <FormLabel paddingBottom={"12px"}>Cidade</FormLabel>
            <Input type="text" background="#EBEBEB" />
          </FormControl>
        </Flex>
        <FormControl paddingTop={"37px"}>
          <FormLabel paddingBottom={"12px"}>Mensagem</FormLabel>
          <Textarea background="#EBEBEB" resize={"none"} />
        </FormControl>
        <Flex key={allButton[2].id} mt={"40px"}>
          <SiteButton {...allButton[2]} />
          {/* <Button size={"md"} onClick={handleSubmit} isLoading={isLoading}>
            Enviar form
          </Button> */}
        </Flex>
        {/* <Flex>
          Nome: {name} <br />
          Email: {email} <br />
          Cidade: {city} <br />
          Telefone: {phone} <br />
          Mensagem: {msg} <br />
        </Flex> */}
      </Flex>
    </>
  );
};
