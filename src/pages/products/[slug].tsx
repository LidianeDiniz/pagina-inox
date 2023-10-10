import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "../../components/Header";

const ProductDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>Carregando...</div>;
  }

  // Faça uma requisição para a API para buscar os detalhes do produto
  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${slug}`);
      if (response.ok) {
        const product = await response.json();
        return product;
      }
      throw new Error("Produto não encontrado");
    } catch (error) {
      console.error("Erro ao buscar detalhes do produto:", error);
      return null;
    }
  };

  const { data: product, error } = useSWR(
    `/api/products/${slug}`,
    fetchProduct
  );

  if (error) {
    return <div>Erro ao buscar detalhes do produto</div>;
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Box>
      <Header />
      <Box textAlign="center" mt={10}>
        <Text fontSize="6xl" color="teal.900" fontWeight="bold">
          Detalhes do Produto: {product.title}
        </Text>
      </Box>
      <Box p={8}>
        <Text fontSize="xl">{product.description}</Text>
        <img src={product.imageUrl} alt={product.title} />
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
