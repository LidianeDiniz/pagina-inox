import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.600" w="100%" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">
          Bem-vindo à nossa Fabricante de Inox!
        </Text>
        <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link px={2}>Início</Link>
            </NextLink>
            <NextLink href="/produtos" passHref>
              <Link px={2}>Produtos</Link>
            </NextLink>
            <NextLink href="/videos" passHref>
              <Link px={2}>Vídeos</Link>
            </NextLink>
            <NextLink href="/contato" passHref>
              <Link px={2}>Contato</Link>
            </NextLink>
          </Flex>
        </Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Open Menu"
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ base: "block", md: "none" }}>
          <Flex flexDirection="column">
            <NextLink href="/" passHref>
              <Link px={2} py={1}>
                Início
              </Link>
            </NextLink>
            <NextLink href="/produtos" passHref>
              <Link px={2} py={1}>
                Produtos
              </Link>
            </NextLink>
            <NextLink href="/videos" passHref>
              <Link px={2} py={1}>
                Vídeos
              </Link>
            </NextLink>
            <NextLink href="/contato" passHref>
              <Link px={2} py={1}>
                Contato
              </Link>
            </NextLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
