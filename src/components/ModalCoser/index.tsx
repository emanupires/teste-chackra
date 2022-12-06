import React from "react";
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { SiteButton } from "../SiteButton";
import allButton from "../../data-button.json";

export function ModalCoser() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="button"
        onClick={onOpen}
        alignItems={"center"}
        paddingRight={"5px"}
      >
        <Text
          color="#FFFFFF"
          fontWeight={"700"}
          paddingRight={"10px"}
          textTransform={"uppercase"}
        >
          Saiba mais
        </Text>
        <Image
          alt={"Acesse mais sobre nossos serviços"}
          height={6}
          src="/img/vejamais.png"
          width={10}
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="700px" boxShadow="lg" rounded="md">
          <ModalHeader padding={"11px"} textAlign={"center"}>
            <Image
              alt={"Mais informações sobre Revisão Preventiva"}
              height={"309"}
              src={"/img/cosermodal.jpg"}
              width={"751"}
            />
            <Heading
              fontWeight={"600"}
              fontSize={"30px"}
              textTransform={"uppercase"}
              paddingTop={"36px"}
            >
              Revisão Preventiva
            </Heading>
          </ModalHeader>
          <ModalBody
            color="#555555"
            lineHeight={"21px"}
            paddingX={"25px"}
            paddingY={"32px"}
            fontSize={"14px"}
          >
            <Text paddingBottom={"16px"}>
              Eu in morbi enim senectus proin id. In vel nunc leo amet id. Quis
              vel scelerisque et massa molestie quam tristique. Viverra cursus
              condimentum etiam turpis integer dictum et. In sem lectus a arcu
              pellentesque amet.
            </Text>
            <Text>
              Lorem egestas placerat dui nec. Leo erat aliquet nibh bibendum
              eget odio viverra. Etiam aliquam nulla amet, adipiscing fames.
              Ultricies amet blandit ac et arcu amet in. Mi, sed fringilla
              pellentesque amet at varius non lorem. Nulla aliquam lacus sed
              sit.
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <Flex
              as="button"
              alignItems={"baseline"}
              onClick={onClose}
              padding={"12px"}
            >
              <Image
                alt="Volte à página inicial"
                height={"3"}
                src="/img/voltar.png"
                width={"6"}
              />
              <Text
                paddingLeft={"13px"}
                color="#9894AD"
                fontSize={{ base: "12px", md: "16px" }}
              >
                Voltar
              </Text>
            </Flex>
            <Flex key={allButton[3].id}>
              <SiteButton {...allButton[3]} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

/*

*/
