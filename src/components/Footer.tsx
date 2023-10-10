import { Box, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <Box p={1} height="60px" bg="teal.900" color="white">
      <HStack justify="space-between" align="center" p={2} spacing={16}>
        <HStack spacing={3}>
          <HStack
            spacing={6}
            display="flex"
            alignItems="center"
            fontSize="sm"
            marginLeft="auto"
          >
            <Link href="/">Página Inicial</Link>
            <Link href="/about">Sobre Nós</Link>
            <Link href="/products">Produtos</Link>
            <Link href="/contact">Contato</Link>
          </HStack>

          <Link href="#" aria-label="Facebook">
            <IconButton
              icon={<FaFacebook />}
              fontSize="lg"
              color="facebook.700"
              variant="ghost"
              isRound
              aria-label="Facebook"
            />
          </Link>
          <Link href="#" aria-label="WhatsApp">
            <IconButton
              icon={<FaWhatsapp />}
              fontSize="lg"
              color="whatsapp.700"
              variant="ghost"
              isRound
              aria-label="WhatsApp"
            />
          </Link>
        </HStack>

        <Text textAlign="center" fontSize="sm" p={2}>
          &copy; 2023 Nome da Sua Empresa. Todos os direitos reservados.
        </Text>
      </HStack>
    </Box>
  );
}
