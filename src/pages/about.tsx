import Footer from "@/components/Footer";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Box p={4} bg="white">
      <Heading as="h1" fontSize="6xl" mb={8} color="teal.500">
        Sobre Nós
      </Heading>
      <Text fontSize="lg" mb={4} color="gray.600">
        Somos uma fábrica localizada na encantadora cidade de Lambari, MG. Há
        anos, temos nos dedicado a produzir produtos de alta qualidade para o
        segmento de laticínios e muito mais.
      </Text>
      <Text fontSize="lg" mb={4} color="gray.600">
        Nossa história é marcada pela paixão por aço inoxidável e pela busca
        constante pela excelência em cada peça que fabricamos. Ao longo dos
        anos, conquistamos a confiança de nossos clientes com produtos duráveis,
        confiáveis e elegantes.
      </Text>
      <Image
        src="/image.png"
        alt="Nossa Fábrica"
        maxW="100%"
        display="flex"
        margin="0 auto"
        mt={8}
        mb={8}
      />
      <Text fontSize="lg" mb={4} color="gray.600">
        Nossa missão é fornecer soluções de aço inoxidável que atendam às
        necessidades de nossos clientes e superem suas expectativas. Trabalhamos
        incansavelmente para garantir que cada produto que sai de nossa fábrica
        seja uma obra de arte em aço.
      </Text>
      <Text fontSize="lg" mb={4} color="gray.600">
        Valorizamos a qualidade, a inovação e o compromisso com a satisfação de
        nossos clientes. Acreditamos que nossos produtos são uma extensão de
        nosso compromisso com a excelência e o profissionalismo.
      </Text>
      <Text fontSize="lg" mb={8} color="gray.600">
        Estamos ansiosos para continuar atendendo às necessidades de nossos
        clientes e expandir nossa linha de produtos para atender a indústrias
        variadas. Obrigado por fazer parte da nossa jornada!
      </Text>
      <Footer />
    </Box>
  );
};

export default AboutUsPage;
