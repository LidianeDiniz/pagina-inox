// pages/products.tsx
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { ProductCard } from "../components/ProductCard";

const produtos = [
  {
    title: "Corrimão de Inox 1",
    imageUrl: "/corrimao1.jpg",
    description:
      "Corrimão de inox simples, com design minimalista e acabamento suave. Feito de aço inoxidável durável para resistência e longevidade. Ideal para quem busca funcionalidade e simplicidade em um corrimão.",
    slug: "corrimao-inox-1"
  },
  {
    title: "Corrimão de Inox 2",
    imageUrl: "/corrimao2.jpg",
    description:
      "Corrimão polido em inox, apresentando um acabamento brilhante e sofisticado. Fabricado com aço inoxidável de alta qualidade para garantir durabilidade e resistência à corrosão. Perfeito para adicionar um toque de elegância e segurança a qualquer escada ou varanda.",
    slug: "corrimao-inox-2"
  },
  {
    title: "Tanque de Inox 1",
    imageUrl: "/inox1.avif",
    description:
      "Tanque de inox polido, destacando-se por seu brilho intenso e acabamento impecável. Fabricado com aço inoxidável de alta qualidade, oferece durabilidade excepcional e resistência à corrosão. Este tanque é perfeito para aplicações industriais que exigem higiene e facilidade de limpeza. ",
    slug: "tanque-1-de-inox"
  },
  {
    title: "Tanque de Inox 2",
    imageUrl: "/inox2.avif",
    description:
      "Tanque de inox polido, destacando-se por seu brilho intenso e acabamento impecável. Fabricado com aço inoxidável de alta qualidade, oferece durabilidade excepcional e resistência à corrosão. Este tanque é perfeito para aplicações industriais que exigem higiene e facilidade de limpeza. ",
    slug: "tanque-2-de-inox"
  }
];

export default function Products() {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <Box>
      <Header />
      <Box textAlign="center" mt={10}>
        <Text fontSize="6xl" color="teal.900" fontWeight="bold">
          Conheça nossos produtos.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={8}>
        {produtos.map((produto, index) => (
          <div
            key={index}
            onClick={() => handleProductClick(produto.slug)}
            style={{ cursor: "pointer" }}
          >
            <ProductCard
              title={produto.title}
              imageUrl={produto.imageUrl}
              description={produto.description}
              imageBoxSize="300px"
            />
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
